---
templateKey: "model-page"
id: ObjectDetector
exampleimgsrc: ../assets/ref-yolo-round.png
title: ObjectDetector()
description: >- 
  Usage of machine learning algorithms to detect objects on an image/video and their location
tags:
  - image
  - video
order: 10

examples:
  - title: Image Classification (Coco Ssd)
    github: https://github.com/ml5js/ml5-examples/tree/release/p5js/ObjectDetector/ObjectDetector_COCOSSD_single_image
    demo: https://ml5js.github.io/ml5-examples/p5js/ObjectDetector/ObjectDetector_COCOSSD_single_image
    code: >-
        // Create a cocoSsd classifier

        let cocoSsd;
        let img;
        let objects = [];
        let status;

        function preload(){
            img = loadImage('images/cat2.JPG');
        }


        function setup() {
            createCanvas(640, 420);
            cocoSsd = ml5.objectDetector('cocossd', modelReady);
        }

        // Change the status when the model loads.
        function modelReady() {
            console.log("model Ready!")
            status = true;
            console.log('Detecting') 
            cocoSsd.detect(img, gotResult);
        }

        // A function to run when we get any errors and the results
        function gotResult(err, results) {
            if (err) {
                console.log(err);
            }
            console.log(results)
            objects = results;
        }


        function draw() {
            // unless the model is loaded, do not draw anything to canvas
            if (status != undefined) {
                image(img, 0, 0)

                for (let i = 0; i < objects.length; i++) {
                    noStroke();
                    fill(0, 255, 0);
                    text(objects[i].label + " " + nfc(objects[i].confidence * 100.0, 2) + "%", objects[i].x + 5, objects[i].y + 15);
                    noFill();
                    strokeWeight(4);
                    stroke(0, 255, 0);
                    rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
                }
            }
        }

---
ObjectDetector uses either CocoSsd or YOLO model to detect objects on the screen.


###CocoSsd

[CocoSsd](https://github.com/tensorflow/tfjs-models/tree/master/coco-ssd) (Coco Single Shot MultiBox Detection)

From the creators website:

> This model detects objects defined in the COCO dataset, which is a large-scale object detection, segmentation, and captioning dataset. You can find more information [here](http://cocodataset.org/#home). The model is capable of detecting [90 classes of objects](./src/classes.ts). (SSD stands for Single Shot MultiBox Detection).

###YOLO

You only look once ([YOLO](https://pjreddie.com/darknet/yolo/)) is a state-of-the-art, real-time object detection system.

From the [creators](https://pjreddie.com/darknet/yolo/) website:

> Prior detection systems repurpose classifiers or localizers to perform detection. They apply the model to an image at multiple locations and scales. High scoring regions of the image are considered detections.
> We use a totally different approach. We apply a single neural network to the full image. This network divides the image into regions and predicts bounding boxes and probabilities for each region. These bounding boxes are weighted by the predicted probabilities. [Source](https://pjreddie.com/darknet/yolo/)

This implementation is heavily derived from [ModelDepot](https://github.com/ModelDepot/tfjs-yolo-tiny).

## Example

```javascript
const video = document.getElementById("video");

// Create a objectDetector object
const objectDetector = ml5.objectDetector('cocossd', modelLoaded);

// When the model is loaded
function modelLoaded() {
  console.log("Model Loaded!");
}

// Detect objects in the video element
objectDetector.detect(function(err, results) {
  console.log(results); // Will output bounding boxes of detected objects
});
```

[Here](https://github.com/ml5js/ml5-examples/tree/release/p5js/ObjectDetector) is a complete example.

## Syntax

```javascript
ml5.objectDetector(modelNameOrUrl);
```

```javascript
ml5.objectDetector(modelNameOrUrl, ?callback);
```

```javascript
ml5.objectDetector(modelNameOrUrl, ?options, ?callback);
```

```javascript
ml5.objectDetector(modelNameOrUrl, ?suject, ?options, ?callback);
```

### Parameters
- `modelNameOrUrl` - Name of the model being used. Current available models are `cocossd` and `yolo`.
- `subject` - Optional. HTMLVideoElement, HTMLImageElement, HTMLCanvasElement, ImageData, p5 image element, or p5 video element.
- `options` - Optional. An object describing a model accuracy and performance. For YOLO this are: `{ filterBoxesThreshold: 0.01, IOUThreshold: 0.4, classProbThreshold: 0.4 }`
- `callback` - Optional. A function to run once the model has been loaded. If no callback is provided, it will return a promise that will be resolved once the model has loaded.

## Properties

```javascript
.isPredicting
```

> Boolean to check if the model is currently predicting

```javascript
.modelReady
```

> Boolean to check if the model has loaded

## Methods

```javascript
objectDetector.detect(input, ?callback)
```

```javascript
objectDetector.detect(?callback)
```

> Given an image or video, returns an array of objects containing class names, bounding boxes and probabilities.

`input` - A HHTMLVideoElement, HTMLImageElement, HTMLCanvasElement, ImageData, p5 image element, or p5 video element. If no input is provided, the default is to use the video given in the constructor.

`callback` - A function to run once the model has made the prediction. If no callback is provided, it will return a promise that will be resolved once the model has made a prediction.

## Source

[/src/ObjectDetector](https://github.com/ml5js/ml5-library/tree/release/src/ObjectDetector)
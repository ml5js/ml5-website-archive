---
templateKey: "model-page"
id: YOLO
exampleimgsrc: ../assets/ref-yolo-round.png
title: YOLO()
description: >- 
  Note: the YOLO object will soon be deprecated, please refer to [ObjectDetector](https://learn.ml5js.org/docs/#/reference/object-detector)
  <br/><br/>
  YOLO (You only look once) is a state-of-the-art, real-time object detection system.
tags:
  - image
  - video
order: 9

examples:
  - title: YOLO Image Classification
    github: https://github.com/ml5js/ml5-examples/tree/release/p5js/YOLO/YOLO_single_image
    demo: https://ml5js.github.io/ml5-examples/p5js/YOLO/YOLO_single_image
    code: >-
      const yolo = ml5.YOLO(modelReady);
      let img;
      let objects = [];
      let status;

      function setup() {
        createCanvas(640, 420);
        img = createImg('images/cat2.JPG', imageReady);
        img.hide();
        img.size(640, 420);

      }

      // Change the status when the model loads.

      function modelReady() {
        console.log("model Ready!")
        status = true;
      }

      // When the image has been loaded,
      // get a prediction for that image

      function imageReady() {
        console.log('Detecting') 
        yolo.detect(img, gotResult);
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
            text(objects[i].label + " " + nfc(objects[i].confidence * 100.0, 2) + "%", objects[i].x * width + 5, objects[i].y * height + 15);
            noFill();
            strokeWeight(4);
            stroke(0, 255, 0);
            rect(objects[i].x * width, objects[i].y * height, objects[i].w * width, objects[i].h * height);
          }
        }
      }
---

You only look once ([YOLO](https://pjreddie.com/darknet/yolo/)) is a state-of-the-art, real-time object detection system.

From the [creators](https://pjreddie.com/darknet/yolo/) website:

> Prior detection systems repurpose classifiers or localizers to perform detection. They apply the model to an image at multiple locations and scales. High scoring regions of the image are considered detections.
> We use a totally different approach. We apply a single neural network to the full image. This network divides the image into regions and predicts bounding boxes and probabilities for each region. These bounding boxes are weighted by the predicted probabilities. [Source](https://pjreddie.com/darknet/yolo/)

This implementation is heavily derived from [ModelDepot](https://github.com/ModelDepot/tfjs-yolo-tiny).

## Example

```javascript
const video = document.getElementById("video");

// Create a YOLO method
const yolo = ml5.YOLO(video, modelLoaded);

// When the model is loaded
function modelLoaded() {
  console.log("Model Loaded!");
}

// Detect objects in the video element
yolo.detect(function(err, results) {
  console.log(results); // Will output bounding boxes of detected objects
});
```

[Here](https://github.com/ml5js/ml5-examples/tree/release/p5js/YOLO) is a complete example.

## Syntax

```javascript
ml5.YOLO();
```

```javascript
ml5.YOLO(video);
```

```javascript
ml5.YOLO(video, ?options, ?callback)
```

```javascript
ml5.YOLO(?options, ?callback)
```

### Parameters
- `video` - Optional. A HTML video element or a p5 video element.
- `options` - Optional. An object describing a model accuracy and performance. For MobileNet this are: `{ filterBoxesThreshold: 0.01, IOUThreshold: 0.4, classProbThreshold: 0.4 }`
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
.detect(input, ?callback)
```

```javascript
.detect(?callback)
```

> Given an image or video, returns an array of objects containing class names, bounding boxes and probabilities.

`input` - A HTML video or image element or a p5 image or video element. If no input is provided, the default is to use the video given in the constructor.

`callback` - A function to run once the model has made the prediction. If no callback is provided, it will return a promise that will be resolved once the model has made a prediction.

## Source

[/src/YOLO](https://github.com/ml5js/ml5-library/tree/release/src/YOLO)
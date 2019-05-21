---
templateKey: "model-page"
id: UNET
exampleimgsrc: null
title: UNET()
description: >- 
  The U-Net is a convolutional neural network that was developed for biomedical image segmentation at the Computer Science Department of the University of Freiburg, Germany.[1] The network is based on the fully convolutional network [2] and its architecture was modified and extended to work with fewer training images and to yield more precise segmentations.
tags:
  - coming soon

examples:
  - title: UNET On Webcam
    github: https://github.com/ml5js/ml5-examples/tree/development/p5js/UNET/UNET_webcam
    demo: 
    code: >-
      let video;
      let uNet;
      let segmentationImage;

      // load uNet model
      
      function preload() {
        uNet = ml5.uNet('face');
      }

      function setup() {
        createCanvas(320, 240);

        // load up your video
        video = createCapture(VIDEO);
        video.size(width, height);
        video.hide(); // Hide the video element, and just show the canvas

        // Start with a blank image
        segmentationImage = createImage(width, height);

        // initial segmentation
        uNet.segment(video, gotResult);
      }

      function gotResult(error, result) {
        // if there's an error return it
        if (error) {
          console.error(error);
          return;
        }
        // set the result to the global segmentation variable
        segmentationImage = result.image;

        // Continue asking for a segmentation image
        uNet.segment(video, gotResult);
      }

      function draw() {
        image(segmentationImage, 0, 0, width, height);
      }
---

The U-Net is a convolutional neural network that was developed for biomedical image segmentation at the Computer Science Department of the University of Freiburg, Germany.[1] The network is based on the fully convolutional network [2] and its architecture was modified and extended to work with fewer training images and to yield more precise segmentations.

<br/>

UNET allows you to segment an image, removing, for example, the background from video of you while sitting at your desk.

## Example

```javascript
// load your model...
const uNet = ml5.uNet('face');

// assuming you have an HTMLVideo feed...
uNet.segment(video, gotResult);

function gotResult(error, result) {
  // if there's an error return it
  if (error) {
    console.error(error);
    return;
  }
  // log your result
  console.log(result)
}

```


## Syntax


```javascript
ml5.uNet(model)
```

```javascript
ml5.uNet(model, ?callback)
```

### Parameters

- `model` - A string to the path of the JSON model.
- `callback` - Optional. A callback function that is called once the model has loaded. If no callback is provided, it will return a promise that will be resolved once the model has loaded.

## Properties

```javascript
.ready
```

> Boolean value that specifies if the model has loaded.


## Methods

```javascript
.segment(video, ?callback);
```

> Segments the image

- `video` - Optional. A HTML video element or a p5 video element.
- `callback` - Optional. A function to run once the model has been loaded.


## Source

[/src/UNET/](https://github.com/ml5js/ml5-library/tree/development/src/UNET)


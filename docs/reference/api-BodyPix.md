---
templateKey: "model-page"
id: BodyPix
exampleimgsrc: ../assets/ref-bodypix-round.png
title: bodyPix()
description: >- 
  BodyPix is Real-time Person Segmentation in the Browser 
tags:
  - image

examples:
  - title: BodyPix Webcam
    github: https://github.com/ml5js/ml5-examples/tree/release/p5js/BodyPix
    demo: https://ml5js.github.io/ml5-examples/p5js/BodyPix/BodyPix_Webcam/
    code: >-
      let bodypix;
      let video;
      let segmentation;
      let img;

      const options = {
          "outputStride": 8, // 8, 16, or 32, default is 16
          "segmentationThreshold": 0.3 // 0 - 1, defaults to 0.5 
      }

      function setup() {
          createCanvas(320, 240);

          // load up your video
          video = createCapture(VIDEO);
          video.size(width, height);
          // video.hide(); // Hide the video element, and just show the canvas
          bodypix = ml5.bodyPix(video, modelReady)
      }

      function modelReady() {
          console.log('ready!')
          bodypix.segment(gotResults, options)
      }

      function gotResults(err, result) {
          if (err) {
              console.log(err)
              return
          }
          // console.log(result);
          segmentation = result;

          background(0);
          image(video, 0, 0, width, height)
          image(segmentation.maskBackground, 0, 0, width, height)

          bodypix.segment(gotResults, options)

      }
---

As written by the developers of BodyPix:

> "Bodypix is an open-source machine learning model which allows for person and body-part segmentation in the browser with TensorFlow.js. In computer vision, image segmentation refers to the technique of grouping pixels in an image into semantic areas typically to locate objects and boundaries. The BodyPix model is trained to do this for a person and twenty-four body parts (parts such as the left hand, front right lower leg, or back torso). In other words, BodyPix can classify the pixels of an image into two categories: 1) pixels that represent a person and 2) pixels that represent background. It can further classify pixels representing a person into any one of twenty-four body parts."

Read more about BodyPix [on Medium.com](https://medium.com/tensorflow/introducing-bodypix-real-time-person-segmentation-in-the-browser-with-tensorflow-js-f1948126c2a0).

## Example

```javascript
const bodypix = ml5.bodyPix(modelReady)

function modelReady() {
  // segment the image given
  bodypix.segment(img, gotResults)
}

function gotImage(error, result) {
  if (error) {
    console.log(error);
    return;
  }
  // log the result
  console.log(result.maskBackground);
}

```

## Syntax

```javascript
ml5.bodyPix(?video, ?options, ?callback)
```


### Parameters

- `video` - Optional. An HTMLVideoElement
- `callback` - Required. A function to run once the model has been loaded.
- `options` - Optional. An object describing a model accuracy and performance. The available parameters are:

```
{
  "multiplier": 0.75, // 1.0, 0.75, or 0.50, 0.25
  "outputStride": 16, // 8, 16, or 32, default is 16
  "segmentationThreshold": 0.5, // 0 - 1, defaults to 0.5 
  "palette":{
    "leftFace": {
        "id": 0,
        "color": [110, 64, 170]
    },
    "rightFace": {
        "id": 1,
        "color": [106, 72, 183]
    },
    "rightUpperLegFront": {
        "id": 2,
        "color": [100, 81, 196]
    },
    "rightLowerLegBack": {
        "id": 3,
        "color": [92, 91, 206]
    },
    "rightUpperLegBack": {
        "id": 4,
        "color": [84, 101, 214]
    },
    "leftLowerLegFront": {
        "id": 5,
        "color": [75, 113, 221]
    },
    "leftUpperLegFront": {
        "id": 6,
        "color": [66, 125, 224]
    },
    "leftUpperLegBack": {
        "id": 7,
        "color": [56, 138, 226]
    },
    "leftLowerLegBack": {
        "id": 8,
        "color": [48, 150, 224]
    },
    "rightFeet": {
        "id": 9,
        "color": [40, 163, 220]
    },
    "rightLowerLegFront": {
        "id": 10,
        "color": [33, 176, 214]
    },
    "leftFeet": {
        "id": 11,
        "color": [29, 188, 205]
    },
    "torsoFront": {
        "id": 12,
        "color": [26, 199, 194]
    },
    "torsoBack": {
        "id": 13,
        "color": [26, 210, 182]
    },
    "rightUpperArmFront": {
        "id": 14,
        "color": [28, 219, 169]
    },
    "rightUpperArmBack": {
        "id": 15,
        "color": [33, 227, 155]
    },
    "rightLowerArmBack": {
        "id": 16,
        "color": [41, 234, 141]
    },
    "leftLowerArmFront": {
        "id": 17,
        "color": [51, 240, 128]
    },
    "leftUpperArmFront": {
        "id": 18,
        "color": [64, 243, 116]
    },
    "leftUpperArmBack": {
        "id": 19,
        "color": [79, 246, 105]
    },
    "leftLowerArmBack": {
        "id": 20,
        "color": [96, 247, 97]
    },
    "rightHand": {
        "id": 21,
        "color": [115, 246, 91]
    },
    "rightLowerArmFront": {
        "id": 22,
        "color": [134, 245, 88]
    },
    "leftHand": {
        "id": 23,
        "color": [155, 243, 88]
    }
  }
}
```

## Properties

```javascript
.modelReady
```

> Boolean value that specifies if the model has loaded.

```javascript
.model
```

> The model 

## Methods

```javascript
.segment(?input, ?options, callback);
```

> Returns "{raw}", "{maskBackground}", and "{maskPerson}". The returns will either be a UInt8 array corresponding to the image array or a p5Image if p5.js is available.

- `input` - an HTMLImageElement. Videos should be added in the constructor.
- `options` - Object. You can change the `outputStride` and `segmentationThreshold`
- `callback` - A function to handle the results of ".segment()". Likely a function to do something with the segmented image.


```javascript
.segmentWithParts(?input, ?options, callback);
```

> Allows you to get the segmented body parts of the person. Returns "{raw}", "{image}", and "{bodyParts}". The returns will either be a UInt8 array corresponding to the image array or a p5Image if p5.js is available.

- `input` - an HTMLImageElement. Videos should be added in the constructor.
- `options` - Object. You can change the `outputStride`, `segmentationThreshold`, and `palette`. 
- `callback` - A function to handle the results of ".segment()". Likely a function to do something with the segmented image.



## Source

[/src/BodyPix/](https://github.com/ml5js/ml5-library/tree/release/src/BodyPix)
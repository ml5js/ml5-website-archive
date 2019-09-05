---
templateKey: "model-page"
id: PoseNet
exampleimgsrc: ../assets/ref-posenet-round.png
title: poseNet()
description: >-
  PoseNet is a machine learning model that allows for Real-time Human Pose Estimation.
tags:
  - image
  - video
order: 1

examples:
  - title: PoseNet on Image
    github: https://github.com/ml5js/ml5-examples/tree/release/p5js/PoseNet/PoseNet_image_single
    demo: https://ml5js.github.io/ml5-examples/p5js/PoseNet/PoseNet_image_single
    code: >-
      let img;
      let poseNet;
      let poses = [];

      function setup() {
          createCanvas(640, 360);
          img = createImg('data/runner.jpg', imageReady);
          img.size(width, height);

          img.hide(); // hide the image in the browser
          frameRate(1); // set the frameRate to 1 since we don't need it to be running quickly in this case
      }

      // when the image is ready, then load up poseNet

      function imageReady(){
          // set some options
          let options = {
              imageScaleFactor: 1,
              minConfidence: 0.1
          }
          
          // assign poseNet
          poseNet = ml5.poseNet(modelReady, options);

          // This sets up an event that listens to 'pose' events
          poseNet.on('pose', function (results) {
              poses = results;
          });
      }

      // when poseNet is ready, do the detection

      function modelReady() {
          select('#status').html('Model Loaded');
          
          // When the model is ready, run the singlePose() function...
          // If/When a pose is detected, poseNet.on('pose', ...) will be listening for the detection results 
          // in the draw() loop, if there are any poses, then carry out the draw commands
          poseNet.singlePose(img)
      }

      // draw() will not show anything until poses are found

      function draw() {
          if (poses.length > 0) {
              image(img, 0, 0, width, height);
              drawSkeleton(poses);
              drawKeypoints(poses);
              noLoop(); // stop looping when the poses are estimated
          }
      }

      // The following comes from https://ml5js.org/docs/posenet-webcam
      // A function to draw ellipses over the detected keypoints

      function drawKeypoints() {
          // Loop through all the poses detected
          for (let i = 0; i < poses.length; i++) {
              // For each pose detected, loop through all the keypoints
              let pose = poses[i].pose;
              for (let j = 0; j < pose.keypoints.length; j++) {
                  // A keypoint is an object describing a body part (like rightArm or leftShoulder)
                  let keypoint = pose.keypoints[j];
                  // Only draw an ellipse is the pose probability is bigger than 0.2
                  if (keypoint.score > 0.2) {
                      fill(255);
                      stroke(20);
                      strokeWeight(4);
                      ellipse(round(keypoint.position.x), round(keypoint.position.y), 8, 8);
                  }
              }
          }
      }

      // A function to draw the skeletons

      function drawSkeleton() {
          // Loop through all the skeletons detected
          for (let i = 0; i < poses.length; i++) {
              let skeleton = poses[i].skeleton;
              // For every skeleton, loop through all body connections
              for (let j = 0; j < skeleton.length; j++) {
                  let partA = skeleton[j][0];
                  let partB = skeleton[j][1];
                  stroke(255);
                  strokeWeight(1);
                  line(partA.position.x, partA.position.y, partB.position.x, partB.position.y);
              }
          }
      }

  - title: Posenet on Webcam
    github: https://github.com/ml5js/ml5-examples/tree/release/p5js/PoseNet/PoseNet_webcam
    demo: https://ml5js.github.io/ml5-examples/p5js/PoseNet/PoseNet_webcam
    code: >-
     see source code for details

tutorials:
  - tutorial: '<div class="iframe__container iframe__container--video"><iframe src="https://www.youtube.com/embed/EA3-k9mnLHs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>'
---

PoseNet is a machine learning model that allows for [Real-time Human Pose Estimation](https://medium.com/tensorflow/real-time-human-pose-estimation-in-the-browser-with-tensorflow-js-7dd0bc881cd5).

PoseNet can be used to estimate either a single pose or multiple poses, meaning there is a version of the algorithm that can detect only one person in an image/video and one version that can detect multiple persons in an image/video.

The original PoseNet model was ported to TensorFlow.js by Dan Oved. Check out his [blog post](https://medium.com/tensorflow/real-time-human-pose-estimation-in-the-browser-with-tensorflow-js-7dd0bc881cd5).

## Example

```javascript
const video = document.getElementById("video");

// Create a new poseNet method
const poseNet = ml5.poseNet(video, modelLoaded);

// When the model is loaded
function modelLoaded() {
  console.log("Model Loaded!");
}
// Listen to new 'pose' events
poseNet.on("pose", function(results) {
  poses = results;
});
```

[Here](https://github.com/ml5js/ml5-examples/tree/release/p5js/PoseNet/PoseNet_webcam) is a complete example.

## Syntax

```javascript
ml5.poseNet(?video, ?type, ?callback)
```

```javascript
ml5.poseNet(?video, ?options, ?callback)
```

```javascript
ml5.poseNet(?callback, ?options)
```

### Parameters

- `video` - Optional. A HTML video element or a p5 video element.
- `type` - Optional. A String value to run 'single' or 'multiple' estimation.
- `callback` - Optional. A function to run once the model has been loaded. If no callback is provided, it will return a promise that will be resolved once the model has loaded.
- `options` - Optional. An object describing a model accuracy and performance. The available parameters are:

```
{
 imageScaleFactor: 0.3,
 outputStride: 16,
 flipHorizontal: false,
 minConfidence: 0.5,
 maxPoseDetections: 5,
 scoreThreshold: 0.5,
 nmsRadius: 20,
 detectionType: 'single',
 multiplier: 0.75,
}
```

For more information about these options please refer to the [original PoseNet code](https://github.com/tensorflow/tfjs-models/tree/master/posenet). 


## Properties

```javascript
.detectionType
```

> The type of detection. 'single' or 'multiple'

## Methods


```javascript
.singlePose(?input)
```

Returns and array with a single object:

```js
[
  {
    pose: {
      keypoints: [{position:{x,y}, score, part}, ...],
      leftAngle:{x, y, confidence},
      leftEar:{x, y, confidence},
      leftElbow:{x, y, confidence},
      ...
    }
  }
]
```

</br></br>

```javascript
.multiPose(?input)
```

Returns and array with a multiple objects:
```js
[
  {
    pose: {
      keypoints: [{position:{x,y}, score, part}, ...],
      leftAngle:{x, y, confidence},
      leftEar:{x, y, confidence},
      leftElbow:{x, y, confidence},
      ...
    }
  },
  {
    pose: {
      keypoints: [{position:{x,y}, score, part}, ...],
      leftAngle:{x, y, confidence},
      leftEar:{x, y, confidence},
      leftElbow:{x, y, confidence},
      ...
    }
  }
]
```

For more details about the poseNet outputs, read more [here](https://github.com/tensorflow/tfjs-models/blob/master/posenet/README.md#single-person-pose-estimation)

</br></br>

> Given an image or video, returns an array of objects containing pose estimations using single or multi-pose detection

`input` - A HTML video or image element or a p5 image or video element. If no input is provided, the default is to use the video given in the constructor.

## Event Listeners

```javascript
.on('pose', function(results){
  console.log(results);
})
```

> Triggers every time there's a new pose detected. If you create a new poseNet method with a video element, this Event Listener will be called continuously over the video frames. Returns an array of objects containing pose estimations using single detection


## Source

[/src/PoseNet](https://github.com/ml5js/ml5-library/tree/release/src/PoseNet)

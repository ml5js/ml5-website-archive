---
templateKey: "model-page"
id: PitchDetection
exampleimgsrc: ../assets/ref-pitchDetection-round.png
title: pitchDetection()
description: >-
  A pitch detection algorithm is a way of estimating the pitch or fundamental frequency of an audio signal.
tags:
  - sound
order: 1

examples:
  - title: Pitch Detection
    github: https://github.com/ml5js/ml5-examples/tree/release/p5js/PitchDetection/PitchDetection
    demo: https://ml5js.github.io/ml5-examples/p5js/PitchDetection/PitchDetection
    code: >-
      let audioContext;
      let mic;
      let pitch;

      function setup() {
        noCanvas();
        audioContext = getAudioContext();
        mic = new p5.AudioIn();
        mic.start(startPitch);
      }

      function startPitch() {
        pitch = ml5.pitchDetection('./model/', audioContext , mic.stream, modelLoaded);
      }

      function modelLoaded() {
        select('#status').html('Model Loaded');
        getPitch();
      }

      function getPitch() {
        pitch.getPitch(function(err, frequency) {
          if (frequency) {
            select('#result').html(frequency);
          } else {
            select('#result').html('No pitch detected');
          }
          getPitch();
        })
      }

tutorials:
  - tutorial: '<div class="iframe__container iframe__container--video"><iframe src="https://www.youtube.com/embed/F1OkDTUkKFo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>'
---

A pitch detection algorithm is a way of estimating the pitch or fundamental frequency of an audio signal. This method allows to use a pre-trained machine learning pitch detection model to estimate the pitch of sound file.

At present ml5.js only supports the CREPE model. This model is a direct port of [github.com/marl/crepe](https://github.com/marl/crepe) and only works with direct input from the browser microphone.

### Example

```javascript
const audioContext = new AudioContext();
// const MicStream = MicStream
const pitch = ml5.pitchDetection(
  "./model/",
  audioContext,
  MicStream,
  modelLoaded
);

// When the model is loaded
function modelLoaded() {
  console.log("Model Loaded!");
}

pitch.getPitch(function(err, frequency) {
  console.log(frequency);
});
```

[Here](https://github.com/ml5js/ml5-examples/blob/master/p5js/PitchDetection/PitchDetection_Game/sketch.js) is a complete example.

## Constructor

```javascript
ml5.pitchDetection(model, audioContext, stream, callback);
```

### Parameters

- `model` - The path to the trained model. Only [CREPE](https://github.com/marl/crepe) is available for now. Case insensitive.
- `audioContext` - The browser audioContext to use.
- `stream MediaStream` - The media stream to use.
- `callback` - Optional. A callback to be called once the model has loaded. If no callback is provided, it will return a promise that will be resolved once the model has loaded.

## Properties

`.audioContext` - the AudioContext instance. Contains sampleRate, currentTime, state, baseLatency.

`.model` - the pitch detection model.

`.results` - the current pitch prediction results from the classification model.

`.running` - a boolean value stating whether the model instance is running or not.

`.stream` - the MediaStream instance. Contains an id and a boolean `active` value.

## Methods

```
.getPitch(?callback)
```

> Returns the pitch from the model attempting to predict the pitch.

`callback` - Optional. A function to be called when the model has generated content. If no callback is provided, it will return a promise that will be resolved once the model has predicted the pitch.

## Source

[/src/PitchDetection](https://github.com/ml5js/ml5-library/tree/release/src/PitchDetection)

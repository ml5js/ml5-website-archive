---
templateKey: "model-page"
id: test
title: test()
tags:
  - image
  - video
  - text
  - sound

description: >-
  RNN and [LSTMs](https://colah.github.io/posts/2015-08-Understanding-LSTMs/) (Long Short Term Memory networks) are a type of Neural Network architecture useful for working with sequential data (like characters in text or the musical notes of a song) where the order of the that sequence matters. This class allows you run a model pre-trained on a body of text to generate new text.


  You can train your own models [using this tutorial](/docs/training-lstm) or use [this set of pre trained models](https://github.com/ml5js/ml5-data-and-training/tree/master/models/lstm).

examples:
  - demo: >-
      <div class="example">
      <img src="/assets/img/bird.jpg" id="targetImage" width=400/>
      <p id="status">Loading Model...</p>
      <p>The MobileNet model labeled this as <span id="result">...</span>, with a confidence of <span id="probability">...</span>.</p>
      </div>
    code: >-
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
  - demo: >-
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
    code: >-
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
---

### Syntax

> ##### ml5.charRNN(**model**, **?callback**)
>
> Generates content a stateless manner, based on some initial text (known as a "seed"). Returns a string.
>
> - **model** : The pre-trained charRNN model.
> - **callback** — Optional. A callback to be called once the model has loaded. If no callback is provided, it will return a promise that will be resolved once the model has loaded.

### Properties

##### .ready

Boolean value that specifies if the model has loaded.

##### .state

The current state of the model.

##### .model

The pre-trained charRNN model.

##### .vocabSize

The vocabulary size (or total number of possible characters).

### Methods

> ##### .generate(**options**, **?callback**)
>
> Generates content in a stateless manner, based on some initial text (known as a "seed"). Returns a string.
>
> - **options** - An object specifying the input parameters of seed, length and temperature. Default length is 20, temperature is 0.5 and seed is a random character from the model. The object should look like this:
>
> ```javascript
> {
>    seed: 'The meaning of pizza is'
>    length: 20,
>    temperature: 0.5
> }
> ```
>
> - **callback** - Optional. A function to be called when the model has generated content. If no callback is provided, it will return a promise that will be resolved once the model has generated new content.

> ##### .feed(**seed**, **?callback**)
>
> Feed a string of characters to the model state.
>
> - **seed** - A string to feed the charRNN model state.
> - **callback** - Optional. A function to be called when the model finished adding the seed. If no callback is provided, it will return a promise that will be resolved once seed has been fed.

> ##### .predict(**temperature**, **?callback**)
>
> Feed a string of characters to the model state.
>
> - **predict** - Predict the next character based on the model's current state.
> - **callback** - Optional. A function to be called when the model finished adding the seed. If no callback is provided, it will return a promise that will be resolved once the prediction has been generated.

> ##### .reset()
>
> Reset the model state

### Source

[/src/charRNN/](https://github.com/ml5js/ml5-library/tree/master/src/charRNN)

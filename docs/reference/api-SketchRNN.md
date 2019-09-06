---
templateKey: "model-page"
id: SketchRNN
exampleimgsrc: ../assets/ref-sketchrnn-round.png
title: SketchRNN()
description: >-
  The SketchRNN model can create new drawings (from a list of categories) based on an initial path.
tags:
  - image
  - text
order: 8

examples:
  - title: SketchRNN Basic
    github: https://github.com/ml5js/ml5-examples/tree/release/p5js/SketchRNN/SketchRNN_basic
    demo: https://ml5js.github.io/ml5-examples/p5js/SketchRNN/SketchRNN_basic
    code: >-
      // The SketchRNN model

      let model;
      // Start by drawing

      let previous_pen = 'down';
      // Current location of drawing

      let x, y;
      // The current "stroke" of the drawing

      let strokePath;

      // For when SketchRNN is fixed

      function preload() {
        // See a list of all supported models: https://github.com/ml5js/ml5-library/blob/master/src/SketchRNN/models.js
        model = ml5.sketchRNN('cat');
      }

      function setup() {
        createCanvas(640, 480);
        background(220);

        // Button to reset drawing
        let button = createButton('clear');
        button.mousePressed(startDrawing);
        
        // run sketchRNN
        startDrawing();
      }

      function modelReady() {
        console.log('model loaded');
        startDrawing();
      }

      // Reset the drawing

      function startDrawing() {
        background(220);
        // Start in the middle
        x = width / 2;
        y = height / 2;
        model.reset();
        // Generate the first stroke path
        model.generate(gotStroke);
      }

      function draw() {
        // If something new to draw
        if (strokePath) {
          // If the pen is down, draw a line
          if (previous_pen == 'down') {
            stroke(0);
            strokeWeight(3.0);
            line(x, y, x + strokePath.dx, y + strokePath.dy);
          }
          // Move the pen
          x += strokePath.dx;
          y += strokePath.dy;
          // The pen state actually refers to the next stroke
          previous_pen = strokePath.pen;

          // If the drawing is complete
          if (strokePath.pen !== 'end') {
            strokePath = null;
            model.generate(gotStroke);
          }
        }
      }

      // A new stroke path

      function gotStroke(err, s) {
        strokePath = s;
      }

tutorials:
  - tutorial: '<div class="iframe__container iframe__container--video"><iframe src="https://www.youtube.com/embed/pdaNttb7Mr8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>'
  - tutorial: '<div class="iframe__container iframe__container--video"><iframe src="https://www.youtube.com/embed/yLuk0twx8Hc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>'
---

SketchRNN is a recurrent neural network model trained on millions of doodles collected from the [Quick, Draw! game](https://quickdraw.withgoogle.com/). The SketchRNN model can create new drawings (from a list of categories) based on an initial path.

This original paper and implementation of SketchRNN was made in TensorFlow and ported to [Magenta.js](https://magenta.tensorflow.org/get-started/#magenta-js) by [David Ha](https://twitter.com/hardmaru). The ml5.js implementation was ported by [Reiichiro Nakano](https://github.com/reiinakano).

The ml5 library includes [a list of supported SketchRNN models](https://github.com/ml5js/ml5-library/blob/master/src/SketchRNN/models.js).

## Example

```javascript
// Create a new SketchRNN Instance
const model = ml5.SketchRNN("cat", modelReady);

// When the model is loaded
function modelReady() {
  console.log("SketchRNN Model Loaded!");
}
// Reset the model's current stat
model.reset();
// Generate a new stroke
model.generate(gotSketch);

function gotSketch(err, result) {
  // Do something with the result
}
```

Here is [a complete example](https://github.com/ml5js/ml5-examples/tree/release/p5js/SketchRNN/SketchRNN_basic).

## Syntax

```javascript
ml5.SketchRNN(model, ?callback)
```

### Parameters

`model` - The name of the model to use.

`callback` - Optional. A function to be called once the model is loaded. If no callback is provided, it will return a promise that will be resolved once the model has loaded.

## Properties

```javascript
.ready
```

> Boolean value that specifies if the model has loaded.

## Methods

```javascript
.reset()
```

> Reset the model's current state

```javascript
.generate(?seed, ?options, ?callback)
```

> Generates a new sample with the current state.

`seed` - Optional. A seed to be passed to the model before generating a new stroke.

`options` - Optional. An object describing the options of the model.

`callback` - Optional. A function that will return a generated stroke. If no callback is provided, it will return a promise that will be resolved with a generated stroke.

## Source

[/src/SketchRNN/](https://github.com/ml5js/ml5-library/tree/release/src/SketchRNN)

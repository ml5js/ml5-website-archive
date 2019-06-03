---
templateKey: "model-page"
title: pix2pix()
exampleimgsrc: ../assets/ref-pix2pix-round.png
tags:
  - image
description: >-
  pix2pix or image-to-image translation with conditional adversarial nets.

examples:
  - title: Pix2Pix with Callbacks
    github: https://github.com/ml5js/ml5-examples/tree/release/p5js/Pix2Pix/Pix2Pix_callback
    demo: https://ml5js.github.io/ml5-examples/p5js/Pix2Pix/Pix2Pix_callback
    code: >
      // Pix2pix Edges2Pikachu example with p5.js using callback functions
      // This uses a pre-trained model on Pikachu images
      // The pre-trained Edges2Pikachu model is trained on 256x256 images
      // So the input images can only be 256x256 or 512x512, or multiple of 256

      const SIZE = 256;
      let inputImg, inputCanvas, outputContainer, statusMsg, pix2pix, clearBtn, transferBtn, modelReady = false, isTransfering = false;

      function setup() {
        // Create a canvas
        inputCanvas = createCanvas(SIZE, SIZE);
        inputCanvas.class('border-box').parent('canvasContainer');

        // Display initial input image
        inputImg = loadImage('images/input.png', drawImage);

        // Selcect output div container
        outputContainer = select('#output');
        statusMsg = select('#status');

        // Select 'transfer' button html element
        transferBtn = select('#transferBtn');

        // Select 'clear' button html element
        clearBtn = select('#clearBtn');
        // Attach a mousePressed event to the 'clear' button
        clearBtn.mousePressed(function() {
          clearCanvas();
        });

        // Set stroke to black
        stroke(0);
        pixelDensity(1);

        // Create a pix2pix method with a pre-trained model
        pix2pix = ml5.pix2pix('models/edges2pikachu.pict', modelLoaded);
      }

      // Draw on the canvas when mouse is pressed

      function draw() {
        if (mouseIsPressed) {
          line(mouseX, mouseY, pmouseX, pmouseY);
        }
      }

      // Whenever mouse is released, transfer the current image if the model is loaded and it's not in the process of another transformation

      function mouseReleased() {
        if (modelReady && !isTransfering) {
          transfer()
        }
      }

      // A function to be called when the models have loaded

      function modelLoaded() {
        // Show 'Model Loaded!' message
        statusMsg.html('Model Loaded!');

        // Set modelReady to true
        modelReady = true;

        // Call transfer function after the model is loaded
        transfer();

        // Attach a mousePressed event to the transfer button
        transferBtn.mousePressed(function() {
          transfer();
        });
      }

      // Draw the input image to the canvas

      function drawImage() {
        image(inputImg, 0, 0);
      }

      // Clear the canvas
      
      function clearCanvas() {
        background(255);
      }

      function transfer() {
        // Set isTransfering to true
        isTransfering = true;

        // Update status message
        statusMsg.html('Applying Style Transfer...!');

        // Select canvas DOM element
        const canvasElement = select('canvas').elt;

        // Apply pix2pix transformation
        pix2pix.transfer(canvasElement, function(err, result) {
          if (err) {
            console.log(err);
          }
          if (result && result.src) {
            // Set isTransfering back to false
            isTransfering = false;
            // Clear output container
            outputContainer.html('');
            // Create an image based result
            createImg(result.src).class('border-box').parent('output');
            // Show 'Done!' message
            statusMsg.html('Done!');
          }
        });
      }
---

Image-to-image translation with conditional adversarial nets, or pix2pix, is a machine learning technique developed by
[Isola et al](https://github.com/phillipi/pix2pix) that learns how to map input images to output images.

> The pix2pix model works by training on pairs of images such as building facade labels to building facades, and then attempts to generate the corresponding output image from any input image you give it. [Source](https://affinelayer.com/pixsrv/)

The original pix2pix TensorFlow implementation was made by [affinelayer](https://github.com/affinelayer/pix2pix-tensorflow).
This version is heavily based on [Christopher Hesse TensorFlow.js implementation](https://github.com/affinelayer/pix2pix-tensorflow/tree/master/server)

## Example

```javascript
// Create a pix2pix model using a pre trained network
const pix2pix = ml5.pix2pix("models/customModel.pict", modelLoaded);

// When the model is loaded
function modelLoaded() {
  console.log("Model Loaded!");
}

// Transfer using a canvas
pix2pix.transfer(canvas, function(err, result) {
  console.log(result);
});
```

[Here](https://github.com/ml5js/ml5-examples/blob/master/p5js/Pix2Pix/Pix2Pix_callback/sketch.js) is a complete example.

## Syntax

```javascript
ml5.pix2pix(model, ?callback);
```

### Parameters

- `model` - The path for a valid model.
- `callback` - Optional. A function to run once the model has been loaded. If no callback is provided, it will return a promise that will be resolved once the model has loaded.

## Properties

```javascript
.ready
```

> Boolean to check if the model has loaded

## Methods

```javascript
.transfer(canvas, ?callback)
```

> Given an canvas element, applies image-to-image translation using the provided model. Returns an image.

`canvas` - A HTML canvas element.

`?callback` - A function to run once the model has made the transfer. If no callback is provided, it will return a promise that will be resolved once the model has made the transfer.

## Source

[/src/Pix2pix](https://github.com/ml5js/ml5-library/tree/release/src/Pix2pix)

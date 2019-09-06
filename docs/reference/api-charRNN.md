---
templateKey: "model-page"
title: CharRNN()
exampleimgsrc: ../assets/ref-charRnn-round.png
tags:
  - text

order: 0

description: >-
  RNN and [LSTMs](https://colah.github.io/posts/2015-08-Understanding-LSTMs/) (Long Short Term Memory networks) are a type of Neural Network architecture useful for working with sequential data (like characters in text or the musical notes of a song) where the order of the that sequence matters. This class allows you run a model pre-trained on a body of text to generate new text.

  <br />
  <br />

  You can train your own models [using this tutorial](https://github.com/ml5js/training-lstm) or use [this set of pre trained models](https://github.com/ml5js/ml5-data-and-training/tree/master/models/lstm).

examples:
  - title: CharRNN Text Generator Example
    github: https://github.com/ml5js/ml5-examples/tree/release/p5js/CharRNN/CharRNN_Text
    demo: https://ml5js.github.io/ml5-examples/p5js/CharRNN/CharRNN_Text
    code: >-
      // LSTM Generator example with p5.js
      // This uses a pre-trained model on a corpus of Virginia Woolf
      // For more models see: https://github.com/ml5js/ml5-data-and-training/tree/master/models/charRNN
        
      let charRNN;
      let textInput;
      let lengthSlider;
      let tempSlider;
      let button;
      let runningInference = false;

      function setup() {
        noCanvas();

        // Create the LSTM Generator passing it the model directory
        charRNN = ml5.charRNN('./models/woolf/', modelReady);

        // Grab the DOM elements
        textInput = select('#textInput');
        lengthSlider = select('#lenSlider');
        tempSlider = select('#tempSlider');
        button = select('#generate');

        // DOM element events
        button.mousePressed(generate);
        lengthSlider.input(updateSliders);
        tempSlider.input(updateSliders);
      }

      // Update the slider values

      function updateSliders() {
        select('#length').html(lengthSlider.value());
        select('#temperature').html(tempSlider.value());
      }

      function modelReady() {
        select('#status').html('Model Loaded');
      }

      // Generate new text

      function generate() {
        // prevent starting inference if we've already started another instance
        // TODO: is there better JS way of doing this?
        if(!runningInference) {
          runningInference = true;

          // Update the status log
          select('#status').html('Generating...');

          // Grab the original text
          let original = textInput.value();
          // Make it to lower case
          let txt = original.toLowerCase();

          // Check if there's something to send
          if (txt.length > 0) {
            // This is what the LSTM generator needs
            // Seed text, temperature, length to outputs
            // TODO: What are the defaults?
            let data = {
              seed: txt,
              temperature: tempSlider.value(),
              length: lengthSlider.value()
            };

            // Generate text with the charRNN
            charRNN.generate(data, gotData);

            // When it's done
            function gotData(err, result) {
              // Update the status log
              select('#status').html('Ready!');
              select('#result').html(txt + result.sample);
              runningInference = false;
            }
          }
        }
      }

  
---

## Example

```javascript
// Create the character level generator with a pre trained model
const rnn = ml5.charRNN("models/bolaño/", modelLoaded);

// When the model is loaded
function modelLoaded() {
  console.log("Model Loaded!");
}

// Generete content
rnn.generate({ seed: "the meaning of pizza is" }, function(err, results) {
  console.log(results);
});
```

[Here](https://github.com/ml5js/ml5-examples/tree/release/p5js/CharRNN/CharRNN_Text) is a complete example using the [p5.js](https://p5js.org) library.

## Syntax

> ##### ml5.charRNN(**model**, **?callback**)
>
> <br />
>
> - **model** - The path to the trained charRNN model.
> - **callback** - Optional. A callback to be called once the model has loaded. If no callback is provided, it will return a promise that will be resolved once the model has loaded.

## Properties

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
>  seed: 'The meaning of pizza is'
>  length: 20,
>  temperature: 0.5
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

[/src/charRNN/](https://github.com/ml5js/ml5-library/tree/release/src/CharRNN)

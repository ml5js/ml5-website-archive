---
templateKey: "model-page"
id: CVAE
exampleimgsrc: ../assets/ref-cvae-round.png
title: CVAE()
description: >- 
  Conditional Variational Autoencoder (CVAE) is an extension of Variational Autoencoder (VAE), a generative model
tags:
  - image

examples:
  - title: CVAE using Quickdraw dataset
    github: https://github.com/ml5js/ml5-examples/tree/release/p5js/CVAE
    demo: https://ml5js.github.io/ml5-examples/p5js/CVAE/
    code: >-
      let cvae;
      let button;
      let dropdown;

      function setup() {
        createCanvas(200, 200);
        // Create a new instance with pretrained model
        cvae = ml5.CVAE('model/quick_draw/manifest.json', modelReady);

        // Create a generate button
        button = createButton('generate');
        button.mousePressed(generateImage);
        background(0);
      }

      function gotImage(error, result) {
        image(result.image, 0, 0, width, height);
      }

      function modelReady() {
        // Create dropdown with all possible labels
        dropdown = createSelect();
        for (let label of cvae.labels) {
          dropdown.option(label);
        }
      }

      function generateImage() {
        let label = dropdown.value();
        cvae.generate(label, gotImage);
      }
---

An autoencoder is an neural network that learns how to encode data (like the pixels of an image) into a smaller representation. This is akin to image compression (although classic image compression algorithms are better!) A Variational Autoencoder (VAE) takes this idea one step further and is trained generate new images in the style of training data by sprinkling in a little bit of randomness. Conditional Variational Autoencoder (CVAE) is an extension of this idea with the ability to be more specific about what is generated. From [Two Minute Papers](https://www.youtube.com/watch?v=Rdpbnd0pCiI), the author explains that: <br/>

> "Autoencoders are neural networks that are capable of creating sparse representations of the input data and can therefore be used for image compression. There are denoising autoencoders that after learning these sparse representations, can be presented with noisy images. What is even better is a variant that is called the variational autoencoder that not only learns these sparse representations, but can also draw new images as well. We can, for instance, ask it to create new handwritten digits and we can actually expect the results to make sense!"

## Example

```javascript
const cvae = ml5.CVAE('model/quick_draw/manifest.json', modelReady);

function modelReady() {
  // generate an image of an airplane
  cvae.generate('airplane', gotImage);
}

function gotImage(error, result) {
  if (error) {
    console.log(error);
    return;
  }
  // log the result
  console.log(result);
}

```

## Syntax

```javascript
ml5.CVAE(?model, ?callback)
```


### Parameters

- `model` - Required. The url path to your model.
- `callback` - Required. A function to run once the model has been loaded.


## Properties

```javascript
.ready
```

> Boolean value that specifies if the model has loaded.

## Methods

```javascript
.generate(label, callback);
```

> Returns "raw", "blob", and "tensor". If p5.js is available, a "p5Image" will be returned as well. 

- `label` - a label of the feature your want to generate
- `callback` - A function to handle the results of ".generate()". Likely a function to do something with the generated image data.




## Source

[/src/CVAE/](https://github.com/ml5js/ml5-library/tree/release/src/CVAE)
---
templateKey: "model-page"
id: DCGAN
exampleimgsrc: ../assets/ref-dcgan-round.png
title: DCGAN()
description: >- 
  DCGAN - Deep Convolutional Generative Adversarial Networks - allow for the creation of generative images
tags:
  - image
order: 7

examples:
  - title: DCGAN - generated lo-res aerial images
    github: https://github.com/ml5js/ml5-library/tree/main/examples/p5js/DCGAN
    demo: https://examples.ml5js.org/p5js/DCGAN/
    code: >-
      let dcgan;
      let button;

      function preload(){
        dcgan = ml5.DCGAN('model/geo/manifest.json');
      }

      function setup() {
        createCanvas(200, 200);
        // Button to generate an image
        button = createButton('generate');
        button.mousePressed(generate);

        // generate an image on load
        generate()
      }

      function generate() {
        // Generate function receives a callback for when image is ready
        dcgan.generate(displayImage);
      }

      function displayImage(err, result) {
        if (err) {
          console.log(err);
          return;
        }
        image(result.image, 0, 0, 200, 200);
      }

---

You can use neural networks to generate new content. A Generative Adversarial Network (GAN) is a machine learning architecture where two neural networks are adversaries competing. One neural network is a "generator", it makes new images. The other is a "discriminator" and tries to guess if the image is "fake" (made by the generator) or "real" (from the training data). Once the discriminator can no longer guess correctly, the model is trained! A DCGAN is a Deep Convolutional Generative Adversarial Network.

<br/>
ml5.js provides a few default pre-trained models for DCGAN, but you may consider training your own DCGAN to generate images of things you're interested in. 

## Example

```javascript
// Create a new Sentiment method
const dcgan = ml5.DCGAN('model/geo/manifest.json', modelReady);

// When the model is loaded
function modelReady() {
  // Generate a new image
  dcgan.generate(gotImage);
}

function gotImage(err, result) {
  if (err) {
    console.log(err);
    return;
  }
  // The generated image is in the result
  console.log(result);
}
```


## Syntax

```javascript
ml5.DCGAN(?modelPath, ?callback)
```

### Parameters

- `modelPath` - Required. This will be a JSON object called `manifest.json` that contains information about your pre-trained GAN and the url to the `model.json` file that contains your pre-trained model. The `model` property can also point to an absolute URL e.g. `"https://raw.githubusercontent.com/ml5js/ml5-data-and-models/master/models/dcgan/face/model.json"`

```json
{
    "description": "Aerial Images of Santiago, Chile 64x64 (16 MB)",
    "model": "model/geo/model.json",
    "modelSize": 64,
    "modelLatentDim": 128
}
```

- `callback` - Required. A function to run once the model has been loaded.


## Properties

```javascript
.readyReady
```

> Boolean value that specifies if the model has loaded.

```javascript
.model
```

> An object that specifies the model properties

```javascript
.modelPath
```

> The name of the model being used to generate images


## Methods

```javascript
.generate(callback);
```

> Returns "raw", "blob", and "tensor". If p5.js is available, a "p5Image" will be returned as well. 

- `callback` - A function to handle the results of ".generate()". Likely a function to do something with the generated image data.


## Source

[/src/DCGAN/](https://github.com/ml5js/ml5-library/tree/main/src/DCGAN)
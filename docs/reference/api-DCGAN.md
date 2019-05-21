---
templateKey: "model-page"
id: DCGAN
exampleimgsrc: null
title: DCGAN()
description: >- 
  DCGAN - Deep Convolutional Generative Adversarial Networks - allow for the creation of generative images
tags:
  - coming soon

examples:
  - title: DCGAN - faces
    github: https://github.com/ml5js/ml5-examples/tree/development/p5js/DCGAN
    demo: 
    code: >-
      let dcgan;
      let outputCanvas; 
      let button; 
      let statusMsg;

      function setup() {
          createCanvas(400, 400)
          //load the model
          //we can have multiple pre-trained models (e.g. cats, flowers, etc.), just like SketchRNN
          dcgan = ml5.DCGAN('face', modelReady);

          // //button to generate an image
          button = createButton('generate');
          button.mousePressed(generate);

      }

      function generate() {
          //the generate function takes an output canvas to draw on
          // and a callback with possible info like time elapsed to generate the image
          dcgan.generate(displayImage);
      }

      function displayImage(err, result){
          //some callback
          if(err){
              console.log(err);
              return
          }
          image(result.image, 0, 0, 400, 400)
      }

      function modelReady() {
          generate();
      }

---

You can use neural networks to generate new content. Using Deep Convolutional Generative Adversarial Networks, you can use models that have been pre-trained on images to generate new images "inspired by" the training data.  
<br/>
ml5.js provides a few default pre-trained models for DCGAN, but you may consider to train your own DCGAN to generate images of things you're interested in. 

## Example

```javascript
// Create a new Sentiment method
const dcgan = ml5.DCGAN('face', modelReady);
      
// When the model is loaded
function modelReady() {
  // model is ready
  dcgan.generate(displayImage);
}

function displayImage(err, result){
    //some callback
    if(err){
        console.log(err);
        return
    }
    // logs your results
    console.log(result)
}
```


## Syntax

```javascript
ml5.DCGAN(?modelName, ?callback)
```

### Parameters

- `modelName` - Required. The name of your pre-trained model. In the example below, the modelName is "face" which is an object that contains the properties that allow DCGAN to run.

```
{
  face: {
          description: 'DCGAN, human faces, 64x64',
          modelUrl: "https://raw.githubusercontent.com/viztopia/ml5dcgan/master/model/model.json",
          modelSize: 64,
          modelLatentDim: 128
      }
}
```

- `callback` - Required. A function to run once the model has been loaded.


## Properties

```javascript
.ready
```

> Boolean value that specifies if the model has loaded.

```javascript
.model
```

> An object that specifies the model properties

```javascript
.modelName
```

> The name of the model being used to generate images


## Methods

```javascript
.generate(callback);
```

> Returns "raw", "blob", and "tensor". If p5.js is available, a "p5Image" will be returned as well. 

- `callback` - A function to handle the results of ".generate()". Likely a function to do something with the generated image data.


## Source

[/src/DCGAN/](https://github.com/ml5js/ml5-library/tree/development/src/DCGAN)
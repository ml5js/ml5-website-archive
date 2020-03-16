---
templateKey: 'model-page'
title: imageClassifier()
date: 2017-01-04T15:04:10.000Z
featuredpost: true
exampleimgsrc: ../assets/ref-imageClassification-round.png
description: >-
  You can use neural networks to recognize the content of images.
tags:
  - image
  - video
id: imageClassifier
order: 0

examples:
  - title: Image classifier on image
    github: https://github.com/ml5js/ml5-examples/tree/release/p5js/ImageClassification/ImageClassification
    demo: https://ml5js.github.io/ml5-examples/p5js/ImageClassification/ImageClassification
    code: >-
      // Initialize the Image Classifier method with MobileNet. A callback needs to be passed.
      
      let classifier;

      // A variable to hold the image we want to classify
      
      let img;

      function preload() {
        classifier = ml5.imageClassifier('MobileNet');
        img = loadImage('images/bird.jpg');
      }

      function setup() {
        createCanvas(400, 400);
        classifier.classify(img, gotResult);
        image(img, 0, 0);
      }

      // A function to run when we get any errors and the results
      
      function gotResult(error, results) {
        // Display error in the console
        if (error) {
          console.error(error);
        }
        // The results are in an array ordered by confidence.
        console.log(results);
        createDiv("Label:" + results[0].label);
        createDiv("Confidence: " + nf(results[0].confidence, 0, 2));
      }

  - title: Image classifier on video
    github: https://github.com/ml5js/ml5-examples/tree/release/p5js/ImageClassification/ImageClassification_Video
    demo: https://ml5js.github.io/ml5-examples/p5js/ImageClassification/ImageClassification_Video
    code: >-
      let classifier;
      let video;
      let resultsP;

      function setup() {
        noCanvas();
        // Create a camera input
        video = createCapture(VIDEO);
        // Initialize the Image Classifier method with MobileNet and the video as the second argument
        classifier = ml5.imageClassifier('MobileNet', video, modelReady);
        resultsP = createP('Loading model and video...');
      }

      function modelReady() {
        console.log('Model Ready');
        classifyVideo();
      }

      // Get a prediction for the current video frame

      function classifyVideo() {
        classifier.classify(gotResult);
      }

      // When we get a result

      function gotResult(err, results) {
        // The results are in an array ordered by confidence.
        resultsP.html(results[0].label + ' ' + nf(results[0].confidence, 0, 2));
        classifyVideo();
      }

tutorials:
  - tutorial: '<div class="iframe__container iframe__container--video"><iframe src="https://www.youtube.com/embed/yNkAuWz5lnY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>'
  - tutorial: '<div class="iframe__container iframe__container--video"><iframe src="https://www.youtube.com/embed/D9BoBSkLvFo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>'
---

You can use neural networks to recognize the content of images. `ml5.imageClassifier()` is a method to create an object that classifies an image using a pre-trained model.

It should be noted that the pre-trained model provided by the example below was trained on a database of approximately 15 million images ([ImageNet](http://www.image-net.org/)). The ml5 library accesses
this model from the cloud. What the algorithm labels an image is entirely dependent on that training data -- what is included, excluded, and how those images are labeled (or mislabeled).

## Example

```javascript
// Initialize the Image Classifier method with MobileNet
const classifier = ml5.imageClassifier('MobileNet', modelLoaded);

// When the model is loaded
function modelLoaded() {
  console.log('Model Loaded!');
}

// Make a prediction with a selected image
classifier.predict(document.getElementById('image'), function(err, results) {
  console.log(results);
});
```

[Here](https://github.com/ml5js/ml5-examples/blob/master/p5js/ImageClassification/ImageClassification/sketch.js) is a complete example using the [p5.js](https://p5js.org/) library for loading and displaying the image.

## Syntax
  ```javascript
  ml5.imageClassifier(model)
  ```

  ```javascript
  ml5.imageClassifier(model, ?callback)
  ```

  ```javascript
  ml5.imageClassifier(model, ?options, ?callback)
  ```

  ```javascript
  ml5.imageClassifier(model, ?video, ?options, ?callback)
  ```

### Parameters

  - `model` - A String value of a valid model OR a url to a `model.json` that contains a pre-trained model. Case insensitive. Models available are: ['MobileNet'](https://arxiv.org/abs/1704.04861), ['Darknet'](https://pjreddie.com/darknet/imagenet/) and ['Darknet-tiny'](https://pjreddie.com/darknet/tiny-darknet/), or any image classification model trained in [Teachable Machine](https://teachablemachine.withgoogle.com/io19)
  - `callback` - Optional. A function to run once the model has been loaded. If no callback is provided, it will return a promise that will be resolved once the model has loaded.
  - `options` - Optional. An object describing a model accuracy and performance. For MobileNet the defaults are: `{ version: 1,
    alpha: 1.0, topk: 3, }`
  - `video` - Optional. A HTML video element or a p5 video element.

## Properties

  ```javascript
  .modelName
  ```
  > The name of the model used.

  ```javascript
  .modelLoaded
  ```
  > Boolean to check if the model has loaded

  ```javascript
  .model
  ```
  > The model architecture

## Methods

  ```javascript
  .classify(input, ?callback)
  ```

  ```javascript
  .classify(input, ?numberOfClasses ,?callback)
  ```

  ```javascript
  .classify(?callback)
  ```

  ```javascript
  .classify(?numberOfClasses ,?callback)
  ```

  > Given an image or video, returns an array of objects containing class names and probabilities.

  `input` -  A HTML video or image element or a p5 image or video element. If no input is provided, the default is to use the video given in the constructor.

  `numberOfClasses` -  The number of results to return.

  `callback` - Optional. A function to run once the model has made the prediction. If no callback is provided, it will return a promise that will be resolved once the model has made a prediction.

## Source

[/src/ImageClassifier](https://github.com/ml5js/ml5-library/tree/release/src/ImageClassifier)

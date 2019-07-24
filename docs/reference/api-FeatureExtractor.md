---
templateKey: "model-page"
title: featureExtractor()
exampleimgsrc: ../assets/ref-featureExtractor-round.png
tags:
  - helpers
order: 0

description: >-
  You can use neural networks to recognize the content of images. Most of the time you will be using a "pre-trained" model trained on a large dataset to classify an image into a fixed set of categories. However you can also use a part of the pre-trained model: the [features](https://en.wikipedia.org/wiki/Feature_extraction). Those features allow you to 'retrain' or 'reuse' the model for a new custom task. This is known as [Transfer Learning](https://en.wikipedia.org/wiki/Transfer_learning).

  <br/>
  <br/>

  This class allows you to extract features of an image via a pre-trained model and re-train that model with new data.

examples:
  - title: Feature Extractor for Image Classification
    github: https://github.com/ml5js/ml5-examples/tree/release/p5js/FeatureExtractor/FeatureExtractor_Image_Classification
    demo: https://ml5js.github.io/ml5-examples/p5js/FeatureExtractor/FeatureExtractor_Image_Classification
    code: >-  
      let featureExtractor;
      let classifier;
      let video;
      let loss;
      let dogImages = 0;
      let catImages = 0;

      function setup() {
        noCanvas();
        // Create a video element
        video = createCapture(VIDEO);
        // Append it to the videoContainer DOM element
        video.parent('videoContainer');
        // Extract the already learned features from MobileNet
        featureExtractor = ml5.featureExtractor('MobileNet', modelReady);
        // Create a new classifier using those features and give the video we want to use
        classifier = featureExtractor.classification(video, videoReady);
        // Set up the UI buttons
        setupButtons();
      }

      // A function to be called when the model has been loaded
      
      function modelReady() {
        select('#modelStatus').html('Base Model (MobileNet) Loaded!');
        classifier.load('./model/model.json', function() {
          select('#modelStatus').html('Custom Model Loaded!');
        });
      }

      // A function to be called when the video has loaded
      
      function videoReady () {
        select('#videoStatus').html('Video ready!');
      }

      // Classify the current frame.
      
      function classify() {
        classifier.classify(gotResults);
      }

      // A util function to create UI buttons
      
      function setupButtons() {
        // When the Cat button is pressed, add the current frame
        // from the video with a label of "cat" to the classifier
        buttonA = select('#catButton');
        buttonA.mousePressed(function() {
          classifier.addImage('cat');
          select('#amountOfCatImages').html(catImages++);
        });

        // When the Dog button is pressed, add the current frame
        // from the video with a label of "dog" to the classifier
        buttonB = select('#dogButton');
        buttonB.mousePressed(function() {
          classifier.addImage('dog');
          select('#amountOfDogImages').html(dogImages++);
        });

        // Train Button
        train = select('#train');
        train.mousePressed(function() {
          classifier.train(function(lossValue) {
            if (lossValue) {
              loss = lossValue;
              select('#loss').html('Loss: ' + loss);
            } else {
              select('#loss').html('Done Training! Final Loss: ' + loss);
            }
          });
        });

        // Predict Button
        buttonPredict = select('#buttonPredict');
        buttonPredict.mousePressed(classify);

        // Save model
        saveBtn = select('#save');
        saveBtn.mousePressed(function() {
          classifier.save();
        });

        // Load model
        loadBtn = select('#load');
        loadBtn.changed(function() {
          classifier.load(loadBtn.elt.files, function(){
            select('#modelStatus').html('Custom Model Loaded!');
          });
        });
      }

      // Show the results
      
      function gotResults(err, results) {
        // Display any error
        if (err) {
          console.error(err);
        }
        if (results && results[0]) {
          select('#result').html(results[0].label);
          select('#confidence').html(results[0].confidence);
          classify();
        }
      }

tutorials:
  - tutorial: '<div class="iframe__container iframe__container--video"><iframe src="https://www.youtube.com/embed/eeO-rWYFuG0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>'
  - tutorial: '<div class="iframe__container iframe__container--video"><iframe src="https://www.youtube.com/embed/kRpZ5OqUY6Y" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>'
  - tutorial: '<div class="iframe__container iframe__container--video"><iframe src="https://www.youtube.com/embed/aKgq0m1YjvQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>'
---

### Example

```javascript
// Extract the already learned features from MobileNet
const featureExtractor = ml5.featureExtractor("MobileNet", modelLoaded);

// When the model is loaded
function modelLoaded() {
  console.log("Model Loaded!");
}

// Create a new classifier using those features and with a video element
const classifier = featureExtractor.classification(video, videoReady);

// Triggers when the video is ready
function videoReady() {
  console.log("The video is ready!");
}

// Add a new image with a label
classifier.addImage(document.getElementById("dogA"), "dog");

// Retrain the network
classifier.train(function(lossValue) {
  console.log("Loss is", lossValue);
});

// Get a prediction for that image
classifier.classify(document.getElementById("dogB"), function(err, result) {
  console.log(result); // Should output 'dog'
});
```

[Here](https://github.com/ml5js/ml5-examples/blob/master/p5js/FeatureExtractor/FeatureExtractor_Image_Regression/sketch.js) is a complete example to create a custom regression.

[Here](https://github.com/ml5js/ml5-examples/blob/master/p5js/FeatureExtractor/FeatureExtractor_Image_Classification/sketch.js) is a complete example to create a custom classifier.

### Syntax

> ##### ml5.featureExtractor(**model**, **?callback**)
>
> ##### ml5.featureExtractor(**model**, **?options**, **?callback**)
>
> <br/>
>
> - **model** - The model from which extract the learned features. Case-insensitive
> - **callback** - Optional. A function to be executed once the model has been loaded. If no callback is provided, it will return a promise that will be resolved once the model has loaded.
> - **options** - Optional. An object containing custom options. For the MobileNet model these are the custom options you can reset:
>
> ```javascript
> {
>   version: 1,
>   alpha: 1.0,
>   topk: 3,
>   learningRate: 0.0001,
>   hiddenUnits: 100,
>   epochs: 20,
>   numLabels: 2,
>   batchSize: 0.4,
> }
> ```

### MobileNet Features

The following are the Properties and Methods when MobileNet is selected as the model from which to extract the Features:

<br />

> ##### ml5.featureExtractor("MobileNet");

### Properties

##### .modelLoaded

Boolean value that specifies if the model has loaded.

##### .hasAnyTrainedClass

Boolean value that specifies if new data has been added to the model

##### .usageType

String that specifies how is the Extractor being used. Possible values are 'regressor' and 'classifier'

##### .isPredicting

Boolean value to check if the model is predicting.

### Methods

> ##### .classification(**?video**, **?callback**)
>
> Use the features of MobileNet as a classifier
>
> - **video** - Optional. An HTML video element or a p5.js video element.
>
> - **callback** - Optional. A function to be called once the video is ready. If no callback is provided, it will return a promise that will be resolved once the video element has loaded.

```javascript
.regression(?video, ?callback)
```

> Use the features of MobileNet as a regressor

`video` - Optional. An HTML video element or a p5.js video element.

`callback` - Optional. A function to be called once the video is ready. If no callback is provided, it will return a promise that will be resolved once the video element has loaded.

```javascript
.addImage(label, ?callback)
```

```javascript
.addImage(input, label, ?callback)
```

> Adds a new image element to

`input` - Optional. An HTML image or video element or a p5 image or video element. If not input is provided, the video element provided in the method-type will be used.

`label` - The label to associate the new image with. When using the classifier this can be strings or numbers. For a regressor, this needs to be a number.

`callback` - Optional. A function to be called once the new image has been added to the model. If no callback is provided, it will return a promise that will be resolved once the image has been added.

```javascript
.train(callback)
```

> Retrain the model with the provided images and labels using the models original features as starting point.

`callback` - A function to be called to follow the progress of the training.

```javascript
.classify(?callback)
```

```javascript
.classify(input, ?callback)
```

> Classifies an an image based on a new retrained model. `.classification()` needs to be used with this.

`input` - Optional. An HTML image or video element or a p5 image or video element. If not input is provided, the video element provided in the method-type will be used.

`callback` - Optional. A function to be called once the input has been classified. If no callback is provided, it will return a promise that will be resolved once the model has classified the image.

```javascript
.predict(?callback)
```

```javascript
.predict(input, ?callback)
```

> Predicts a continues values based on a new retrained model. `.regression()` needs to be used with this.

`input` - Optional. An HTML image or video element or a p5 image or video element. If not input is provided, the video element provided when creating the regression will be used.

`callback` - Optional. A function to be called once the input has been predicted. If no callback is provided, it will return a promise that will be resolved once the model has predicted the image.

### Source

[src/FeatureExtractor](https://github.com/ml5js/ml5-library/tree/release/src/FeatureExtractor)

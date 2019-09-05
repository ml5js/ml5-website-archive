---
templateKey: "model-page"
id: KNNClassifier
exampleimgsrc: ../assets/ref-knnClassifier-round.png
title: KNNClassifier()
description: >-
  This class allows you to create a classifier using the K-Nearest Neighbors.
tags:
  - helpers
order: 1

examples:
  - title: KNN Classfication on video
    github: https://github.com/ml5js/ml5-examples/tree/release/p5js/KNNClassification/KNNClassification_Video
    demo: https://ml5js.github.io/ml5-examples/p5js/KNNClassification/KNNClassification_Video
    code: >-
      let video;
      // Create a KNN classifier
      
      const knnClassifier = ml5.KNNClassifier();
      let featureExtractor;

      function setup() {
        // Create a featureExtractor that can extract the already learned features from MobileNet
        featureExtractor = ml5.featureExtractor('MobileNet', modelReady);
        noCanvas();
        // Create a video element
        video = createCapture(VIDEO);
        // Append it to the videoContainer DOM element
        video.parent('videoContainer');
        // Create the UI buttons
        createButtons();
      }

      function modelReady(){
        select('#status').html('FeatureExtractor(mobileNet model) Loaded')
      }

      // Add the current frame from the video to the classifier
      
      function addExample(label) {
        // Get the features of the input video
        const features = featureExtractor.infer(video);
        // You can also pass in an optional endpoint, defaut to 'conv_preds'
        // const features = featureExtractor.infer(video, 'conv_preds');
        // You can list all the endpoints by calling the following function
        // console.log('All endpoints: ', featureExtractor.mobilenet.endpoints)

        // Add an example with a label to the classifier
        knnClassifier.addExample(features, label);
        updateCounts();
      }

      // Predict the current frame.
      
      function classify() {
        // Get the total number of labels from knnClassifier
        const numLabels = knnClassifier.getNumLabels();
        if (numLabels <= 0) {
          console.error('There is no examples in any label');
          return;
        }
        // Get the features of the input video
        const features = featureExtractor.infer(video);

        // Use knnClassifier to classify which label do these features belong to
        // You can pass in a callback function `gotResults` to knnClassifier.classify function
        knnClassifier.classify(features, gotResults);
        // You can also pass in an optional K value, K default to 3
        // knnClassifier.classify(features, 3, gotResults);

        // You can also use the following async/await function to call knnClassifier.classify
        // Remember to add `async` before `function predictClass()`
        // const res = await knnClassifier.classify(features);
        // gotResults(null, res);
      }

      // A util function to create UI buttons
      
      function createButtons() {
        // When the A button is pressed, add the current frame
        // from the video with a label of "rock" to the classifier
        buttonA = select('#addClassRock');
        buttonA.mousePressed(function() {
          addExample('Rock');
        });

        // When the B button is pressed, add the current frame
        // from the video with a label of "paper" to the classifier
        buttonB = select('#addClassPaper');
        buttonB.mousePressed(function() {
          addExample('Paper');
        });

        // When the C button is pressed, add the current frame
        // from the video with a label of "scissor" to the classifier
        buttonC = select('#addClassScissor');
        buttonC.mousePressed(function() {
          addExample('Scissor');
        });

        // Reset buttons
        resetBtnA = select('#resetRock');
        resetBtnA.mousePressed(function() {
          clearLabel('Rock');
        });
        
        resetBtnB = select('#resetPaper');
        resetBtnB.mousePressed(function() {
          clearLabel('Paper');
        });
        
        resetBtnC = select('#resetScissor');
        resetBtnC.mousePressed(function() {
          clearLabel('Scissor');
        });

        // Predict button
        buttonPredict = select('#buttonPredict');
        buttonPredict.mousePressed(classify);

        // Clear all classes button
        buttonClearAll = select('#clearAll');
        buttonClearAll.mousePressed(clearAllLabels);

        // Load saved classifier dataset
        buttonSetData = select('#load');
        buttonSetData.mousePressed(loadMyKNN);

        // Get classifier dataset
        buttonGetData = select('#save');
        buttonGetData.mousePressed(saveMyKNN);
      }

      // Show the results
      
      function gotResults(err, result) {
        // Display any error
        if (err) {
          console.error(err);
        }

        if (result.confidencesByLabel) {
          const confidences = result.confidencesByLabel;
          // result.label is the label that has the highest confidence
          if (result.label) {
            select('#result').html(result.label);
            select('#confidence').html(`${confidences[result.label] * 100} %`);
          }

          select('#confidenceRock').html(`${confidences['Rock'] ? confidences['Rock'] * 100 : 0} %`);
          select('#confidencePaper').html(`${confidences['Paper'] ? confidences['Paper'] * 100 : 0} %`);
          select('#confidenceScissor').html(`${confidences['Scissor'] ? confidences['Scissor'] * 100 : 0} %`);
        }

        classify();
      }

      // Update the example count for each label	
      
      function updateCounts() {
        const counts = knnClassifier.getCountByLabel();

        select('#exampleRock').html(counts['Rock'] || 0);
        select('#examplePaper').html(counts['Paper'] || 0);
        select('#exampleScissor').html(counts['Scissor'] || 0);
      }

      // Clear the examples in one label
      
      function clearLabel(label) {
        knnClassifier.clearLabel(label);
        updateCounts();
      }

      // Clear all the examples in all labels
      
      function clearAllLabels() {
        knnClassifier.clearAllLabels();
        updateCounts();
      }

      // Save dataset as myKNNDataset.json
      
      function saveMyKNN() {
        knnClassifier.save('myKNNDataset');
      }

      // Load dataset to the classifier
      
      function loadMyKNN() {
        knnClassifier.load('./myKNNDataset.json', updateCounts);
      }

tutorials:
  - tutorial: '<div class="iframe__container iframe__container--video"><iframe src="https://www.youtube.com/embed/KTNqXwkLuM4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>'
  - tutorial: '<div class="iframe__container iframe__container--video"><iframe src="https://www.youtube.com/embed/Mwo5_bUVhlA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>'
  - tutorial: '<div class="iframe__container iframe__container--video"><iframe src="https://www.youtube.com/embed/JWsKay58Z2g" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>'
---

This class allows you to create a classifier using the [K-Nearest Neighbors](https://en.wikipedia.org/wiki/K-nearest_neighbors_algorithm) algorithm. It's a little different from other classes in this library, because it doesn't provide a model with weights, but rather a utility for constructing a KNN model using outputs from another model or any other data that could be classified.

For example, you could get features of an image by calling `FeatureExtractor.infer()`, and feed the features to KNNClassifier to classify an image.

You can also collect any kind of data, construct them into an array of numbers and feed them to KNNClassifier. Check out this [example](https://github.com/ml5js/ml5-examples/tree/release/p5js/KNNClassification/KNNClassification_PoseNet

) that uses KNNClassifier to classify data from [PoseNet](https://ml5js.org/reference/api-PoseNet/) model.

## Example

Here is an example of using KNNClassifier for image classification.

```javascript
// Create a KNN classifier
const knnClassifier = ml5.KNNClassifier();

// Create a featureExtractor that can extract features of an image
const featureExtractor = ml5.featureExtractor("MobileNet", modelReady);

// Get the features of an image
const features = featureExtractor.infer(myImg);

// Add an example with a label to the KNN Classifier
knnClassifier.addExample(features, label);

// Use KNN Classifier to classify these features
knnClassifier.classify(features, function(err, result) {
  console.log(result); // result.label is the predicted label
});
```

[Here](https://github.com/ml5js/ml5-examples/tree/master/p5js/KNNClassification/KNNClassification_Video) is a complete example to create a customizable classifier on live webcam images.

## Syntax

```javascript
ml5.KNNClassifier();
```

## Methods

```javascript
.addExample(example, indexOrLabel)
```

> Adding an example to a class.

`example` - An example to add to the dataset, usually an activation from another model.
`indexOrLabel` - The class index(number) or label(string) of the example.

```javascript
.classify(input, callback?)
```

```javascript
.classify(input, k?, callback?)
```

> Classify an new input. It returns an object with a top classIndex and label, confidences mapping all class indices to their confidence, and confidencesByLabel mapping all classes' confidence by label.

`input` - An example to make a prediction on, could be an activation from another model or an array of numbers.

`k` - Optional. The K value to use in K-nearest neighbors. The algorithm will first find the K nearest examples from those it was previously shown, and then choose the class that appears the most as the final prediction for the input example. Defaults to 3. If examples < k, k = examples.

`callback` - Optional. A function to be called once the input has been classified. If no callback is provided, it will return a promise that will be resolved once the model has classified the new input.

```javascript
.clearLabel(indexOrLabel)
```

> Clear all examples in a label.

`indexOrLabel` - The class index or label, a number or a string.

```javascript
.clearAllLabels()
```

> Clear all examples in all labels

```javascript
.getCountByLabel()
```

> Get the example count for each label. It returns an object that maps class label to example count for each class.

```javascript
.getCount()
```

> Get the example count for each class. It returns an object that maps class index to example count for each class.

```javascript
.save(fileName?)
```

> Download the whole dataset as a JSON file. It's useful for saving state.

`fileName` - Optional. The name of the JSON file that will be downloaded. e.g. "myKNN" or "myKNN.json". If no fileName is provided, the default file name is "myKNN.json".

```javascript
.load(path, callback?)
```

> Load a dataset from a JSON file. It's useful for restoring state.

`path` - The path for a valid JSON file.

`callback` - Optional. A function to run once the dataset has been loaded. If no callback is provided, it will return a promise that will be resolved once the dataset has loaded.

```javascript
.getNumLabels()
```

> It returns the total number of labels.

## Source

[/src/KNNClassifier/](https://github.com/ml5js/ml5-library/tree/release/src/KNNClassifier)

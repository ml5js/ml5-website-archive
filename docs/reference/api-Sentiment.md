---
templateKey: "model-page"
id: Sentiment
exampleimgsrc: ../assets/ref-sentiment-round.png
title: Sentiment()
description: >-
  Sentiment is a model trained to predict the sentiment of any given text. The default model, currently 'moviereviews', is trained using IMDB reviews that have been truncated to a maximum of 200 words, only the 20000 most used words in the reviews are used.
tags:
  - text
order: 1

examples:
  - title: Sentiment Analysis trained on movie reviews
    github: https://github.com/ml5js/ml5-examples/tree/release/p5js/Sentiment
    demo: https://ml5js.github.io/ml5-examples/p5js/Sentiment
    code: >-
      let sentiment;
      let statusEl;
      let submitBtn;
      let inputBox;
      let sentimentResult;

      function setup() {
        noCanvas();
        // initialize sentiment
        sentiment = ml5.sentiment('movieReviews', modelReady);

        // setup the html environment
        statusEl = createP('Loading Model...');
        inputBox = createInput('Today is the happiest day and is full of rainbows!');
        inputBox.attribute('size', '75');
        submitBtn = createButton('submit');
        sentimentResult = createP('sentiment score:');

        // predicting the sentiment on mousePressed()
        submitBtn.mousePressed(getSentiment);
      }

      function getSentiment() {
        // get the values from the input
        const text = inputBox.value();

        // make the prediction
        const prediction = sentiment.predict(text);

        // display sentiment result on html page
        sentimentResult.html('Sentiment score: ' + prediction.score);
      }

      function modelReady() {
        // model is ready
        statusEl.html('model loaded');
      }
---

This model, ported from [tensorflowJS](https://github.com/tensorflow/tfjs-examples/tree/master/sentiment), scores the sentiment of text with a value between 0 ("negative") and 1 ("positive").

### Example

```javascript
// Create a new Sentiment method
const sentiment = ml5.sentiment('movieReviews', modelReady);
      
// When the model is loaded
function modelReady() {
  // model is ready
  console.log("Model Loaded!");
}

// make the prediction
const prediction = sentiment.predict(text);

```

<!-- update example when deployed -->
[Here](example) is a complete example.

## Constructor

```javascript
Sentiment( 'moviereviews', callback )
```
currently the supported model name is 'moviereviews'. ml5 may support different models in the future.

### Parameters

- `model` - A string to the path of the JSON model.
- `callback` - Optional. A callback function that is called once the model has loaded. If no callback is provided, it will return a promise that will be resolved once the model has loaded.

## Properties

```javascript
.ready
```

> Boolean value that specifies if the model has loaded.

```javascript
.model
```

> The model being used.

## Methods

```javascript
.predict(text);
```


> Scores the sentiment of given text with a value between 0 ("negative") and 1 ("positive").

`text` - string of text to predict 



## Source

[/src/Sentiment/](https://github.com/ml5js/ml5-library/tree/release/src/Sentiment)

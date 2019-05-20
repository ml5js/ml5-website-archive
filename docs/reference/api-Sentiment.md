---
templateKey: "model-page"
id: Sentiment
exampleimgsrc: ../assets/ref-Sentiment.png
title: Sentiment()
description: >-
  Sentiment is a model trained to predict the sentiment of any given text. The default model, currently 'moviereviews', is trained using IMDB reviews that have been truncated to a maximum of 200 words, only the 20000 most used words in the reviews are used.
tags:
  - text
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

```javascript


## Source

[/src/Sentiment/](https://github.com/ml5js/ml5-library/tree/release/src/Sentiment)

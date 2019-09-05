---
templateKey: "model-page"
id: Word2vec
exampleimgsrc: ../assets/ref-word2vec-round.png
title: word2vec()
description: >-
  Word2vec is a group of related models that are used to produce word embeddings. This method allows you to perform vector operations on a given set of input vectors.
tags:
  - text
order: 2

examples:
  - title: Word2Vec Demo
    github: https://github.com/ml5js/ml5-examples/tree/release/p5js/Word2Vec
    demo: https://ml5js.github.io/ml5-examples/p5js/Word2Vec
    code: >-
      let word2Vec;

      function modelLoaded() {
        select('#status').html('Model Loaded');
      }

      function setup() {
        noLoop();
        noCanvas();

        // Create the Word2Vec model with pre-trained file of 10,000 words
        word2Vec = ml5.word2vec('data/wordvecs10000.json', modelLoaded);

        // Select all the DOM elements
        let nearWordInput = select('#nearword');
        let nearButton = select('#submit');
        let nearResults = select('#results');

        let betweenWordInput1 = select("#between1");
        let betweenWordInput2 = select("#between2");
        let betweenButton = select("#submit2");
        let betweenResults = select("#results2");

        let addInput1 = select("#isto1");
        let addInput2 = select("#isto2");
        let addInput3 = select("#isto3");
        let addButton = select("#submit3");
        let addResults = select("#results3");

        // Finding the nearest words
        nearButton.mousePressed(() => {
          let word = nearWordInput.value();
          word2Vec.nearest(word, (err, result) => {
            let output = '';
            if (result) {
              for (let i = 0; i < result.length; i++) {
                output += result[i].word + '<br/>';
              }
            } else {
              output = 'No word vector found';
            }
            nearResults.html(output);
          });
        });

        // Finding the average of two words
        betweenButton.mousePressed(() => {
          let word1 = betweenWordInput1.value();
          let word2 = betweenWordInput2.value();
          word2Vec.average([word1, word2], 4, (err, average) => {
            betweenResults.html(average[0].word);
          })
        });

        // Adding two words together to "solve" an analogy
        addButton.mousePressed(() => {
          let is1 = addInput1.value();
          let to1 = addInput2.value();
          let is2 = addInput3.value();
          word2Vec.subtract([to1, is1])
            .then(difference => word2Vec.add([is2, difference[0].word]))
            .then(result => addResults.html(result[0].word))
        });
      }
---

Word2vec is a group of related models that are used to produce [word embeddings](https://en.wikipedia.org/wiki/Word2vec)</sup>. This method allows you to perform vector operations on a given set of input vectors.

You can use the word models [we provide](https://github.com/ml5js/ml5-examples/tree/master/p5js/Word2Vec/data), trained on a corpus of english words (watch out for bias data!), or you can train your own vector models following [this tutorial](https://github.com/ml5js/training-word2vec). More of this soon!

### Example

```javascript
// Create a new word2vec method
const wordVectors = ml5.word2vec("data/wordvecs.json", modelLoaded);

// When the model is loaded
function modelLoaded() {
  console.log("Model Loaded!");
}

// Find the closest word to 'rainbow'
wordVectors.nearest("rainbow", function(err, results) {
  console.log(results);
});
```

[Here](https://github.com/ml5js/ml5-examples/blob/master/p5js/Word2Vec/sketch.js) is a complete example.

## Constructor

```javascript
Word2Vec(model, ?callback)
```

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
.add(inputs, ?max, ?callback)
```

> Add a series of word vectors. Returns the closest vector of that sum.

`inputs` - An array of strings containing the inputs to be added

`max` - Optional. The maximum results to return. Defaults to 1.

`callback` - Optional. A callback function that is called once the model has made the operation. If no callback is provided, it will return a promise that will be resolved once operation is completed.

```javascript
.subtract(inputs, ?max, ?callback)
```

> Subtract a series of vectors. Returns the closest vector of that sum.

`inputs` - An array of strings containing the inputs to be subtracted.

`max` - Optional. The maximum results to return. Defaults to 1.

`callback` - Optional. A callback function that is called once the model has made the operation. If no callback is provided, it will return a promise that will be resolved once operation is completed.

```javascript
.average(inputs, ?max, ?callback)
```

> Average a series of vectors. Returns the closest vector of that average.

`inputs` - An array of strings containing the inputs to be averaged.

`max` - Optional. The maximum results to return. Defaults to 1.

`callback` - Optional. A callback function that is called once the model has made the operation. If no callback is provided, it will return a promise that will be resolved once operation is completed.

```javascript
.nearest(input, ?max, ?callback)
```

> Find the nearest vector. Returns `max` array of values.

`input` - The input vector string.

`max` - Optional. The maximum results to return. Defaults to 10.

`callback` - Optional. A callback function that is called once the model has made the operation. If no callback is provided, it will return a promise that will be resolved once operation is completed.

```javascript
.getRandomWord(?callback)
```

> Find a random vector in the loaded model. Returns a string.

`callback` - Optional. A callback function that is called once the model has made the operation. If no callback is provided, it will return a promise that will be resolved once operation is completed.

## Source

[/src/Word2vec/](https://github.com/ml5js/ml5-library/tree/release/src/Word2vec)

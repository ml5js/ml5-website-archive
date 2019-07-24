---
templateKey: "model-page"
id: SoundClassifier
exampleimgsrc: ../assets/ref-soundClassifier-round.png
title: soundClassifier()
description: >- 
  ml5.soundClassifier() enables you to detect pre-trained voice and speech commands 
tags:
  - sound
order: 0

examples:
  - title: SoundClassifier "SpeechCommands18w"
    github: https://github.com/ml5js/ml5-examples/tree/release/p5js/SoundClassification/SoundClassification_speechcommand
    demo: https://ml5js.github.io/ml5-examples/p5js/SoundClassification/SoundClassification_speechcommand/
    code: >-
      // Initialize a sound classifier method with SpeechCommands18w model. A callback needs to be passed.


      let classifier;


      // Options for the SpeechCommands18w model, the default probabilityThreshold is 0


      const options = { probabilityThreshold: 0.7 };
      
      // Two variable to hold the label and confidence of the result


      let label;
      let confidence;

      function preload() {
        // Load SpeechCommands18w sound classifier model
        classifier = ml5.soundClassifier('SpeechCommands18w', options);
      }

      function setup() {
        noCanvas();
        // Create 'label' and 'confidence' div to hold results
        label = createDiv('Label: ...');
        confidence = createDiv('Confidence: ...');
        // Classify the sound from microphone in real time
        classifier.classify(gotResult);
      }

      // A function to run when we get any errors and the results

      
      function gotResult(error, results) {
        // Display error in the console
        if (error) {
            console.error(error);
        }
        // The results are in an array ordered by confidence.
        console.log(results);
        // Show the first label and confidence
        label.html('Label:' + results[0].label);
        confidence.html('Confidence:' + nf(results[0].confidence, 0, 2)); // Round the confidence to 0.01
      }
      
tutorials:
  - tutorial: '<div class="iframe__container iframe__container--video"><iframe src="https://www.youtube.com/embed/cO4UP2dX944" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>'

---

The ml5.soundClassifier() allows you to classify audio. With the right pre-trained models, you can detect whether a certain noise was made (e.g. a clapping sound or a whistle) or a certain word was said (e.g. Up, Down, Yes, No). At this moment, with the ml5.soundClassifier(), you can use your own custom pre-trained speech commands or use the the "SpeechCommands18w" which can recognize "the ten digits from "zero" to "nine", "up", "down", "left", "right", "go", "stop", "yes", "no", as well as the additional categories of "unknown word" and "background noise"."


For more information [read here](https://github.com/tensorflow/tfjs-models/tree/master/speech-commands)

## Example

```javascript
// Options for the SpeechCommands18w model, the default probabilityThreshold is 0
const options = { probabilityThreshold: 0.7 };
const classifier = ml5.soundClassifier('SpeechCommands18w', options, modelReady);

function modelReady() {
  // classify sound
  classifier.classify(gotResult);
}

function gotResult(error, result) {
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
ml5.soundClassifier(?model, ?options, ?callback)
```

By default the soundClassifier will start the default microphone.

### Parameters

- `model` - Optional. Model name or URL path to a `model.json`
- `callback` - Optional. A function to run once the model has been loaded.
- `options` - Optional. An object describing a model accuracy and performance. The available parameters are:

```
{
 probabilityThreshold: 0.7 // probabilityThreshold is 0
}
```

## Properties

```javascript
.model
```

> The model 

## Methods

```javascript
.classify(callback);
```

> Returns an array with "label" and "confidence"

- `input` - an HTMLImageElement. Videos should be added in the constructor.
- `options` - Object. You can change the `outputStride` and `segmentationThreshold`
- `callback` - A function to handle the results of ".segment()". Likely a function to do something with the segmented image.


## Source

[/src/SoundClassifier/](https://github.com/ml5js/ml5-library/tree/release/src/SoundClassifier)

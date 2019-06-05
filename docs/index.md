---
templateKey: home-page
title: Friendly Machine Learning for the Web.
description: >-
  The library is supported by code examples, tutorials, and sample datasets with an emphasis on ethical computing.
  Bias in data, stereotypical harms, and responsible crowdsourcing are part of the documentation around data collection
  and usage.

image: ./assets/itay-banner.jpg
heading: Friendly Machine Learning for the Web
subheading: A neighborly approach to creating and exploring artificial intelligence in the browser.
featureheading: >- 
  Let’s read a story! Discover how Itay Niv created a story-telling app for children!

mainpitch:
  title: Why ml5.js?
  description: >
    ml5.js aims to make machine learning approachable for a broad audience of artists,
    creative coders, and students. The library provides access to machine learning algorithms
    and models in the browser, building on top of TensorFlow.js with no other external dependencies.

intro:
  blurbs:
    - image: ./assets/2000px-TensorFlowLogo-branded.png
      text: >
        ml5.js is an open source, friendly high level interface to TensorFlow.js, a library for handling GPU-accelerated mathematical operations and memory management for machine learning algorithms.
    - image: ./assets/imageclassification-demo-bg.png
      text: >
        ml5.js provides immediate access in the browser to pre-trained models for detecting human poses, generating text, styling an image with another, composing music, pitch detection, and common English language word relationships, and much more.
    - image: ./assets/everyday-ai-mimi.png
      text: >
        ml5.js aims to support broader public understanding of machine learning and foster deeper engagement with ethical computing, responsible data collection, and accessiblity and diversity of people and perspectives in technology and the arts.
  heading: What we offer
  description: >
    Kaldi is the ultimate spot for coffee lovers who want to learn about their
    java’s origin and support the farmers that grew it. We take coffee
    production, roasting and brewing seriously and we’re glad to pass that
    knowledge to anyone. This is an edit via identity...

version:
  heading: Build tools using easy classification systems with tons of **pre trained models**!
  recent: "Current version: 0.71   Last update: 24 April, 2019"
  snippet: >
    const pix2pix = ml5.pix2pix('models/customModel.pict', modelLoaded);

    function modelLoaded() {
      console.log('Model Loaded!');
    }

    // Transfer using a canvas
    pix2pix.transfer(canvas, function(err, result) {
      console.log(result);
    });

model:
  blurbs:
    - image: ./assets/ref-posenet.png
      text: >
        PoseNet is a machine learning model that allows for Real-time Human Pose Estimation.
    - image: ./assets/ref-yolo.png
      text: >
        YOLO (You only look once) is a state-of-the-art, real-time object detection and classification system.
    - image: ./assets/ref-styletransfer.png
      text: >
        pix2pix is image-to-image translation with conditional adversarial networks. 
    - image: ./assets/ref-classification.png
      text: >
        Classify the content of images with pre-trained models. 
    - image: ./assets/ref-sketchrnn.png
      text: >
        Generate new doodles with a neural network based on Google's Quick Draw. 
  heading: Discover the creative possiblities of machine learning!
  description: >
    Kaldi is the ultimate spot for coffee lovers who want to learn about their
    java’s origin and support the farmers that grew it. We take coffee
    production, roasting and brewing seriously and we’re glad to pass that
    knowledge to anyone. This is an edit via identity...

team:
  heading: Meet our team!
  image: ./assets/logo-purple-circle.png
  profile: ml5.js is an open source project developed and maintained by NYU's Interactive Telecommunications/Interactive Media Arts program and by artists, designers, students, technologists, and developers from all over the world.
---

## ml5.js provides an approachable API and examples to help you get started

Current version: 0.3.1
Last update: 3, June 2019

```javascript
// Step 1: Create an image classifier with MobileNet
const classifier = ml5.imageClassifier('MobileNet', onModelReady);

// Step 2: select an image
const img = document.querySelector("#myImage")

// Step 3: Make a prediction
let prediction = classifier.predict(img, gotResults);

// Step 4: Do something with the results!
function gotResults(err, results) {
  console.log(results);
  // all the amazing things you'll add

}
```

---
templateKey: home-page
title: Friendly Machine Learning for the Web.
description: >-
  The library is supported by code examples, tutorials, and sample datasets with an emphasis on ethical computing.
  Bias in data, stereotypical harms, and responsible crowdsourcing are part of the documentation around data collection
  and usage.

image: /img/itay-banner.jpg
heading: Let’s read a story!Discover how Itay Niv created a story-telling app for children!

mainpitch:
  title: Why ml5.js?
  description: >
    ml5.js aims to make machine learning approachable for a broad audience of artists,
    creative coders, and students. The library provides access to machine learning algorithms
    and models in the browser, building on top of TensorFlow.js with no other external dependencies.

intro:
  blurbs:
    - image: /img/tenser_flow_figure.png
      text: >
        ml5.js is a friendly high level interface to TensorFlow.js, a library for handling GPU-accelerated mathematical operations and memory management for machine learning algorithms.
    - image: /img/tenser_flow_figure.png
      text: >
        ml5.js provides immediate access in the browser to pre-trained models for detecting human poses, generating text, styling an image with another, composing music, pitch detection, and common English language word relationships.
    - image: /img/tenser_flow_figure.png
      text: >
        ml5.js is a friendly high level interface to TensorFlow.js, a library for handling GPU-accelerated
        mathematical operations and memory management for machine learning algorithms.
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
    - image: /img/modelplaceholder.png
      text: >
        PoseNet is a machine learning model that allows for Real-time Human Pose Estimation.
    - image: /img/modelplaceholder.png
      text: >
        PoseNet is a machine learning model that allows for Real-time Human Pose Estimation.
    - image: /img/modelplaceholder.png
      text: >
        PoseNet is a machine learning model that allows for Real-time Human Pose Estimation.
    - image: /img/modelplaceholder.png
      text: >
        PoseNet is a machine learning model that allows for Real-time Human Pose Estimation.
  heading: Discover these awesome learning models!
  description: >
    Kaldi is the ultimate spot for coffee lovers who want to learn about their
    java’s origin and support the farmers that grew it. We take coffee
    production, roasting and brewing seriously and we’re glad to pass that
    knowledge to anyone. This is an edit via identity...

team:
  heading: Meet our team!
  image: /img/joey.png
  profile: Joey Lee is a New York based designer, creative technologist, and geographer who leads the development of ml5.js by creating new examples, maintaining the library, doing code reviews, addressing issues, and merging/communicating with contributors.
---

## Build tools using easy classification systems with tons of **pre trained models**!

Current version: 0.71
Last update: 24 April, 2019

```javascript
const pix2pix = ml5.pix2pix("models/customModel.pict", modelLoaded);

function modelLoaded() {
  console.log("Model Loaded!");
}

// Transfer using a canvas
pix2pix.transfer(canvas, function(err, result) {
  console.log(result);
});
```

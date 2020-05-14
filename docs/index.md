---
templateKey: home-page

heading: Friendly Machine Learning for the Web
subheading: A neighborly approach to creating and exploring artificial intelligence in the browser.

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
        ml5.js aims to support broader public understanding of machine learning and foster deeper engagement with ethical computing, responsible data collection, and accessibility and diversity of people and perspectives in technology and the arts.

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
  heading: Discover the creative possibilities of machine learning!
acknowledgements:
  blurbs:
    - image: ./assets/acknowledgements__google-research.png
      text: >
        Google Faculty Research Grant
    - image: ./assets/acknowledgements__itp-logo.png
      text: >
        NYU ITP
    - image: ./assets/acknowledgements__processing.png
      text: >
        Processing Foundation
    - image: ./assets/acknowledgements__engelberg-center.jpg
      text: >
        NYU Engelberg Center
    - image: ./assets/acknowledgements__STUDIO.jpg
      text: >
        Frank-Ratchye STUDIO
    - image: ./assets/acknowledgements__cosaSticker.jpg
      text: >
        COSA
    - image: ./assets/acknowledgements__netlify.png
      text: >
        Netlify
    - image: ./assets/acknowledgements__browserstack.png
      text: >
        Browserstack
  heading: ml5.js has received support and funding from these generous folks
team:
  heading: Meet our team!
  image: ./assets/logo-purple-circle.png
  profile: ml5.js is an open source project developed and maintained by NYU's Interactive Telecommunications/Interactive Media Arts program and by artists, designers, students, technologists, and developers from all over the world.
---

## ml5.js provides an approachable API and examples to help you get started

![npm](https://img.shields.io/npm/v/ml5?color=%230ace81&label=Latest%20Version)

```javascript
// Step 1: Create an image classifier with MobileNet
const classifier = ml5.imageClassifier("MobileNet", onModelReady);

// Step 2: select an image
const img = document.querySelector("#myImage");

// Step 3: Make a prediction
let prediction = classifier.predict(img, gotResults);

// Step 4: Do something with the results!
function gotResults(err, results) {
  console.log(results);
  // all the amazing things you'll add
}
```

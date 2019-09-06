---
templateKey: "model-page"
id: StyleTransfer
exampleimgsrc: ../assets/ref-styletransfer-round.png
title: styleTransfer()
description: >-
  Style Transfer is a machine learning technique that allows to transfer the style of one image into another one. This is a two step process, first you need to train a model on one particular style and then you can apply this style to another image.
tags:
  - image
  - video
order: 4

examples:
  - title: Style Transfer on Image
    github: https://github.com/ml5js/ml5-examples/tree/release/p5js/StyleTransfer/StyleTransfer_Image
    demo: https://ml5js.github.io/ml5-examples/p5js/StyleTransfer/StyleTransfer_Image
    code: >-
      // This uses a pre-trained model of The Great Wave off Kanagawa and Udnie (Young American Girl, The Dance)

      let inputImg;
      let statusMsg;
      let transferBtn;
      let style1;
      let style2;

      function setup() {
        noCanvas();
        // Status Msg
        statusMsg = select('#statusMsg');

        // Get the input image
        inputImg = select('#inputImg');

        // Transfer Button
        transferBtn = select('#transferBtn')
        transferBtn.mousePressed(transferImages);

        // Create two Style methods with different pre-trained models
        style1 = ml5.styleTransfer('models/wave', modelLoaded);
        style2 = ml5.styleTransfer('models/udnie', modelLoaded);
      }

      // A function to be called when the models have loaded
      
      function modelLoaded() {
        // Check if both models are loaded
        if(style1.ready && style2.ready){
          statusMsg.html('Ready!')
        }
      }

      // Apply the transfer to both images!
      
      function transferImages() {
        statusMsg.html('Applying Style Transfer...!');
        
        style1.transfer(inputImg, function(err, result) {
          createImg(result.src).parent('styleA');
        });

        style2.transfer(inputImg, function(err, result) {
          createImg(result.src).parent('styleB');
        });

        statusMsg.html('Done!');
      }

tutorials:
  - tutorial: '<div class="iframe__container iframe__container--video"><iframe src="https://www.youtube.com/embed/STHRNIJc-vI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>'
  - tutorial: '<div class="iframe__container iframe__container--video"><iframe src="https://www.youtube.com/embed/S_I0SGAO73A" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>'
---

Style Transfer is a machine learning technique that allows to transfer the style of one image into another one. This is a two step process, first you need to train a model on one particular style and then you can apply this style to another image.

You can train your own images following [this tutorial](https://github.com/ml5js/training-styletransfer).

This implementation is heavily based on [fast-style-transfer-deeplearnjs](https://github.com/reiinakano/fast-style-transfer-deeplearnjs) by [Reiichiro Nakano](https://github.com/reiinakano).
The [original TensorFlow implementation](https://github.com/lengstrom/fast-style-transfer) was developed by [Logan Engstrom](https://github.com/lengstrom)

## Example

```javascript
// Create a new Style Transfer Instance
const style = ml5.styleTransfer("data/myModel/", modelLoaded);

// When the model is loaded
function modelLoaded() {
  console.log("Model Loaded!");
}
// Grab a img element and generate a new image.
style.transfer(document.getElementById("img"), function(err, resultImg) {
  img.src = resultImg.src;
});
```

[Here](https://github.com/ml5js/ml5-examples/blob/master/p5js/StyleTransfer/StyleTransfer_Image/sketch.js) is a complete example.

## Syntax

```javascript
ml5.styleTransfer(model, ?callback)
```

```javascript
ml5.styleTransfer(model, ?video, ?callback)
```

### Parameters

`model` - The path to Style Transfer model.

`video` - Optional. A HTML video element or a p5 video element.

`callback` - Optional. A function to be called once the model is loaded. If no callback is provided, it will return a promise that will be resolved once the model has loaded.

## Properties

```javascript
.ready
```

> Boolean value that specifies if the model has loaded.

## Methods

```javascript
.transfer(?callback)
```

```javascript
.transfer(input, ?callback)
```

> Apply style transfer to an input. Returns an HTML img element.

`input` - A HTML video or image element or a p5 image or video element. If no input is provided, the default is to use the video element given in the constructor.

`callback` - Optional. A function to run once the model has made the transfer. If no callback is provided, it will return a promise that will be resolved once the model has made the transfer.

## Source

[/src/StyleTransfer/](https://github.com/ml5js/ml5-library/tree/release/src/StyleTransfer)

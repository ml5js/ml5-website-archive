---
templateKey: "start-page"
title: Getting Started
sidebar_label: "Quickstart"
order: 1
id: getting-started
---


Take a ride on the Coding Train to watch Dan Shiffman's ["A Beginner's Guide to Machine Learning with ml5.js"](https://www.youtube.com/watch?v=jmznx0Q1fP0). Here Dan explains what ml5.js is and where it all comes from.

<br/>

ml5.js is maching learning _for the web_ in your web browser. Through some clever and exciting advancements, the folks building [tensorflow.js](https://www.tensorflow.org/js) figured out that it is possible to use the web browser's built in graphics processing unit (GPU) to do calculations that would otherwise run very slowly using central processing unit (CPU) based calculations. A really nice explantion of what is happening with GPUs can be found [here - Why are shaders fast?](https://thebookofshaders.com/01/). ml5 helps to make all these new and exciting developments in machine learning on the web more accessible for everyone.


<br/><br/>

# Quickstart

The fastest way to get started exploring the creative possibilities of ml5.js are to either:

1. Download a ml5.js project boilerplate. You can download a zip file here: [ml5 project boilerplate](https://github.com/ml5js/ml5-boilerplate/releases). <br/> Or...
2. Use the [p5 web editor](https://editor.p5js.org/joeyklee/sketches/5VbXAWaV6) with ml5.js added.


## Quickstart Option 1 - without p5

Reference the [latest version](https://unpkg.com/ml5@0.3.0/dist/ml5.min.js) of ml5.js using a script tag in an HTML file as below: 

<br/>

In an **index.html** file, copy and paste the following and open up that file in your web browser. 

```HTML
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Getting Started with ml5.js and p5.js</title>
    <script src="https://unpkg.com/ml5@0.3.0/dist/ml5.min.js"></script>
  </head>

  <body>
    <script>
      // Your code will go here
      // open up your console - if everything loaded properly you should see 0.3.0
      console.log('ml5 version:', ml5.version);

    </script>
  </body>
</html>
```

That's all! 💥

<br/>

## Quickstart Option 2 - with p5.js

If you're familiar with [p5.js](https://p5js.org/), ml5.js has been designed to play very nicely with p5. You can use the following boilerplate code to get started:

<br/>

In an **index.html** file, copy and paste the following and open up that file in your web browser. 

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Getting Started with ml5.js</title>
    <!-- p5 -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.8.0/p5.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.8.0/addons/p5.dom.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.8.0/addons/p5.sound.min.js"></script>
    <!-- ml5 -->
    <script src="https://unpkg.com/ml5@0.3.0/dist/ml5.min.js"></script>
  </head>

  <body>
    <script>
      // Your code will go here
      // open up your console - if everything loaded properly you should see 0.3.0
      console.log('ml5 version:', ml5.version);


      function setup(){
        createCanvas(400, 400);

      }

      function draw(){
        background(200);

      }
    </script>
  </body>
</html>
```

That's all! 💥

<br/>


<center> <h2>Now that you've got a ml5.js project setup, move on to the next section to see ml5.js in action. </h2></center>
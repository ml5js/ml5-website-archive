---
templateKey: "start-page"
id: faq
title: FAQ
order: 10
---

## Frequently Asked Questions

### Can I use ml5.js in the [p5 web editor](editor.p5js.org)?

> Sort of.

> A number of the ml5 sketches don't currently work in the p5 web editor due to some of the ways that the editor handles data files and some of the network communication regarding making requests to external data (e.g. the big model files that allow ml5.js to run things like image detection, etc). Some of those issues have popped up here (ml5js/ml5-examples#6)


> There are lots of developments in the p5 web editor as well as in ml5 to make sure these environments all play nicely together, but the best thing to do is to try and run things locally if possible. Thanks!

### Can I use ml5.js with node.js?

> No. Not at the moment.


> ml5.js uses tensorflow.js which uses the browser's GPU to run all the fancy calculations. As a result, all of the functionality that ml5.js is built on is based around using the browser GPU. We hope to have ml5.js run in node-js sometime in the near future (especially now that node support for tensorflow is a thing: https://www.tensorflow.org/js/guide/nodejs) but the current ml5 setup does not support node.js. Thanks + happy coding!


> See discussions [here](https://github.com/ml5js/ml5-library/issues/377)


### Can I contribute?

> Yes! Absolutely. We welcome all forms of socially and technically driven contributions. No contribution is too small. 

### How can I contribute?

> Please refer to the contributor documentation here: TBD
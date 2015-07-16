# aurelia-material
Aurelia wrapper for [Material Design Lite](http://www.getmdl.io).


### Install


1. In your project install the plugin via `jspm` with following command

```
  $ jspm install github:redpelicans/aurelia-material
```

2. Make sure you use [manual bootstrapping](http://aurelia.io/docs#startup-and-configuration). In order to do so open your `index.html` and locate the element with the attribute aurelia-app. Change it to look like this:

  ```html
  <body aurelia-app="main">
  ...
```
  
3. Update  `main.js` in your `src` folder with following content:

  ```javascript
  export function configure(aurelia) {
    aurelia.use
      .standardConfiguration()
      .developmentLogging()
      // Install the plugin
      .plugin('redpelicans/aurelia-material');

    aurelia.start().then(a => a.setRoot());
  }
  
  4. include material design css in your `index.html`
  
  
  ```html
      <link rel="stylesheet" href="https://storage.googleapis.com/code.getmdl.io/1.0.0/material.indigo-pink.min.css">
```
  

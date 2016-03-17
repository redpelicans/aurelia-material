# aurelia-material

Aurelia wrapper for [Material Design Lite](http://www.getmdl.io).


[Material Design Lite](http://www.getmdl.io) has been designed for static html sites. To use it on dynamic ones, we have to register explictly new DOM elements (see [MDL](http://www.getmdl.io/started/index.html#dynamic))

`Aurelia Material` will do that for you transparently while keeping MDL flexibility.

See online [Demo](http://redpelicans.github.io/aurelia-material-sample/)

### Principles

We created the `CustomAttribute` `mdl` in charge of the registration of dynamic elements (all elements after index.html will be associated dynamically to the DOM with Aurelia)

So instead of writing:

```
<button class="mdl-button mdl-js-button mdl-button--fab mdl-button--colored">
  <i class="material-icons">add</i>
</button>
```

You will write in your views:

```
<button mdl="button" class="mdl-button--fab mdl-button--colored">
  <i class="material-icons">add</i>
</button>
```

And that's all...

`mdl` values are : 

```
[ 'button',
  'textfield',
  'layout',
  'menu',
  'data-table',
  'tabs',
  'slider',
  'tooltip',
  'progress',
  'spinner',
  'badge',
  'switch',
  'radio',
  'icon-toggle',
  'checkbox',
  'snackbar' ]
```
Some MDL elements are not in the list because we don't have to register them, so we can use them as it.


### Install

1. In your project install the plugin via `jspm` with following command

```
  $ jspm install github:redpelicans/aurelia-material
```

2. Make sure you use [manual bootstrapping](http://aurelia.io/docs#startup-and-configuration). In order to do so open your `index.html` and locate the element with the attribute aurelia-app:

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
   ```
  
4. Include material design css in your `index.html`
  
  
  ```html
      <link rel="stylesheet" href="https://storage.googleapis.com/code.getmdl.io/1.0.0/material.indigo-pink.min.css">
```
5. Use wrapped MDL components in your hml views as explained below.


See online [Demo](http://redpelicans.github.io/aurelia-material-sample/)
  

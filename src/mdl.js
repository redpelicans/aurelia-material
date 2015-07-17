import {inject, customAttribute} from 'aurelia-framework';
import {componentHandler} from 'google/material-design-lite';
import $ from 'jquery';

let mdlTypes = {
    button: {
        html: ["mdl-button", "mdl-js-button"]
      , js: ['MaterialButton']
      , fct: manageRipple

    }
  , textfield: {
       js: ['MaterialTextfield']
     , html: ["mdl-textfield", "mdl-js-textfield"]
  }
  , layout: {
       js: ['MaterialLayout']
     , html: ["mdl-layout", "mdl-js-layout"]
  }
  , menu: {
       js: ['MaterialMenu']
     , html: ["mdl-menu", "mdl-js-menu"]
     , fct: function(element){
        manageRipple(element);
        let elts = $(element).find("li.mdl-js-ripple-effect").get();
        for(let elt of elts) componentHandler.upgradeElement(elt, "MaterialRipple");
     }

  }
  , checkbox: {
       js: ['MaterialCheckbox']
     , html: ["mdl-checkbox", "mdl-js-checkbox"]
     , fct: function(element){
        manageRipple(element);
        let elt = $(element).find("span.mdl-js-ripple-effect").get()[0];
        if(elt) componentHandler.upgradeElement(elt, "MaterialRipple");
     }
  }
}

function manageRipple(element){
  let classes = $(element).attr('class');
  if(classes.split(' ').indexOf('mdl-js-ripple-effect') != -1){
    componentHandler.upgradeElement(element, "MaterialRipple");
  }
}

function upgradeElement(element, type){
  let {fct, html, js=[]} = mdlTypes[type];

  for(let type of js){
    componentHandler.upgradeElement(element, type);
  }

  if(html) $(element).addClass(html.join(' '));

  if(fct) fct(element); 
}

@inject(Element)
@customAttribute('mdl')
export class MDLCustomAttribut {

    constructor(element) {
        this.element = element;
     }

    attached() {
      //console.log("mdl attached: " + this.value);
      upgradeElement(this.element, this.value);
    }
}

import {inject, customElement} from 'aurelia-framework';
import 'google/material-design-lite';

@inject(Element)
@customElement('mdl-button')
export class MDL {

    constructor(element) {
        this.element = element;
     }

    attached() {
      this.button = $(this.element).find('.my-button');
      console.log("mdl button  attached");
      console.log(this.button);
      let button = document.createElement('button');
      let textNode = document.createTextNode('Click Me!');
      button.appendChild(textNode);
      button.className = 'mdl-button mdl-js-button mdl-button--raised mdl-button--accent mdl-js-ripple-effect';
      window.componentHandler.upgradeElement(button, 'MaterialButton');
      window.componentHandler.upgradeElement(button, 'MaterialRipple');
      //this.button.appendChild(button);
      document.getElementById('testbutton').appendChild(button);
    }
}

'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _aureliaFramework = require('aurelia-framework');

require('google/material-design-lite');

var MDL = (function () {
    function MDL(element) {
        _classCallCheck(this, _MDL);

        this.element = element;
    }

    _createClass(MDL, [{
        key: 'attached',
        value: function attached() {
            this.button = $(this.element).find('.my-button');
            console.log('mdl button  attached');
            console.log(this.button);
            var button = document.createElement('button');
            var textNode = document.createTextNode('Click Me!');
            button.appendChild(textNode);
            button.className = 'mdl-button mdl-js-button mdl-button--raised mdl-button--accent mdl-js-ripple-effect';
            window.componentHandler.upgradeElement(button, 'MaterialButton');
            window.componentHandler.upgradeElement(button, 'MaterialRipple');
            //this.button.appendChild(button);
            document.getElementById('testbutton').appendChild(button);
        }
    }]);

    var _MDL = MDL;
    MDL = (0, _aureliaFramework.customElement)('mdl-button')(MDL) || MDL;
    MDL = (0, _aureliaFramework.inject)(Element)(MDL) || MDL;
    return MDL;
})();

exports.MDL = MDL;
//# sourceMappingURL=button.js.map
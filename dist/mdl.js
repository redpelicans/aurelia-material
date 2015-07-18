'use strict';

Object.defineProperty(exports, '__esModule', {
     value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _aureliaFramework = require('aurelia-framework');

var _googleMaterialDesignLite = require('google/material-design-lite');

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var mdlTypes = {
     button: {
          html: ['mdl-button', 'mdl-js-button'],
          js: ['MaterialButton'],
          fct: [manageRipple]

     },
     textfield: {
          js: ['MaterialTextfield'],
          html: ['mdl-textfield', 'mdl-js-textfield']
     },
     layout: {
          js: ['MaterialLayout'],
          html: ['mdl-layout', 'mdl-js-layout']
     },
     menu: {
          js: ['MaterialMenu'],
          html: ['mdl-menu', 'mdl-js-menu'],
          fct: [manageRipple]

     },
     slider: {
          js: ['MaterialSlider'],
          html: ['mdl-slider', 'mdl-js-slider']
     },
     'switch': {
          js: ['MaterialSwitch'],
          html: ['mdl-switch', 'mdl-js-switch'],
          fct: [manageRipple]
     },
     'radio': {
          js: ['MaterialRadio'],
          html: ['mdl-radio', 'mdl-js-radio'],
          fct: [manageRipple]
     },
     'icon-toggle': {
          js: ['MaterialIconToggle'],
          html: ['mdl-icon-toggle', 'mdl-js-icon-toggle'],
          fct: [manageRipple]
     },
     'checkbox': {
          js: ['MaterialCheckbox'],
          html: ['mdl-checkbox', 'mdl-js-checkbox'],
          fct: [manageRipple]
     }

};

function manageRipple(element) {
     var classes = (0, _jquery2['default'])(element).attr('class');
     if (classes.split(' ').indexOf('mdl-js-ripple-effect') != -1) _googleMaterialDesignLite.componentHandler.upgradeElement(element, 'MaterialRipple');
     var elts = (0, _jquery2['default'])(element).find('.mdl-js-ripple-effect').get();
     var _iteratorNormalCompletion = true;
     var _didIteratorError = false;
     var _iteratorError = undefined;

     try {
          for (var _iterator = elts[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
               var elt = _step.value;
               _googleMaterialDesignLite.componentHandler.upgradeElement(elt, 'MaterialRipple');
          }
     } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
     } finally {
          try {
               if (!_iteratorNormalCompletion && _iterator['return']) {
                    _iterator['return']();
               }
          } finally {
               if (_didIteratorError) {
                    throw _iteratorError;
               }
          }
     }
}

function upgradeElement(element, type) {
     var _mdlTypes$type = mdlTypes[type];
     var _mdlTypes$type$fct = _mdlTypes$type.fct;
     var fct = _mdlTypes$type$fct === undefined ? [] : _mdlTypes$type$fct;
     var html = _mdlTypes$type.html;
     var _mdlTypes$type$js = _mdlTypes$type.js;
     var js = _mdlTypes$type$js === undefined ? [] : _mdlTypes$type$js;

     if (html) (0, _jquery2['default'])(element).addClass(html.join(' '));

     var _iteratorNormalCompletion2 = true;
     var _didIteratorError2 = false;
     var _iteratorError2 = undefined;

     try {
          for (var _iterator2 = js[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
               var _type = _step2.value;
               _googleMaterialDesignLite.componentHandler.upgradeElement(element, _type);
          }
     } catch (err) {
          _didIteratorError2 = true;
          _iteratorError2 = err;
     } finally {
          try {
               if (!_iteratorNormalCompletion2 && _iterator2['return']) {
                    _iterator2['return']();
               }
          } finally {
               if (_didIteratorError2) {
                    throw _iteratorError2;
               }
          }
     }

     var _iteratorNormalCompletion3 = true;
     var _didIteratorError3 = false;
     var _iteratorError3 = undefined;

     try {
          for (var _iterator3 = fct[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
               var f = _step3.value;
               f(element);
          }
     } catch (err) {
          _didIteratorError3 = true;
          _iteratorError3 = err;
     } finally {
          try {
               if (!_iteratorNormalCompletion3 && _iterator3['return']) {
                    _iterator3['return']();
               }
          } finally {
               if (_didIteratorError3) {
                    throw _iteratorError3;
               }
          }
     }
}

var MDLCustomAttribut = (function () {
     function MDLCustomAttribut(element) {
          _classCallCheck(this, _MDLCustomAttribut);

          this.element = element;
     }

     _createClass(MDLCustomAttribut, [{
          key: 'attached',
          value: function attached() {
               //console.log("mdl attached: " + this.value);
               upgradeElement(this.element, this.value);
          }
     }]);

     var _MDLCustomAttribut = MDLCustomAttribut;
     MDLCustomAttribut = (0, _aureliaFramework.customAttribute)('mdl')(MDLCustomAttribut) || MDLCustomAttribut;
     MDLCustomAttribut = (0, _aureliaFramework.inject)(Element)(MDLCustomAttribut) || MDLCustomAttribut;
     return MDLCustomAttribut;
})();

exports.MDLCustomAttribut = MDLCustomAttribut;
//# sourceMappingURL=mdl.js.map
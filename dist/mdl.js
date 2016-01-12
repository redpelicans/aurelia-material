'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _aureliaFramework = require('aurelia-framework');

var _googleMaterialDesignLite = require('google/material-design-lite');

var mdlTypes = {
  button: {
    html: ["mdl-button", "mdl-js-button"],
    js: ['MaterialButton'],
    fct: [manageRipple]

  },
  textfield: {
    js: ['MaterialTextfield'],
    html: ["mdl-textfield", "mdl-js-textfield"]
  },
  layout: {
    js: ['MaterialLayout'],
    html: ["mdl-layout", "mdl-js-layout"]
  },
  menu: {
    js: ['MaterialMenu'],
    html: ["mdl-menu", "mdl-js-menu"],
    fct: [manageRipple]
  },
  "data-table": {
    js: ['MaterialDataTable'],
    html: ["mdl-data-table", "mdl-js-data-table"],
    fct: [manageRipple]
  },
  tabs: {
    js: ['MaterialTabs'],
    html: ["mdl-tabs", "mdl-js-tabs"],
    fct: [manageRipple]
  },
  slider: {
    js: ['MaterialSlider'],
    html: ["mdl-slider", "mdl-js-slider"]
  },
  tooltip: {
    js: ['MaterialTooltip'],
    html: ["mdl-tooltip"]
  },
  progress: {
    js: ['MaterialProgress'],
    html: ["mdl-progress", "mdl-js-progress"]
  },
  spinner: {
    js: ['MaterialSpinner'],
    html: ["mdl-spinner", "mdl-js-spinner"]
  },
  badge: {
    html: ["mdl-bagde"]
  },
  "switch": {
    js: ['MaterialSwitch'],
    html: ["mdl-switch", "mdl-js-switch"],
    fct: [manageRipple]
  },
  "radio": {
    js: ['MaterialRadio'],
    html: ["mdl-radio", "mdl-js-radio"],
    fct: [manageRipple]
  },
  "icon-toggle": {
    js: ['MaterialIconToggle'],
    html: ["mdl-icon-toggle", "mdl-js-icon-toggle"],
    fct: [manageRipple]
  },
  "checkbox": {
    js: ['MaterialCheckbox'],
    html: ["mdl-checkbox", "mdl-js-checkbox"],
    fct: [manageRipple]
  }

};

function manageRipple(element) {
  if (element.classList.contains("mdl-js-ripple-effect")) _googleMaterialDesignLite.componentHandler.upgradeElement(element, "MaterialRipple");
  var elts = element.getElementsByClassName(".mdl-js-ripple-effect");
  for (var i = 0; i < elts.length; i++) {
    var elt = elts[i];
    _googleMaterialDesignLite.componentHandler.upgradeElement(elt, "MaterialRipple");
  }
}

function upgradeElement(element, type) {
  var _ref = mdlTypes[type] || {};

  var _ref$fct = _ref.fct;
  var fct = _ref$fct === undefined ? [] : _ref$fct;
  var html = _ref.html;
  var _ref$js = _ref.js;
  var js = _ref$js === undefined ? [] : _ref$js;

  if (html) {
    for (var i = 0; i < html.length; i++) {
      element.classList.add(html[i]);
    }
  }

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = js[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var _type = _step.value;
      _googleMaterialDesignLite.componentHandler.upgradeElement(element, _type);
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

  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = fct[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var f = _step2.value;
      f(element);
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

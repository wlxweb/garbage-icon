(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"));
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["vab-icons"] = factory(require("vue"));
	else
		root["vab-icons"] = factory(root["Vue"]);
})((typeof self !== 'undefined' ? self : this), function(__WEBPACK_EXTERNAL_MODULE__8bbf__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "aed5");
/******/ })
/************************************************************************/
/******/ ({

/***/ "79e4":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// addapted from the document.currentScript polyfill by Adam Miller
// MIT license
// source: https://github.com/amiller-gh/currentScript-polyfill

// added support for Firefox https://bugzilla.mozilla.org/show_bug.cgi?id=1620505

(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(typeof self !== 'undefined' ? self : this, function () {
  function getCurrentScript () {
    var descriptor = Object.getOwnPropertyDescriptor(document, 'currentScript')
    // for chrome
    if (!descriptor && 'currentScript' in document && document.currentScript) {
      return document.currentScript
    }

    // for other browsers with native support for currentScript
    if (descriptor && descriptor.get !== getCurrentScript && document.currentScript) {
      return document.currentScript
    }
  
    // IE 8-10 support script readyState
    // IE 11+ & Firefox support stack trace
    try {
      throw new Error();
    }
    catch (err) {
      // Find the second match for the "at" string to get file src url from stack.
      var ieStackRegExp = /.*at [^(]*\((.*):(.+):(.+)\)$/ig,
        ffStackRegExp = /@([^@]*):(\d+):(\d+)\s*$/ig,
        stackDetails = ieStackRegExp.exec(err.stack) || ffStackRegExp.exec(err.stack),
        scriptLocation = (stackDetails && stackDetails[1]) || false,
        line = (stackDetails && stackDetails[2]) || false,
        currentLocation = document.location.href.replace(document.location.hash, ''),
        pageSource,
        inlineScriptSourceRegExp,
        inlineScriptSource,
        scripts = document.getElementsByTagName('script'); // Live NodeList collection
  
      if (scriptLocation === currentLocation) {
        pageSource = document.documentElement.outerHTML;
        inlineScriptSourceRegExp = new RegExp('(?:[^\\n]+?\\n){0,' + (line - 2) + '}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*', 'i');
        inlineScriptSource = pageSource.replace(inlineScriptSourceRegExp, '$1').trim();
      }
  
      for (var i = 0; i < scripts.length; i++) {
        // If ready state is interactive, return the script tag
        if (scripts[i].readyState === 'interactive') {
          return scripts[i];
        }
  
        // If src matches, return the script tag
        if (scripts[i].src === scriptLocation) {
          return scripts[i];
        }
  
        // If inline source matches, return the script tag
        if (
          scriptLocation === currentLocation &&
          scripts[i].innerHTML &&
          scripts[i].innerHTML.trim() === inlineScriptSource
        ) {
          return scripts[i];
        }
      }
  
      // If no match, return null
      return null;
    }
  };

  return getCurrentScript
}));


/***/ }),

/***/ "8a94":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "8bbf":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__8bbf__;

/***/ }),

/***/ "adf1":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/remixicon.symbol.f09b1c74.svg";

/***/ }),

/***/ "aed5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/_@vue_cli-service@4.5.11@@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (true) {
    var getCurrentScript = __webpack_require__("79e4")
    currentScript = getCurrentScript()

    // for backward compatibility, because previously we directly included the polyfill
    if (!('currentScript' in document)) {
      Object.defineProperty(document, 'currentScript', { get: getCurrentScript })
    }
  }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: ./node_modules/_@babel_runtime@7.13.9@@babel/runtime/helpers/esm/defineProperty.js
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}
// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__("8bbf");

// CONCATENATED MODULE: ./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--12-0!./node_modules/_thread-loader@2.1.3@thread-loader/dist/cjs.js!./node_modules/_babel-loader@8.2.2@babel-loader/lib!./node_modules/_vue-loader-v16@16.0.0-beta.5.4@vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader-v16@16.0.0-beta.5.4@vue-loader-v16/dist??ref--0-1!./src/components/VabIcon.vue?vue&type=template&id=4bc6556a&scoped=true



var _withId = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withScopeId"])("data-v-4bc6556a");

Object(external_commonjs_vue_commonjs2_vue_root_Vue_["pushScopeId"])("data-v-4bc6556a");

var _hoisted_1 = {
  key: 2,
  class: "vab-icon"
};

Object(external_commonjs_vue_commonjs2_vue_root_Vue_["popScopeId"])();

var render = /*#__PURE__*/_withId(function (_ctx, _cache) {
  return _ctx.isExternal ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("img", {
    key: 0,
    src: _ctx.icon,
    class: "img-icon"
  }, null, 8, ["src"])) : _ctx.isCustomSvg ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("svg", {
    key: 1,
    class: _ctx.svgClass,
    "aria-hidden": "true"
  }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("use", {
    "xlink:href": '#vab-icon-' + _ctx.icon
  }, null, 8, ["xlink:href"])], 2)) : _ctx.isDefaultSvg ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("svg", _hoisted_1, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("use", {
    "xlink:href": _ctx.remixIconPath + '#ri-' + _ctx.icon
  }, null, 8, ["xlink:href"])])) : (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("i", {
    key: 3,
    class: _defineProperty({}, 'ri-' + _ctx.icon, true),
    "aria-hidden": "true"
  }, null, 2));
});
// CONCATENATED MODULE: ./src/components/VabIcon.vue?vue&type=template&id=4bc6556a&scoped=true

// EXTERNAL MODULE: ./node_modules/_remixicon@2.5.0@remixicon/fonts/remixicon.css
var remixicon = __webpack_require__("d52b");

// CONCATENATED MODULE: ./src/utils/validate.js
function isExternal(path) {
  return /^(https?:|mailto:|tel:)/.test(path);
}
// CONCATENATED MODULE: ./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--12-0!./node_modules/_thread-loader@2.1.3@thread-loader/dist/cjs.js!./node_modules/_babel-loader@8.2.2@babel-loader/lib!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader-v16@16.0.0-beta.5.4@vue-loader-v16/dist??ref--0-1!./src/components/VabIcon.vue?vue&type=script&lang=js



/* harmony default export */ var VabIconvue_type_script_lang_js = ({
  name: 'VabIcon',
  props: {
    icon: {
      type: String,
      required: true
    },
    // 是否使用自定义图标
    isCustomSvg: {
      type: Boolean,
      default: false
    },
    // 是否使用本地库Remix图标
    isDefaultSvg: {
      type: Boolean,
      default: false
    },
    className: {
      type: String,
      default: ''
    }
  },
  setup: function setup(props) {
    var svgClass = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(function () {
      if (props.className) return "vab-icon ".concat(props.className);else return 'vab-icon';
    });
    return {
      svgClass: svgClass,
      isExternal: isExternal(props.icon),
      remixIconPath: __webpack_require__("adf1")
    };
  }
});
// CONCATENATED MODULE: ./src/components/VabIcon.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./src/components/VabIcon.vue?vue&type=style&index=0&id=4bc6556a&lang=scss&scoped=true
var VabIconvue_type_style_index_0_id_4bc6556a_lang_scss_scoped_true = __webpack_require__("de14");

// CONCATENATED MODULE: ./src/components/VabIcon.vue





VabIconvue_type_script_lang_js.render = render
VabIconvue_type_script_lang_js.__scopeId = "data-v-4bc6556a"

/* harmony default export */ var VabIcon = (VabIconvue_type_script_lang_js);
// CONCATENATED MODULE: ./node_modules/_@vue_cli-service@4.5.11@@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (VabIcon);



/***/ }),

/***/ "d52b":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "de14":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_9_0_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_v16_16_0_0_beta_5_4_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_10_1_1_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_16_0_0_beta_5_4_vue_loader_v16_dist_index_js_ref_0_1_VabIcon_vue_vue_type_style_index_0_id_4bc6556a_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("8a94");
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_9_0_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_v16_16_0_0_beta_5_4_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_10_1_1_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_16_0_0_beta_5_4_vue_loader_v16_dist_index_js_ref_0_1_VabIcon_vue_vue_type_style_index_0_id_4bc6556a_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_0_9_0_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_v16_16_0_0_beta_5_4_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_10_1_1_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_16_0_0_beta_5_4_vue_loader_v16_dist_index_js_ref_0_1_VabIcon_vue_vue_type_style_index_0_id_4bc6556a_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 

/***/ })

/******/ })["default"];
});
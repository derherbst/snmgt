/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("let welcome = __webpack_require__(/*! ./js/jquery.paroller.min */ \"./js/jquery.paroller.min.js\");\n\n$(function () {\n  $(window).paroller();\n});\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./js/jquery.paroller.min.js":
/*!***********************************!*\
  !*** ./js/jquery.paroller.min.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("!function(r){\"use strict\";var t=r(\"[data-paroller-factor]\"),o={bgVertical:function(r,t){return r.css({\"background-position\":\"bottom \"+-t+\"px\"})},bgHorizontal:function(r,t){return r.css({\"background-position\":-t+\"px bottom\"})},vertical:function(r,t){return r.css({\"-webkit-transform\":\"translateY(\"+t+\"px)\",\"-moz-transform\":\"translateY(\"+t+\"px)\",transform:\"translateY(\"+t+\"px)\"})},horizontal:function(r,t){return r.css({\"-webkit-transform\":\"translateX(\"+t+\"px)\",\"-moz-transform\":\"translateX(\"+t+\"px)\",transform:\"translateX(\"+t+\"px)\"})}};r.fn.paroller=function(a){var n=r(window).height(),e=r(document).height(),a=r.extend({factor:0,type:\"background\",direction:\"vertical\"},a);t.each(function(){var t=!1,i=r(this),c=i.offset().top,l=i.outerHeight(),s=i.data(\"paroller-factor\"),u=i.data(\"paroller-type\"),f=i.data(\"paroller-direction\"),d=s||a.factor,p=u||a.type,h=f||a.direction,g=Math.round(c*d),b=Math.round((c-n/2+l)*d);\"background\"==p?\"vertical\"==h?o.bgVertical(i,g):\"horizontal\"==h&&o.bgHorizontal(i,g):\"foreground\"==p&&(\"vertical\"==h?o.vertical(i,b):\"horizontal\"==h&&o.horizontal(i,b));var v=function(){t=!1};r(window).on(\"scroll\",function(){if(!t){var a=r(this).scrollTop();g=Math.round((c-a)*d),b=Math.round((c-n/2+l-a)*d),\"background\"==p?\"vertical\"==h?o.bgVertical(i,g):\"horizontal\"==h&&o.bgHorizontal(i,g):\"foreground\"==p&&a<e&&(\"vertical\"==h?o.vertical(i,b):\"horizontal\"==h&&o.horizontal(i,b)),window.requestAnimationFrame(v),t=!0}}).trigger(\"scroll\")})}}(jQuery);\n\n//# sourceURL=webpack:///./js/jquery.paroller.min.js?");

/***/ })

/******/ });
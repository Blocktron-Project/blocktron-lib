module.exports =
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * blocktron-lib
 * This file contains the Blocktron Class which houses the core blockchain functions and methods
 * Written by: Sandeep Vattapparambil
 * Email: sandeepv68@gmail.com
 * Website: www.sandeepv.in
 */

/**
 * Blocktron Module
 * @module Blocktron
 */

/**
 * ECMAScript 5's strict mode is a way to opt in to a restricted variant of JavaScript,
 * thereby implicitly opting-out of "sloppy mode". Strict mode isn't just a subset:
 * it intentionally has different semantics from normal code. Browsers not supporting
 * strict mode will run strict mode code with different behavior from browsers that do,
 * so don't rely on strict mode without feature-testing for support for the relevant
 * aspects of strict mode. Strict mode code and non-strict mode code can coexist,
 * so scripts can opt into strict mode incrementally.
 * Strict mode makes several changes to normal JavaScript semantics:
 *  1. Eliminates some JavaScript silent errors by changing them to throw errors.
 *  2. Fixes mistakes that make it difficult for JavaScript engines to perform optimizations:
 *     strict mode code can sometimes be made to run faster than identical code that's not strict mode.
 *  3. Prohibits some syntax likely to be defined in future versions of ECMAScript.
 */


/**
 * The main Blocktron Class.
 * @class Blocktron
 */

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Blocktron = function () {
  /**
   * The Blocktron Class properties constructor
   */
  function Blocktron() {
    _classCallCheck(this, Blocktron);

    this.chain = [];
    this.newTransactions = [];
  }

  /**
   * Blocktron methods
   */

  /**
   * @function createNewBlock
   * Blocktron method to create a new block on to the blockchain
   * @param {String} nonce - The nonce obtained from proof-of-work
   * @param {String} previousHash - The hash of the previous block
   * @param {String} hash - The hash generated from this block's data
   */


  _createClass(Blocktron, [{
    key: "createNewBlock",
    value: function createNewBlock(nonce, previousHash, hash) {
      /**
       * Validate the parameters
       */
      nonce = nonce ? nonce : function () {
        new Error("Nonce required");
      }();
      previousHash = previousHash ? previousHash : function () {
        new Error("Previous hash required");
      }();
      hash = hash ? hash : function () {
        new Error("Hash required");
      }();

      /**
       * An atomic block in the chain
       * @type {Object}
       * @const
       * @property {Number} index - The chronological position of this block in the chain
       * @property {String} timeStamp - The time of creation of the block
       * @property {String} transactions - The value in transaction to be recorded
       * @property {String} nonce - The nonce obtained from proof-of-work
       * @property {String} hash - The hash generated from this block's data
       * @property {String} previousHash - The hash of the previous block
       */
      var newBlock = {
        index: this.chain.length + 1,
        timeStamp: Date.now(),
        transactions: this.newTransactions,
        nonce: nonce,
        hash: hash,
        previousHash: previousHash
      };

      /**
       * Reset the newTransactions array back to empty after creating the new block,
       * so that the createNewBlock method can start over again from zero.
       */
      this.newTransactions = [];

      /**
       * Then push the new block to the chain
       */
      this.chain.push(newBlock);

      return newBlock;
    }
  }]);

  return Blocktron;
}();

module.exports = Blocktron;

/***/ })
/******/ ]);
//# sourceMappingURL=main.js.map
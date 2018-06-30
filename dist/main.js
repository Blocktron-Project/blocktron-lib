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
 * A JavaScript component to compute the SHA256 of strings or bytes.
 * Note: when Node.js is detected, the Node Crypto component is used 
 * instead of re-implementing the SHA256 hash logic.
 * @see {@link https://www.npmjs.com/package/sha256|NPM sha256}
 * @see {@link https://en.wikipedia.org/wiki/SHA-2|SHA-2}
 */

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var hasher = __webpack_require__(1);

/**
 * The main Blocktron Class.
 * @class Blocktron
 */

var Blocktron = function () {
  /**
   * The Blocktron Class properties constructor
   */
  function Blocktron() {
    _classCallCheck(this, Blocktron);

    this.chain = [];
    this.pendingTransactions = [];
    /**
     * Genesis block defaults
     * A genesis block is the first block of a block chain. Modern versions of Bitcoin number 
     * it as block 0, though very early versions counted it as block 1. The genesis block is 
     * almost always hardcoded into the software of the applications that utilize its block 
     * chain. It is a special case in that it does not reference a previous block, and for Bitcoin 
     * and almost all of its derivatives, it produces an unspendable subsidy.
     * @see {@link https://en.bitcoin.it/wiki/Genesis_block|Bitcoin Wiki}
     */
    this.createNewBlock(1, '0', '0');
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
   * @returns {Object} - Returns the new block object
   */


  _createClass(Blocktron, [{
    key: 'createNewBlock',
    value: function createNewBlock(nonce, previousHash, hash) {
      /**
       * Validate the parameters
       */
      nonce = nonce ? nonce : function () {
        throw new Error('Nonce required');
      }();
      previousHash = previousHash ? previousHash : function () {
        throw new Error('Previous hash required');
      }();
      hash = hash ? hash : function () {
        throw new Error('Hash required');
      }();

      /**
       * @type {Object}
       * @const newBlock - An atomic block in the chain
       * @property {Number} index - The chronological position of this block in the chain
       * @property {String} timeStamp - The time of creation of the block
       * @property {String} transactions - The value of transaction to be recorded
       * @property {String} nonce - The nonce obtained from proof-of-work
       * @property {String} hash - The hash generated from this block's data
       * @property {String} previousHash - The hash of the previous block
       */
      var newBlock = {
        index: this.chain.length + 1,
        timeStamp: Date.now(),
        transactions: this.pendingTransactions,
        nonce: nonce,
        hash: hash,
        previousHash: previousHash
      };

      /**
       * Reset the pendingTransactions array back to empty after creating the new block,
       * so that the createNewBlock method can start over again from zero.
       */
      this.pendingTransactions = [];

      /**
       * Then push the new block to the chain
       */
      this.chain.push(newBlock);

      /**
       * Returns the newly created block
       */
      return newBlock;
    }
  }, {
    key: 'getLastBlock',


    /**
     * @function getLastBlock
     * A method to retreive the penultimate block with respect to current block
     * @returns {Object} - Returns the block object
     */
    value: function getLastBlock() {
      /**
       * This method simply returns the block object from the data 
       * structure at the penultimate position
       */
      return this.chain[this.chain.length - 1];
    }
  }, {
    key: 'createNewTransaction',


    /**
     * @function createNewTransaction
     * A method to create a new transaction
     * @param {Number} amount - The amount/value to be recorded
     * @param {String} sender - The adress of the sender
     * @param {String} receiver - The address of the receiver
     * @returns {Object} - Returns the transaction object
     */
    value: function createNewTransaction(amount, sender, receiver) {

      /**
       * Validate the parameters
       */
      amount = amount ? amount : function () {
        throw new Error('Amount required');
      }();
      sender = sender ? sender : function () {
        throw new Error('Sender required');
      }();
      receiver = receiver ? receiver : function () {
        throw new Error('receiver required');
      }();

      /**
       * @type {Object}
       * @const newTransactions - An atomic transactions block in the chain
       * @property {Number} amount - The value/amount to be recorded
       * @property {String} sender - The adress of the sender
       * @property {String} receiver - The address of the receiver
       */
      var newTransactions = {
        amount: amount,
        sender: sender,
        receiver: receiver
      };

      /**
       * Push the new transaction to the chain
       */
      this.pendingTransactions.push(newTransactions);

      /**
       * Returns the number of the block, this transaction will be added to
       */
      return this.getLastBlock()['index'] + 1;
    }
  }, {
    key: 'hashBlock',


    /**
     * @function hashBlock
     * A helper method to generate a hash string out of a blocks data
     * @param {String} previousBlockHash - The hash of the previous block
     * @param {Object} currentBlockData - The current block's data
     * @param {Number} nonce - The nonce of the block
     * @returns {String} - The hash string generated out of the block data
     */
    value: function hashBlock(previousBlockHash, currentBlockData, nonce) {

      /**
       * Validate the parameters
       */
      previousBlockHash = previousBlockHash ? previousBlockHash : function () {
        throw new Error('Previous block hash required');
      }();
      currentBlockData = currentBlockData ? currentBlockData : function () {
        throw new Error('Current block data required');
      }();
      nonce = nonce ? nonce : '';
      return hasher(previousBlockHash + nonce.toString() + JSON.stringify(currentBlockData));
    }
  }, {
    key: 'proofOfWork',


    /**
     * @function proofOfWork
     * An opinionated, standardized, and universally approved blockchain method 
     * to validate random blocks added to the blockchain.
     * Process: 
     * 1. Repeatedly hash the block data until it reaches the format: '0000<HF98WDYS89DCSD>'.
     * 2. Uses current block data as well as previous block hash.
     * 3. Continuously change the nonce until the correct hash is obtained.
     * 4. Return the nonce value which generates the correct hash.
     * The proofOfWork algorithm runs to a complexity of O(n).
     * @see {@link https://keepingstock.net/explaining-blockchain-how-proof-of-work-enables-trustless-consensus-2abed27f0845| Explaining blockchain}
     * @param {String} previousBlockHash - The hash of the previous block
     * @param {Object} currentBlockData - The current block's data
     * @returns {Number} - Returns the valid nonce number
     */
    value: function proofOfWork(previousBlockHash, currentBlockData) {

      /**
       * Use block scoping rather than constants, because there is a guarenteed rebinding of data to objects.
       */
      var nonce = 0;
      var hashString = this.hashBlock(previousBlockHash, currentBlockData, nonce);

      /**
       * While-loop is prefered over for-loop or other looping constructs.
       * The loop exit point is unknown in this case.
       * @see {@link https://stackoverflow.com/questions/39969145/while-loops-vs-for-loops-in-javascript|While Loops vs. For Loops in JavaScript?}
       */
      while (hashString.substring(0, 4) !== '0000') {
        nonce++;
        hashString = this.hashBlock(previousBlockHash, currentBlockData, nonce);
      }

      /**
       * Simple returns the nonce value which can generate the correct 
       * hash string of pre-determined format, thus the proof.
       */
      return nonce;
    }
  }]);

  return Blocktron;
}();

module.exports = Blocktron;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var crypto = __webpack_require__(2);

// Node.js has its own Crypto function that can handle this natively
var sha256 = module.exports = function(message, options) {
	var c = crypto.createHash('sha256');
	
	if (Buffer.isBuffer(message)) {
		c.update(message);
	} else if (Array.isArray(message)) {
		// Array of byte values
		c.update(new Buffer(message));
	} else {
		// Otherwise, treat as a binary string
		c.update(new Buffer(message, 'binary'));
	}
	var buf = c.digest();
	
	if (options && options.asBytes) {
		// Array of bytes as decimal integers
		var a = [];
		for(var i = 0; i < buf.length; i++) {
			a.push(buf[i]);
		}
		return a;
	} else if (options && options.asString) {
		// Binary string
		return buf.toString('binary');
	} else {
		// String of hex characters
		return buf.toString('hex');
	}
}

sha256.x2 = function(message, options) {
	return sha256(sha256(message, { asBytes:true }), options)
}


/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("crypto");

/***/ })
/******/ ]);
//# sourceMappingURL=main.js.map
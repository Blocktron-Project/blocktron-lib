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
"use strict";

/**
 * The main Blocktron Class.
 * @class Blocktron
 */
class Blocktron {
  /**
   * The Blocktron Class properties constructor
   */
  constructor() {
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
  createNewBlock(nonce, previousHash, hash) {
    /**
     * Validate the parameters
     */
    nonce = nonce ? nonce : (function () {
      new Error("Nonce required");
    })();
    previousHash = previousHash ? previousHash : (function () {
      new Error("Previous hash required");
    })();
    hash = hash ? hash : (function () {
      new Error("Hash required");
    })();

    /**
     * @type {Object}
     * @const newBlock - An atomic block in the chain
     * @property {Number} index - The chronological position of this block in the chain
     * @property {String} timeStamp - The time of creation of the block
     * @property {String} transactions - The value in transaction to be recorded
     * @property {String} nonce - The nonce obtained from proof-of-work
     * @property {String} hash - The hash generated from this block's data
     * @property {String} previousHash - The hash of the previous block
     */
    const newBlock = {
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
}

module.exports = Blocktron;
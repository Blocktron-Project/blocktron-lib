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
'use strict';

/**
 * A JavaScript component to compute the SHA256 of strings or bytes.
 * Note: when Node.js is detected, the Node Crypto component is used 
 * instead of re-implementing the SHA256 hash logic.
 * @see {@link https://www.npmjs.com/package/sha256|NPM sha256}
 * @see {@link https://en.wikipedia.org/wiki/SHA-2|SHA-2}
 */
const hasher = require('sha256');

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
    this.pendingTransactions = [];
    /**
     * Genesis block defaults
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
  createNewBlock(nonce, previousHash, hash) {
    /**
     * Validate the parameters
     */
    nonce = nonce ? nonce : (function () {
      throw new Error('Nonce required');
    })();
    previousHash = previousHash ? previousHash : (function () {
      throw new Error('Previous hash required');
    })();
    hash = hash ? hash : (function () {
      throw new Error('Hash required');
    })();

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
    const newBlock = {
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
  };

  /**
   * @function getLastBlock
   * A method to retreive the penultimate block with respect to current block
   * @returns {Object} - Returns the block object
   */
  getLastBlock() {
    /**
     * This method simply returns the block object from the data 
     * structure at the penultimate position
     */
    return this.chain[this.chain.length - 1];
  };

  /**
   * @function createNewTransaction
   * A method to create a new transaction
   * @param {Number} amount - The amount/value to be recorded
   * @param {String} sender - The adress of the sender
   * @param {String} reciever - The address of the reciever
   * @returns {Object} - Returns the transaction object
   */
  createNewTransaction(amount, sender, reciever) {

    /**
     * Validate the parameters
     */
    amount = amount ? amount : (function () {
      throw new Error('Amount required');
    })();
    sender = sender ? sender : (function () {
      throw new Error('Sender required');
    })();
    reciever = reciever ? reciever : (function () {
      throw new Error('Reciever required');
    })();

    /**
     * @type {Object}
     * @const newTransactions - An atomic transactions block in the chain
     * @property {Number} amount - The value/amount to be recorded
     * @property {String} sender - The adress of the sender
     * @property {String} reciever - The address of the reciever
     */
    const newTransactions = {
      amount: amount,
      sender: sender,
      reciever: reciever
    };

    /**
     * Push the new transaction to the chain
     */
    this.pendingTransactions.push(newTransactions);

    /**
     * Returns the number of the block, this transaction will be added to
     */
    return this.getLastBlock()['index'] + 1;
  };

  /**
   * @function hashBlock
   * A helper method to generate a hash string out of a blocks data
   * @param {String} previousBlockHash - The hash of the previous block
   * @param {Object} currentBlockData - The current block's data
   * @param {Number} nonce - The nonce of the block
   * @returns {String} - The hash string generated out of the block data
   */
  hashBlock(previousBlockHash, currentBlockData, nonce) {

    /**
     * Validate the parameters
     */
    previousBlockHash = previousBlockHash ? previousBlockHash : (function () {
      throw new Error('Previous block hash required');
    })();
    currentBlockData = currentBlockData ? currentBlockData : (function () {
      throw new Error('Current block data required');
    })();
    nonce = nonce ? nonce : '';
    return hasher(previousBlockHash + nonce.toString() + JSON.stringify(currentBlockData));
  };

  /**
   * @function proofOfWork
   * An opinionated, standardized, and universally approved blockchain method 
   * to validate random blocks added to the blockchain.
   * Process: 
   * 1. Repeatedly hash the block data until it reaches the format: '0000<HF98WDYS89DCSD>'.
   * 2. Uses current block data as well as previous block hash.
   * 3. Continuously change the nonce until the correct hash is obtained.
   * 4. Return the nonce value which generates the correct hash.
   * @see {@link https://keepingstock.net/explaining-blockchain-how-proof-of-work-enables-trustless-consensus-2abed27f0845| Explaining blockchain}
   * @param {*} previousBlockHash 
   * @param {*} currentBlockData 
   */
  proofOfWork(previousBlockHash, currentBlockData) {

    /**
     * Use block scoping rather than constants, because there is a guarenteed rebinding of data to objects.
     */
    let nonce = 0;
    let hashString = this.hashBlock(previousBlockHash, currentBlockData, nonce);

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
  };
}

module.exports = Blocktron;

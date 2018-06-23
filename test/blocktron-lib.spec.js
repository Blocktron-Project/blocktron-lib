/**
 * blocktron-lib spec file
 * This spec file contains the test specs for blocktron-lib
 * Written by: Sandeep Vattapparambil
 */

const Blocktron = require('../src/index');
const blockchain = new Blocktron;

/**
 * Empty chain test 1
 */
test('Test 1: Given an empty instance of blocktron-lib', () => {
    expect(blockchain).not.toBeNull();
});

/**
 * Empty chain test 2
 */
test('Test 2: Given an empty instance of blocktron-lib', () => {
    expect(blockchain).toEqual({
        chain: [],
        pendingTransactions: []
    });
});

/**
 * Create a block - test
 */
test('Test 3: Try adding data to block', () => {
    blockchain.createNewBlock(2389, 'a87sdfs8df8ds89f', '23huih2342jh34j');
    expect(blockchain).not.toBeNull();
});

/**
 * Create a transaction and add to pending transactions
 */
test('Test 4: Create a new transaction and add to pending transactions', () => {
    blockchain.createNewTransaction(100, 'ROSS2IU3Y42U3', 'RACHELJ234J234KJ20');
    expect(blockchain).not.toBeNull();
});

/**
 * Mine the block after creating the block
 */
test('Test 5: Mine the block back to the transactions after creating the block', () => {
    blockchain.createNewBlock(1289, 'a87sdhkf8ds89f', '23huigf9fg67h34j');
    expect(blockchain).not.toBeNull();
    expect(blockchain.chain[1]).not.toBeNull();
});

/**
 * Test the hashBlock method
 */
test('Test : Given previousBlockHash, currentBlockData, and nonce, generate hash string', () => {
    const previousBlockHash = '234jn23kj4b23kj4b';
    const nonce = 131232;
    const currentBlockData = [{
        amount: 20,
        sender: 'wer23232323rw34fd3',
        reciepient: 'sdf7s89dufs98duf'
    }, {
        amount: 30,
        sender: 'wer23232323rw34fd3',
        reciepient: 'sdf7s89dufs98duf'
    }, {
        amount: 50,
        sender: 'wer23232323rw34fd3',
        reciepient: 'sdf7s89dufs98duf'
    }];
    expect(blockchain.hashBlock(previousBlockHash, nonce, currentBlockData)).not.toBeNull();
});

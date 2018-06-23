/**
 * blocktron-lib spec file
 * This spec file contains the test specs for blocktron-lib
 * Written by: Sandeep Vattapparambil
 */

const blocktron = require('../src/index');
const blockchain = new blocktron;

/**
 * Empty chain test 1
 */
test('Given an empty instance of blocktron-lib', () => {
    expect(blockchain).not.toBeNull();
});

/**
 * Empty chain test 2
 */
test('Given an empty instance of blocktron-lib', () => {
    expect(blockchain).toEqual({
        chain: [],
        newTransactions: []
    });
});

/**
 * Create a block - test
 */
test('Try adding data to block', () => {
    blockchain.createNewBlock(2389, 'a87sdfs8df8ds89f', '23huih2342jh34j');
    expect(blockchain).not.toBeNull();
});
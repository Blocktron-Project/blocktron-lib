/**
 * blocktron-lib spec file
 * This spec file contains the test specs for blocktron-lib
 * Written by: Sandeep Vattapparambil
 */

const blocktron = require('../src/index');
const blockchain = new blocktron;

test('Given an empty instance of blocktron-lib', () => {
    expect(blockchain).not.toBeNull();
});

test('Given an empty instance of blocktron-lib', () => {
    expect(blockchain).toEqual({
        chain: [],
        newTransactions: []
    });
});
"use strict";

const PrimeList = require('./../lib/PrimeList');
const KnownPrimes = require('./../lib/KnownPrimes');
const tap = require('tap');

tap.test('PrimeListTest', (primeListTest) => {
    var tenPrimes = new PrimeList(10);

    primeListTest.deepEqual(tenPrimes.numbers, KnownPrimes.primeNumbers.slice(0, 10), 'got list of ten numbers');
    primeListTest.end();
});
"use strict"

var primes = require('./primes.json');
var _ = require('lodash');
const LENGTH = primes.primes.length;
const LAST_PRIME = _.last(primes.primes);

const primeNumbers = primes.primes;
const notPrimeNumbers = _.difference(_.range(1, LAST_PRIME), primeNumbers);

module.exports = {
    LAST_PRIME,
    notPrimeNumbers,
    primeNumbers
};
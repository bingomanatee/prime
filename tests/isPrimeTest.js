"use strict";

var tap = require('tap');

var isPrime = require('./../lib/isPrime');
var knownPrimes = require('./../lib/KnownPrimes');

tap.test('primes', (pTest) => {
    pTest.test('known primes are prime', (isPrimeTest) => {
        knownPrimes.primeNumbers.forEach(primeNumber => isPrimeTest.ok(isPrime(primeNumber), primeNumber + ' is prime'));
        isPrimeTest.end();
    });

    pTest.test('non primes are not prime', (isNotPrimeTest) => {
        !knownPrimes.notPrimeNumbers.forEach(notPrimeNumber => isNotPrimeTest.notOk(isPrime(notPrimeNumber), notPrimeNumber + ' is not prime'));
        isNotPrimeTest.end();
    });

    pTest.end();
});
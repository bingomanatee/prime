"use strict";

var isPrime = require('./isPrime');

class PrimeList {
    constructor(count) {
        this.count = Math.max(1, count);
        this.values = [];
        var value = 1;
        while (this.values.length < count) {
            if (isPrime(value)) {
                this.values.push(value);
            }
            if (value > 2) {
                value += (value %2) ? 2 : 1;
            } else {
                ++value;
            }
        }

    }

    get numbers() {
        return this.values.slice(0);
    }
}

module.exports = PrimeList;
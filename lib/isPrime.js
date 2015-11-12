/**
 * Tests if a given number is prime.
 *
 * @param value {int} must be positive whole number.
 * @returns {boolean}
 */
module.exports = (value) => {
    if (isNaN(value) || value <= 0 || value % 1) {
        throw new Error("bad value");
    }
    if (value == 1) {
        return false;
    }
    var divisor = 2;
    var maxRoot = Math.min(Math.ceil(Math.sqrt(value)), value - 1);

    while (divisor <= maxRoot) {
        var remainder = ((value / divisor ) % 1);
        if (remainder === 0) {
            return false;
        }
        ++divisor;
    }
    return true;
};
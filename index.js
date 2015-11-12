"use strict";

var CLI = require('clui'),
    PrimeList = require('./lib/PrimeList'),
    clc = require('cli-color');

module.exports = (COUNT) => {

    const list = new PrimeList(COUNT);

    const COL_CHARACTERS = (list.lastPrime * list.lastPrime);
    const COLUMN_SIZE = Math.max(5, COL_CHARACTERS.toString().length + 1);

    var Line = CLI.Line,
        LineBuffer = CLI.LineBuffer;

    var outputBuffer = new LineBuffer({
        x: 0,
        y: 0,
        width: (COUNT + 1) * COLUMN_SIZE,
        height: COUNT + 3
    });

    var message = new Line(outputBuffer)
        .column('Primes', COLUMN_SIZE * COUNT, [clc.green])
        .fill()
        .store();

    var header = new Line(outputBuffer)
        .column(' \\ ', COLUMN_SIZE, [clc.cyan]);

    for (let colIndex in list.numbers) {
        header.column((list.numbers[colIndex]).toString(), COLUMN_SIZE, [clc.cyan]);
    }
    header.fill()
        .store();

    var line;
    var odd = true;
    for (let rowIndex in list.numbers) {
        var oddCol = true;
        var rowValue = list.numbers[rowIndex];
        line = new Line(outputBuffer);
        line.column(rowValue.toString(), COLUMN_SIZE, [clc.cyan]);

        for (let colIndex in list.numbers) {
            line.column((rowValue * list.numbers[colIndex]).toString(), COLUMN_SIZE, (odd) ? [clc.yellow] : (oddCol) ? [clc.red] : null);
            oddCol = !oddCol;
        }
        line.fill()
            .store();

        odd = !odd;
    }

    outputBuffer.output();
};
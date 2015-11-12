"use strict";

var CLI = require('clui'),
    PrimeList = require('./lib/PrimeList'),
    clc = require('cli-color');

module.exports = (COUNT) => {
    require('clear')();
    const list = new PrimeList(COUNT);

    const COL_CHARACTERS = (list.lastPrime * list.lastPrime);
    const COLUMN_SIZE = Math.max(5, COL_CHARACTERS.toString().length + 1);

    var padding = '';
    while(padding.length < COLUMN_SIZE) padding += ' ';

    const pad = (n) => {
        if (!(typeof n === 'string')) {
            n = n.toString();
        }
        return `${padding}${n}`.substr(-COLUMN_SIZE );
    };

    var Line = CLI.Line,
        LineBuffer = CLI.LineBuffer;

    var outputBuffer = new LineBuffer({
        x: 0,
        y: 0,
        width: (COUNT + 1) * COLUMN_SIZE,
        height: COUNT + 3
    });

    var message = new Line(outputBuffer)
        .column('Primes', COLUMN_SIZE * COUNT + 1, [clc.green])
        .fill()
        .store();

    var header = new Line(outputBuffer)
        .column(' \\ ', COLUMN_SIZE + 1, [clc.cyan]);

    for (let colIndex in list.numbers) {
        header.column(pad((list.numbers[colIndex])), COLUMN_SIZE, [clc.cyan]);
    }
    header.fill()
        .store();

    var line;
    var odd = true;
    for (let rowIndex in list.numbers) {
        var oddCol = true;
        var rowValue = list.numbers[rowIndex];
        line = new Line(outputBuffer);
        line.column(pad(rowValue), COLUMN_SIZE + 1, [clc.cyan]);

        for (let colIndex in list.numbers) {
            line.column(pad(rowValue * list.numbers[colIndex]), COLUMN_SIZE, (odd) ? [clc.yellow] : (oddCol) ? [clc.red] : null);
            oddCol = !oddCol;
        }
        line.fill()
            .store();

        odd = !odd;
    }

    outputBuffer.output();
};
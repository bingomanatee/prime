#!/usr/bin/env node --harmony

var isCalled = false;
const program = require('commander');
program.version('1.0.0')
    .arguments('<count>', 'number of rows and columns', 10)
    .action(function(c){
    console.log('colums: ', c);
    require('./index.js')(c || 10);
    isCalled = true;
    })
    .parse(process.argv);

if (!isCalled) {
    require('./index.js')( 10);
}
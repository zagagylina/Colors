var colors = require('colors');

console.log(colors.yellow('Hello ') + colors.blue('World!'));
console.log(colors.random('Hello ') + colors.trap('World!'));
console.log(colors.yellow.bold('Hello ') + colors.blue.inverse('World!'));


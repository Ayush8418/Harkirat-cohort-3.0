// using external library (CHALK)
import chalk from 'chalk';

log(chalk.blue('Hello') + ' World' + chalk.red('!'));
log(chalk.blue.bgRed.bold('Hello world!'));
log(chalk.blue('Hello', 'World!', 'Foo', 'bar', 'biz', 'baz'));
log(chalk.red('Hello', chalk.underline.bgBlue('world') + '!'));



// using internal Library (fs and Path)
// const fs = require('fs');
// const path =  require('path');

// console.log(path.join("../../", "index.js"))
// console.log(__dirname);
// console.log(__filename);
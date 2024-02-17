/* 
  * TAREA: Saber cuántas palabras tiene nuestro readme y saber cuantas palabras react existen
*/

//TODO: Read file in Node js

//Import filesystem
const fs = require('node:fs');

const content = fs.readFileSync('README.md','utf-8');

const reactWordCount = content.match(/react/gi).length;
console.log(reactWordCount);










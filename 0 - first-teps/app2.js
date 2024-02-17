//TODO: Read file in Node js

//Import filesystem
const fs = require('node:fs');

//Leemos la data que esta en  nuestro readme
//UTF-8:Sirve para codificar y traducirlo al español
const data = fs.readFileSync('README.md','utf-8');

//Cambiamos la palabra React por Angular
const newData = data.replace(/React/ig,'Angular');

//Creamos un nuevo archivo 
fs.writeFileSync('README-Angular.md',newData);





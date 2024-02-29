
import fs from "node:fs";

let banner = `
=======================
        TABLE 5
=======================
`;

let number = 5;
let operation;

for (let i = 1; i < 10; i++) {
  
  console.log(i);

  operation = `5 x ${i} = ${number * i}\n`;
  banner+= operation;

};

fs.writeFileSync('tabla-5.txt',banner);
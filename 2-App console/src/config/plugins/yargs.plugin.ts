
import yargs, { number } from "yargs";
import {hideBin} from "yargs/helpers";


// ? Utilizando yargs
export const yarg = yargs(process.argv)
  //?Option: Podemos crear nuestras opciones y como funcionarian
  .option('b',{
    alias: 'base',
    type: 'number',
    demandOption: true,
    describe: 'Multiplication table base'
  })
  .parseSync()




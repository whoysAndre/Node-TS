import { yarg } from "./config/plugins/yargs.plugin";

console.log(yarg.b);

//Creación de una función anonima auto
(async()=>{
  await main();
})();

async function main() {
  
  console.log(yarg);
  

};



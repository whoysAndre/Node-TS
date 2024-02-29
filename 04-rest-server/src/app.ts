import { Server } from "./presentation/server";
import { AppRoutes } from "./presentation/routes";


//IFII initial app
(async()=>{
  main();
})();

function main(){

  const server = new Server({
    routes: AppRoutes.routes,
  });
  server.start();

};
import { envs } from "./config/envs";
import { AppRoutes} from "./presentation/app.routes";
import { Server } from "./presentation/server";


(()=>{
  main();
})();

function main(){

  const server = new Server({
    port: envs.PORT,
    router: AppRoutes.routes
  });
  server.start();

};
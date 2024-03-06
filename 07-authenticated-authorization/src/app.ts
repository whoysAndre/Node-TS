
import { envs } from "./config";
import { MongoDatabase } from "./data";
import { AppRoutes } from "./presentatiom/routes";
import { Server } from "./presentatiom/server";


(()=>{
  main();
})();



async function main(){
  //Database
  await MongoDatabase.connect({
    dbName: envs.DB_NAME,
    mongoUrl: envs.MONGO_URL,
  });

  //Server
  const server = new Server({
    port: envs.PORT,
    routes: AppRoutes.routes
  });
  server.start();
};
import express, { Router } from "express";
import { TodoRoutes } from "./todos/routes";

interface Options{
  port: number;
  routes: Router;
}


export class Server{

  private app = express();
  private readonly port:number;
  private readonly routes:Router;

  constructor({port,routes}:Options){
    this.port = port;
    this.routes = routes;
  };

  start(){

    // ? Middlewares
    this.app.use( express.json() ); // raw
    this.app.use( express.urlencoded({ extended: true }) ); // x-www-form-urlencoded

    // ? Routes
    this.app.use(this.routes);

    // ? SERVER

    this.app.listen(this.port);


  };



};


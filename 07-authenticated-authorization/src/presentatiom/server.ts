import express, { Router } from "express";

interface Options{
  port:number;
  routes: Router;
};

export class Server{

  private app = express();
  private readonly port:number;
  private readonly routes:Router;

  constructor({port,routes}:Options){
    this.port = port;
    this.routes = routes;
  };
  
  
  async start(){
    
    //Middlewares
    this.app.use(express.json());
    this.app.use(express.urlencoded({extended:false}));

    //Routes
    this.app.use(this.routes);

    //Server
    this.app.listen(this.port);

  };





};
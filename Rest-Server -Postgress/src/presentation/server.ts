import express, { Router } from "express";

interface Options{
  port: number;
  router:Router
};


export class Server{

  private app = express();
  private readonly port:number;
  private router:Router;

  constructor({port,router}:Options){
    this.port = port;
    this.router = router;
  };

  public start(){

    
    //middlewares
    this.app.use(express.json());
    this.app.use(express.urlencoded({extended:false}));

    //routing
    this.app.use(this.router);

    //Server
    this.app.listen(this.port);
  };

};
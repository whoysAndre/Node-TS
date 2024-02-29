import express, { Router } from "express";


interface Options{
  routes: Router;
}



//Create server
export class Server{

  // ? Atributes
  private app = express();
  private readonly routes:Router;


  constructor({routes}:Options){
    this.routes = routes;
  }

  public start(){

    //Middlewares

    // * Read JSON  
    this.app.use(express.json());
    // * Read FORM
    this.app.use(express.urlencoded({extended:true}));

    //Routes
    this.app.use(this.routes);

    //Server
    this.app.listen(3000);


  };

};
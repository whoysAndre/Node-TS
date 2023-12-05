import express, { Router } from "express"


interface Options{
  port: number;
  routes: Router
}

export class Server{

  private app = express();
  private readonly port:number;
  private routes: Router; 

  constructor(options:Options){
    const { port,routes } = options;
    this.port = port;
    this.routes = routes;
  }

  
  public start(){

    
    //Middleware
    this.app.use(express.urlencoded({extended:false}));

    //Routing
    this.app.get('/',(req,res)=>{
      res.send('Hello');
    })

    this.app.use('/user',this.routes);

    //Create Port
    this.app.listen(this.port);

  }


}
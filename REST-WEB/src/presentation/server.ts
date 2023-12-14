import express from "express";
import path from "path";

interface Options{
  port: number;
};

export class Server{

  private app = express();
  private readonly port:number;
  
  constructor({port}:Options){
    this.port = port;
  };


  public start(){

    this.app.use(express.static('public'));


    this.app.get('*',(req,res)=>{

      const indexPath = path.join(__dirname + '../../../public/index.html');
      res.sendFile(indexPath);

    });
    
    this.app.listen(this.port);
  }

}  
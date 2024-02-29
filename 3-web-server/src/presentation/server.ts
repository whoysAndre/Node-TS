//Aquio va todo el servidor
import express from "express";


interface Options{
  port: number;
};


export class Server{

  //Atributos
  private app = express();
  private readonly port:number;

  constructor(options:Options){
    const {  port } = options;
    this.port = port;
  };


  async start(){
    
    //Middleware

    //Public Folder
    this.app.use(express.static('public'));

    //Server
    this.app.listen(this.port,()=>{
      console.log('Server running');
    });

  };



};




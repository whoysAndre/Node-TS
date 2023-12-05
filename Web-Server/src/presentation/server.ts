import express from "express";
import path from "path";


//Creamos una interface
interface Option{
  port: number,
  public_path: string
};

export class Server{

  private app = express();
  private readonly port:number;//->Colocamos readonly porque nunca va a cambiar 
  private readonly publicPath:string;

  constructor(options:Option){
    const {port,public_path='public'} = options;
    this.port = port;
    this.publicPath = public_path; 
  };
  
  start(){
    
    /*----Middleware */
    
    /*----Public files----*/
    this.app.use(express.static(this.publicPath));//-> Ese file public luego lo pondremos en una varibale de entorno
    
    this.app.get('*',(req,res)=>{
      const indexPath = path.join(__dirname + `../../../${this.publicPath}/index.html`);
      res.sendFile(indexPath);
    })
    
    //Create server
    this.app.listen(this.port); //-> Ese port luego lo pondremos en una varibale de entorno
  };
};
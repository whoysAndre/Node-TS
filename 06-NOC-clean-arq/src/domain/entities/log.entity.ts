
export enum LogSeverityLevel{
  low = 'low',
  medium = 'medium',
  high = 'high'
}


export class LogEntity{

  //TODO: Aquí tendremos lo que queremos registrar en nuestra app
  public level:LogSeverityLevel;
  public message:string;
  public createdAt:Date;


  constructor(message:string,level:LogSeverityLevel){
    this.message = message;
    this.level = level;
    this.createdAt = new Date();
  };

  


};





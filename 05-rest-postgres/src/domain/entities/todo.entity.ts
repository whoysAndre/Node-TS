


export class TodoEntity{

  public id:number;
  public text: string;
  public completedAt?:Date;

  constructor(id:number,text:string,completedAt:Date){
    this.id = id;
    this.text = text;
    this.completedAt = completedAt;
  }

  //Creamos un metodo geter para ver si el todo es completado
  get isCompletedAt(){
    return !!this.completedAt;
  };


  public static mapTodosInGetAll(object:any){
    const { id,text,completedAt} = object;

    if(!id) throw 'Id is required';
    if(!text) throw 'Text is required';

    return new TodoEntity(id,text,completedAt);

  };



};









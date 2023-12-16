

//Cree una interface para recibir las props
interface IProps{
  name:string,
  age:number
};

//El dtos no es mas que una clase 
export class CreateTodoDto{

  //En este constructor como params pondremos la data que viene del dtos
  private constructor(
    public readonly name:string,
    public readonly age:number
  ){}

  static create(props:IProps):[string?, CreateTodoDto?]{//Lo hacemos con tipado por que es ts

    const { name,age } = props;
    if(!name && !age) return ['El nombre y la edad son requeridas',undefined];

    return [undefined, new CreateTodoDto(name,age)];//Al hacer en constructor privado solo lo usaremos en esta clase
  };

};





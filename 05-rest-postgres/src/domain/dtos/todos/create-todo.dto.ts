


export class CreateTodoDto{

  public readonly text:string;
  /*
    Como hicimos privado al constructor solo podemos usarla en esta clase
    y para acceder a ella usamos los metodos staticos
  */
  private constructor(text:string){
    this.text = text;
  };

  static create(props:any):[string?,CreateTodoDto?]{

    const { text } = props;

    // ? Hacemos la validación si no viene el texto mandamos el msg
    if(!text) return ['Text property is required'];
    
    // ? Pero si viene mandamos la instacia ya creada de ese objeto
    return [undefined, new CreateTodoDto(text)];
  };

};


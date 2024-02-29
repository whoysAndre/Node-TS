import { CreateTodoDto } from "../dtos";
import { TodoEntity } from "../entities/todo.entity";

export abstract class TodoDatasources {

  
  //Aqui va a contener toda mi logica que aplico en mi base de datos
  abstract create(createTodoDto:CreateTodoDto): Promise<TodoEntity>;
  abstract getAll():Promise<TodoEntity[]>;

};
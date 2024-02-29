import { CreateTodoDto, TodoDatasources, TodoEntity, TodoRepository } from "../../domain";


export class TodoRepositoryImpl implements TodoRepository{
  
  
  constructor(
    private readonly datasources: TodoDatasources
  ){}
  
  create(createTodoDto: CreateTodoDto): Promise<TodoEntity> {
    return this.datasources.create(createTodoDto);
  }
  getAll(): Promise<TodoEntity[]> {
    return this.datasources.getAll();
  }

}

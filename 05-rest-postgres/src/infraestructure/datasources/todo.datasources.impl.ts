

import prisma from '../../data/postgres/prisma';
import { TodoEntity } from '../../domain/entities/todo.entity';
import { CreateTodoDto, TodoDatasources } from '../../domain';




export class TodoDatasourcesIml implements TodoDatasources{


  //TODO: METODÓS PARA HACER EL REST TRAIDOS DESDE EL CONTROLADOR

  async create(createTodoDto: CreateTodoDto): Promise<TodoEntity> {
    
    const todo = await prisma.todo.create({
      data: createTodoDto!
    });

    return TodoEntity.mapTodosInGetAll(todo);
  }
  async getAll(): Promise<TodoEntity[]> {
    const todos = await prisma.todo.findMany();
    return todos.map(todo=>TodoEntity.mapTodosInGetAll(todo));
  }

};
import { Router } from "express";
import { TodoController } from "./controller";

import { TodoDatasourcesIml } from "../../infraestructure/datasources/todo.datasources.impl";
import { TodoRepositoryImpl } from "../../infraestructure/repositories/todo.repository.impl";


export class TodoRoutes{

  static get routes(): Router{

    const router = Router();

    const dataSources = new TodoDatasourcesIml();
    const repository = new TodoRepositoryImpl(dataSources);

    const todoController = new TodoController(repository);

    router.get('/', todoController.getTodos);
    router.get('/:id', todoController.getTodoById );
    router.post('/', todoController.createTodo );
    router.put('/:id', todoController.updateTodo );
    router.delete('/:id', todoController.deleteTodo );

    return router;
  };


};
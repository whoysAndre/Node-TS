import { Request, Response } from "express";
import prisma from '../../data/postgres/prisma';
import { CreateTodoDto } from '../../domain/dtos/todos/create-todo.dto';
import { TodoRepository } from '../../domain/repository/todo.repository';

const todos = [
  { id: 1, text: 'Buy milk', completedAt: new Date() },
  { id: 2, text: 'Buy bread', completedAt: null },
  { id: 3, text: 'Buy butter', completedAt: new Date() },
];

export class TodoController {


  constructor(
    private readonly todoRepository:TodoRepository
  ) { };


  public getTodos = async (req: Request, res: Response) => {

    const todos = await this.todoRepository.getAll();
    res.json(todos);

  };

  public getTodoById = async (req: Request, res: Response) => {
    const id = +req.params.id;
    if (isNaN(id)) return res.status(400).json({ error: 'ID argument is not a number' });

    const todo = await prisma.todo.findUnique({
      where: {
        id
      }
    });

    (todo) 
      ? res.json(todo)
      : res.status(404).json({ error: `TODO with id ${id} not found` })


  };

  public createTodo = async (req: Request, res: Response) => {
    
    const [error,createTodoDto] = CreateTodoDto.create(req.body);

    if(error) return res.status(400).json({error});

    const todo = await this.todoRepository.create(createTodoDto!);

    res.json(todo);

  };

  public updateTodo = async (req: Request, res: Response) => {
    const id = +req.params.id;
    if (isNaN(id)) return res.status(400).json({ error: 'ID argument is not a number' });

    const todo = await prisma.todo.findUnique({
      where: {
        id
      }
    });
    if (!todo) return res.status(404).json({ error: `Todo with id ${id} not found` });


    await prisma.todo.update({
      where: {
        id
      },
      data: {
        text: req.body.text
      }
    });

    res.json({ message: 'updated' });

  };

  public deleteTodo = async (req: Request, res: Response) => {
    const id = +req.params.id;

    const todo = await prisma.todo.findUnique({
      where: {
        id
      }
    });
    if (!todo) return res.status(404).json({ error: `Todo with id ${id} not found` });

    await prisma.todo.delete({
      where: {
        id
      }
    })

    res.status(200).json({ message: 'Deleted', ok: true })

  }

}
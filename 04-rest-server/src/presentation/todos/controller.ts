import { Request, Response } from "express"

const todos = [
  { id: "1", decription: 'Recolectar la gema del alma', createdAt: new Date() },
  { id: "2", decription: 'Recolectar la gema del infinito', createdAt: null },
  { id: "3", decription: 'Recolectar la gema del vacío', createdAt: new Date() }
];



export class TodoController {

  // * Inyección de dependencias
  constructor() { };


  public getTodos = (req: Request, res: Response) => {
    res.json(todos);
  };

  public getTodoById = (req: Request, res: Response) => {
    //Read params
    const { id } = req.params;

    const todoById = todos.find(todo => todo.id === id);

    if (!todoById) return res.json({ "message": "todo not exist" }).status(400);

    res.json(todoById);

  };


  public addTodo = (req: Request, res: Response) => {

    const data = req.body;

    todos.push(data);

    res.json(todos);

  };

  public deleteTodo = (req: Request, res: Response) => {
    //Read params
    const { id } = req.params;

    const todoById = todos.find(todo => todo.id === id);

    if (!todoById) return res.json({ "message": "todo not exist" }).status(400);

    const todoDelete = todos.filter(todo=>todo.id!==id);

    res.json(todoDelete);
    

  };




};

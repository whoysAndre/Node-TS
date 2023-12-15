import { Request, Response } from "express"


const todos = [
  {
    id: 1,
    name:"Jhon Doe",
    age: 20
  },
  {
    id:2,
    name: "Jane Doe",
    age: 20
  }
]


export class TodosController{

  constructor(){}

  public getTodos = (req:Request,res:Response)=>{
    res.send(todos);
  };

  public getTodo = (req:Request,res:Response)=>{
    const todoId = parseInt(req.params.id);
    const todoFound = todos.find(todo=>todo.id===todoId);
    res.send(todoFound);

  };

  public createTodo = (req:Request,res:Response)=>{
    const {name,age} = req.body;

    if(!name && !age) return res.status(400).json({error:'Error'});

    const newTodo = {
      id: todos.length + 1,
      name,
      age
    }
    
    todos.push(newTodo);

    res.json(todos);
    
  };

  public updateTodo = (req:Request,res:Response)=>{
    
    const id = parseInt(req.params.id);

    todos.forEach((todo,index)=>{
      if(todo.id===id){
        todos[index] = req.body;
      }
    })

  };

  public deleteTodo = (req:Request,res:Response)=>{

    const id = parseInt(req.params.id);

    const xTodo = todos.filter(todo=>todo.id!==id);

    res.json(xTodo);

  };

};



import { Request, Response } from "express"
import { prisma } from "../../data/postgres";
import { CreateTodoDto } from "../../domain/dtos";


export class TodosController{

  constructor(){}

  public getTodos = async(req:Request,res:Response)=>{
    
    const todos = await prisma.todo.findMany();
    res.json(todos);
    
  };

  public getTodo = async(req:Request,res:Response)=>{
    const todoId = parseInt(req.params.id);
    const todo = await prisma.todo.findFirst({
      where:{
        id:todoId
      }
    });  
    res.json(todo);
  };

  public createTodo = async(req:Request,res:Response)=>{
    

    const [error,createTodoDto] = CreateTodoDto.create(req.body);

    if(error) return res.status(400).json({error});

    await prisma.todo.create({
      data:{
        name:createTodoDto!.name,
        age:Number(createTodoDto!.age)
      }
    }); 
    
    res.send('Añadido exitosamente');

  };

  public updateTodo = async(req:Request,res:Response)=>{
    
    const id = parseInt(req.params.id);
    const dataNew = req.body;

    const todoFind = await prisma.todo.findFirst({
      where:{id}
    })

    if(todoFind){
      await prisma.todo.update({
        where:{id},
        data: {
          name: dataNew.name,
          age: parseInt(dataNew.age)
        }
      });
      res.send('Actualizado');
    }else{
      res.send('User not found');
    };



  };

  public deleteTodo = async(req:Request,res:Response)=>{

    const id = parseInt(req.params.id);
    await prisma.todo.delete({
      where:{id}
    })
    
    res.send('Todo delete');

  };

};



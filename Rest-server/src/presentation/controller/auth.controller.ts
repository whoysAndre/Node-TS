import { Request, Response } from "express";

interface Users{
  id: number;
  name: string;
  age: number;
}

const users:Users[] = [
  {
    id: 1,
    name: "Rodrigo",
    age: 20
  }
];

export class UserController{

  constructor(){}

  public getUsers(req:Request,res:Response){
    res.json(users);
  };

  public getUser(req:Request,res:Response){
    const param = parseInt(req.params.id);
    const userFind = users.find(user=>user.id===param);
    if(userFind){
      res.json(userFind);
    }else{
      res.status(404).send('Usernot found');
    }
  };
  public createUser(req:Request,res:Response){
    const { name,age } = req.body;
    const newUser = {
      id: users.length + 1,
      name,
      age
    }
    users.push(newUser);
    res.send('Create user');
  };
  public updateUser(req:Request,res:Response){
    const param = parseInt(req.params.id);
    users.forEach(user=>{
      if(param===user.id){
        user.name = req.body.name;
        user.age = req.body.age;
        return;
      }
    })
    res.json(users);
  };
  public deleteUser(req:Request,res:Response){
    const param = parseInt(req.params.id);
    const deleteUser = users.filter(user=>user.id!==param);
    res.json(deleteUser);
    res.send('User delete');
  };

}
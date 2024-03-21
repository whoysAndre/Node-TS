import { NextFunction, Request, Response } from "express";
import { JwtAdapter } from "../../config";
import { UserModel } from "../../data";
import { UserEntity } from "../../domain";



export class AuthMiddlware{

  //TODO: Creación del middleware
  static async validateJWT(req:Request,res:Response,next:NextFunction){

    //PRIMERO --> Tomamos nuestro token de nuestro Headers
    const authorization = req.header('Authorization');

    //VALIDACION
    if(!authorization) return res.status(404).json({error:'Not Token provider'});

    //Cortamos el token
    const token = authorization.split(' ').at(1) || '';

    try {

      //Validamos el token
      const payload = await JwtAdapter.validateToken<{id:string}>(token);
      if ( !payload ) return res.status(401).json({ error: 'Invalid token' });

      const user = await UserModel.findById(payload.id);
      if ( !user ) return res.status(401).json({ error: 'Invalid token - user' });

      //Colocamos el usuario se puede hacer (header-request,cookies,etc)
      req.body.user = UserEntity.fromObject(user);


      next();

    } catch (error) {
      
      console.log(error);
      res.status(500).json({erro: 'Internal server error'});

    }




  };



};
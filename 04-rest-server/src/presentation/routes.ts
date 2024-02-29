import { Router } from "express";
import { TodoRoutes } from "./todos/routes";




export class AppRoutes {

  // ? We create a static method routes
  static get routes(): Router{

    // ? We intance routes from express
    const router = Router();


    /*
      En este nivel tenemos el endpoint base de /api/todos
      lo cual administrara nuestras rutas por aparte para que no crezca
      nuestro route principal
    */
    router.use('/api/todos', TodoRoutes.routes);
    
      
    return router;

  };

};
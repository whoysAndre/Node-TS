import { Router } from "express";
import { UserController } from "../controller/auth.controller";


export class AppRoutes{

  static get routes(): Router{

    const router = Router();
    const userController = new UserController();

    //Routing
    router.get('/all',userController.getUsers);
    router.get('/:id',userController.getUser);
    router.post('/create',userController.createUser);
    router.put('/update/:id',userController.updateUser);
    router.delete('/delete/:id',userController.deleteUser);
    

    return router;
  }


}
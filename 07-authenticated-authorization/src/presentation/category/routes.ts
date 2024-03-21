import { Router } from 'express';
import { CategoryController } from './controller';
import { AuthMiddlware } from '../middlewares/auth.middleware';





export class CategoryRoutes {


  static get routes(): Router {

    const router = Router();
    const categoryController = new CategoryController(); 
    
    // Definir las rutas
    router.get('/',categoryController.getCategories);
    router.post('/',[AuthMiddlware.validateJWT],categoryController.createCategory);

    return router;
  }


}


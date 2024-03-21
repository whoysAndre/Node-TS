import { Request, Response } from "express";
import { CustomError } from "../../domain";
import { CreateCategoryDto } from "../../domain/dtos";


export class CategoryController {

  constructor() { };

  private handleError = (error: unknown, res: Response) => {
    if (error instanceof CustomError) {
      return res.status(error.statusCode).json({ error: error.message });
    }

    console.log(`${error}`);
    return res.status(500).json({ error: 'Internal server error' })
  };


  public createCategory = async(req: Request,res: Response)=>{
    const [error,createCategoryDto] = CreateCategoryDto.create(req.body);
    if ( error ) return res.status( 400 ).json( { error } );
    
    res.json(createCategoryDto);
    

  };

  public getCategories = async(req: Request,res: Response)=>{
      
  
  };


};
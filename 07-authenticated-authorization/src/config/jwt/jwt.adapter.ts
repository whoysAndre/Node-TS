import jwt from "jsonwebtoken";
import { envs } from "../en-var/envs";

//JWT SEED
const JWT_SEED = envs.JWT_SEED;


//Creamos nuestro obj
export const jwtAdapter = {

  generateToken: async(payload:any, duration:string = '2h')=>{

    return new Promise((resolve)=>{

      jwt.sign(payload,JWT_SEED,{expiresIn:duration},(error,token)=>{

        if(error) return resolve(null);

        resolve(token);
      });


    });

  },
  validateToken: (token:string)=>{

    //TODO: Pending
    

  },

};





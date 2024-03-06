import { Request, Response } from "express";
import { RegisterUserDto } from "../../domain/dtos/auth/register-user.dto";
import { AuthService } from '../services/auth.service';
import { CustomError } from "../../domain/errors/custom.errors";
import { LoginUserDto } from "../../domain/dtos/auth/login-user.dto";




export class AuthController {

  //DI  
  constructor(
    public readonly authService: AuthService
  ) { }

  private handleError = (error: unknown, res: Response) => {
    if (error instanceof CustomError) {
      return res.status(error.statusCode).json({ error: error.message });
    }

    console.log(`${error}`);
    return res.status(500).json({ error: 'Internal server error' })
  }


  public register = (req: Request, res: Response) => {

    const [error, registerUserDto] = RegisterUserDto.create(req.body);

    if (error) return res.status(400).json({ error });

    this.authService.registerUser(registerUserDto!)
      .then((user) => res.json(user))
      .catch(error => this.handleError(error, res));

  };

  public login = (req: Request, res: Response) => {
    const [error, loginUserDto] = LoginUserDto.create(req.body);
    if (error) return res.status(400).json({ error })

    this.authService.loginUser(loginUserDto!)
      .then((user) => res.json(user))
      .catch(error => this.handleError(error, res));
  };

  public emailValidate = (req: Request, res: Response) => {

    res.json({ message: 'email validate' });
  };

};
import { bcryptAdapter, jwtAdapter } from '../../config';
import { UserModel } from '../../data';
import { RegisterUserDto } from '../../domain/dtos/auth/register-user.dto';
import { UserEntity } from '../../domain/entities/user.entity';
import { CustomError } from '../../domain/errors/custom.errors';
import { LoginUserDto } from '../../domain/dtos/auth/login-user.dto';

export class AuthService {

  public async registerUser(registerUserDto: RegisterUserDto) {

    const existUser = await UserModel.findOne({ email: registerUserDto.email });

    if (existUser) throw CustomError.badRequest('Email already exist');

    try {
      const user = new UserModel(registerUserDto);
      user.password = bcryptAdapter.hash(registerUserDto.password);

      await user.save();

      const { password, ...restUser } = UserEntity.fromObject(user);

      //TODO:GENERATE TOKEN
      const token = await jwtAdapter.generateToken({email:user.email});
      
      if(!token) throw CustomError.internalServer('Error while creating token');

      return {
        user: restUser,
        token: token
      }

    } catch (error) {
      throw CustomError.internalServer(`${error}`);
    }
  };

  public async loginUser(loginUserDto:LoginUserDto){

    const user = await UserModel.findOne({ email: loginUserDto.email });
    if (!user) throw CustomError.badRequest('Email not exist');

    const isMatch = bcryptAdapter.compare(loginUserDto.password,user.password);

    if(!isMatch) throw CustomError.badRequest('Password is not valid');

    const { password, ...userEntity } = UserEntity.fromObject(user);

    //TODO:GENERATE TOKEN
    const token = await jwtAdapter.generateToken({id:user.id});
    if(!token) throw CustomError.internalServer('Error while creating token');

    return {
      user: userEntity,
      token: token,
    }

  };




};
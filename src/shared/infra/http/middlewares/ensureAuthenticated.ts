import { NextFunction, Request, Response } from 'express';
import { verify } from "jsonwebtoken";
import { UsersRepositories } from '@modules/accounts/infra/typeorm/repositories/UsersRepositories';
import { AppError } from '@shared/errors/AppError';
import auth from '@config/auth';


// interface IPayload {
//     sub: string;
// }

// export async function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {

//     const authHeader = request.headers.authorization;

//     if (!authHeader) {
//         throw new AppError("Token missing!", 401);
//     }
//     //[0] = Bearer
//     //[1] = Token
//     const [, token] = authHeader.split(" ");

//     try {
//         const { sub: user_id } = verify(token, "c432REQFD$231") as IPayload;
//         const usersRepositories = new UsersRepositories();
//         const user = usersRepositories.findById(user_id);
//         if (!user) {
//             throw new AppError("User does not exists!", 401);
//         }

//         request.user = {
//             id: user_id,
//         }
//         next();
//     } catch {
//         throw new AppError("Invalid token", 401);
//     }

// }
interface IPayload {
    sub: string;
  }
  
  export async function ensureAuthenticated(
    request: Request,
    response: Response,
    next: NextFunction
  ) {
    const authHeader = request.headers.authorization;
  
    if (!authHeader) {
      throw new AppError("Token missing", 401);
    }
  
    const [, token] = authHeader.split(" ");
  
    try {
      const { sub: user_id } = verify(token, auth.secret_token) as IPayload;
  
      request.user = {
        id: user_id,
      };
  
      next();
    } catch {
      throw new AppError("Invalid token!", 401);
    }
  }
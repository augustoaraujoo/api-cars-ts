import { NextFunction, Request, Response } from 'express';
import { verify } from "jsonwebtoken";
import { UsersRepositories } from '../modules/accounts/repositories/implementations/UsersRepositories';


interface IPayload {
    sub: string;
}

export async function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {

    const authHeader = request.headers.authorization;

    if (!authHeader) {
        throw new Error("Token missing!");
    }
    //[0] = Bearer
    //[1] = Token
    const [, token] = authHeader.split(" ");

    try {
        const { sub: user_id } = verify(token, "c43aCG9X#d24op?F09") as IPayload;
        const usersRepositories = new UsersRepositories();
        const user = usersRepositories.findById(user_id);
        if (!user) {
            throw new Error("User does not exists!");
        }
        next();
    } catch {
        throw new Error("Invalid token");
    }

}
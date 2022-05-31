import { NextFunction, Response, Request } from 'express';
import { UsersRepositories } from '@modules/accounts/infra/typeorm/repositories/UsersRepositories';
import { AppError } from '../../../errors/AppError';
export async function ensureAdmin(
    request: Request,
    response: Response,
    next: NextFunction
) {
    const { id } = request.user;
    const usersRepository = new UsersRepositories();
    const user = await usersRepository.findById(id);
    if (!user.isAdmin) {
        throw new AppError("User isn't admin", 400);
    }

    return next();


}
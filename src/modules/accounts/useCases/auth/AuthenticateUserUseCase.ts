import { inject } from "tsyringe";
import { UsersRepositories } from "@modules/accounts/repositories/implementations/UsersRepositories";
import { IUsersRepositories } from "@modules/accounts/repositories/IUsersRepositories";
import { compare } from 'bcrypt';
import { sign } from "jsonwebtoken"
import { AppError } from '@errors/AppError';

interface IRequest {
    email: string;
    password: string;
}
interface IResponse {
    user: {
        name: string,
        email: string
    };
    token: string
}
class AuthenticateUserUseCase {

    constructor(@inject(UsersRepositories) private usersRepositories: IUsersRepositories) { }

    async execute({ email, password }: IRequest): Promise<IResponse> {
        const user = await this.usersRepositories.findByEmail(email);

        if (!user) {
            throw new AppError("Email or password incorrect!",401);
        }

        const passwordMatch = await compare(password, user.password);

        if (!passwordMatch) {
            throw new AppError("Erro password incorrect!",401);
        }

        const token = sign({}, "c43aCG9X#d24op?F09", {
            subject: user.id,
            expiresIn: "1d"
        });

        const tokenReturn: IResponse = {
            token,
            user: {
                name: user.name,
                email: user.email
            }
        }

        return tokenReturn

    }
}

export { AuthenticateUserUseCase }
import { inject } from "tsyringe";
import { UsersRepositories } from "../../repositories/implementations/UsersRepositories";
import { IUsersRepositories } from "../../repositories/IUsersRepositories";
import { compare } from 'bcrypt';
import { sign } from "jsonwebtoken"

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
            throw new Error("Email or password incorrect!");
        }

        const passwordMatch = await compare(password, user.password);

        if (!passwordMatch) {
            throw new Error("Erro password incorrect!");
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
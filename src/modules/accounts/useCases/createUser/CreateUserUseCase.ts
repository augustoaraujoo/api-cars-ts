import { inject, injectable } from 'tsyringe';
import { hash } from 'bcrypt';
import { ICreateUserDTO } from '../../dtos/ICreateUserDTO';
import { UsersRepositories } from '../../repositories/implementations/UsersRepositories';
import { IUsersRepositories } from '../../repositories/IUsersRepositories';
import { AppError } from '../../../../errors/AppError';

@injectable()
class CreateUserUseCase {

    constructor(@inject(UsersRepositories) private usersRepository: IUsersRepositories) { }

    async execute({ name, email, password, driver_license }: ICreateUserDTO): Promise<void> {

        const userAlreadyExists = await this.usersRepository.findByEmail(email);
        if (userAlreadyExists) {
            throw new AppError("User already exists",401);
        }
        
        const passwordHash = await hash(password, 8);
        await this.usersRepository.create({ name, email, password: passwordHash, driver_license });
    }
}
export { CreateUserUseCase }
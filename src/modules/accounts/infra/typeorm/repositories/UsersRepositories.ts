import { ICreateUserDTO } from "@modules/accounts/dtos/ICreateUserDTO";
import { IUsersRepositories } from "@modules/accounts/repositories/IUsersRepositories";
import { Repository, getRepository } from 'typeorm';
import { User } from "../entities/User";

class UsersRepositories implements IUsersRepositories {

    private repository: Repository<User>
    constructor() {
        this.repository = getRepository(User);
    }
    async findById(id: string): Promise<User> {
        const user = await this.repository.findOne(id)
        return user
    }
    async findByEmail(email: string): Promise<User> {
        const user = await this.repository.findOne({ email });
        return user
    }
    async create({
        name,
        email,
        driver_license,
        password,
        avatar,
        id
    }: ICreateUserDTO): Promise<void> {
        const user = this.repository.create({
            name,
            email,
            driver_license,
            password,
            avatar,
            id
        });
        await this.repository.save(user);
    }

}
export { UsersRepositories }
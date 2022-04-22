import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { IUsersRepositories } from "../IUsersRepositories";
import { Repository, getRepository } from 'typeorm';
import { User } from "../../entities/User";

class UsersRepositories implements IUsersRepositories {

    private repository: Repository<User>
    constructor() {
        this.repository = getRepository(User);
    }
    async findByEmail(email: string): Promise<User> {
        const user = await this.repository.findOne({email});
        return user
    }
    async create({
        name,
        email,
        driver_license,
        password
    }: ICreateUserDTO): Promise<void> {
        const user = this.repository.create({
            name,
            email,
            driver_license,
            password,
        });
        await this.repository.save(user);
    }

}
export { UsersRepositories }
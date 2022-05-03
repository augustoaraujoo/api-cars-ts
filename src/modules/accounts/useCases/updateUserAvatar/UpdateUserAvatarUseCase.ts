import { inject, injectable } from "tsyringe";
import { UsersRepositories } from "@modules/accounts/repositories/implementations/UsersRepositories";
import { IUsersRepositories } from "@modules/accounts/repositories/IUsersRepositories";
import { deleteFile } from "@utils/file"
interface IRequest {
    user_id: string;
    avatar_file: string;
}
@injectable()
class UpdateUserAvatarUseCase {
    constructor(@inject(UsersRepositories) private usersRepository: IUsersRepositories) { };

    async execute({ user_id, avatar_file }: IRequest) {
        const user = await this.usersRepository.findById(user_id);

        if (user.avatar) {
            await deleteFile(`./tmp/avatar${user.avatar}`);
        }

        user.avatar = avatar_file;

        await this.usersRepository.create(user);

    }
}
export { UpdateUserAvatarUseCase }
import { injectable, inject } from 'tsyringe';
import { ISpecificationsRepository } from "@modules/cars/repositories/ISpecificationsRepository";
import { AppError } from '@shared/errors/AppError';
import { SpecificationsRepository } from '@modules/cars/infra/typeorm/repositories/SpecificationsRepository';

interface IRequest {
    name: string,
    description: string;

}

@injectable()
class CreateSpecificationUseCase {
    constructor(@inject(SpecificationsRepository) private specificationsRepository: ISpecificationsRepository) { }
    async execute({ name, description }: IRequest): Promise<void> {

        const specificationsAlreadyExists = await this.specificationsRepository.findByName(name)
        if (specificationsAlreadyExists) {
            throw new AppError("error : specificationsAlreadyExists", 401);
        }

        this.specificationsRepository.create({
            name,
            description
        })
    }
}
export { CreateSpecificationUseCase }
import { ISpecificationsRepository } from "../../../repositories/ISpecificationsRepository";
import { injectable, inject } from 'tsyringe';
import { SpecificationsRepository } from "../../../repositories/implementations/SpecificationsRepository";

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
            throw new Error("error : specificationsAlreadyExists ");
        }
        
        this.specificationsRepository.create({
            name,
            description
        })
    }
}
export { CreateSpecificationUseCase }
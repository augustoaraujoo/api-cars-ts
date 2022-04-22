import { injectable, inject } from 'tsyringe';
import { Specification } from "../../../entities/Specification";
import { SpecificationsRepository } from '../../../repositories/implementations/SpecificationsRepository';
import { ISpecificationsRepository } from "../../../repositories/ISpecificationsRepository";

@injectable()
class ListSpecificationsUseCase {
    
    constructor(@inject(SpecificationsRepository) private iSpecificationsRepository: ISpecificationsRepository) { }

    async execute(): Promise<Specification[]> {
        const listAllSpecifications = await this.iSpecificationsRepository.list();

        return listAllSpecifications
    }
}
export { ListSpecificationsUseCase }
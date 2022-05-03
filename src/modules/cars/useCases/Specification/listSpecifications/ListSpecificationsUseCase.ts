import { injectable, inject } from 'tsyringe';
import { Specification } from "../../../entities/Specification";
import { ISpecificationsRepository } from "@modules/cars/repositories/ISpecificationsRepository";
import { SpecificationsRepository } from "@modules/cars/repositories/implementations/SpecificationsRepository";

@injectable()
class ListSpecificationsUseCase {
    
    constructor(@inject(SpecificationsRepository) private iSpecificationsRepository: ISpecificationsRepository) { }

    async execute(): Promise<Specification[]> {
        const listAllSpecifications = await this.iSpecificationsRepository.list();

        return listAllSpecifications
    }
}
export { ListSpecificationsUseCase }
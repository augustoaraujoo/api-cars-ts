import { Specification } from "../../../entities/Specification";
import { ISpecificationsRepository } from "../../../repositories/ISpecificationsRepository";

class ListSpecificationsUseCase {
    constructor(private iSpecificationsRepository: ISpecificationsRepository) { }

    execute(): Specification[] {

        const listAllSpecifications = this.iSpecificationsRepository.list();
        
        return listAllSpecifications
    }
}
export { ListSpecificationsUseCase }
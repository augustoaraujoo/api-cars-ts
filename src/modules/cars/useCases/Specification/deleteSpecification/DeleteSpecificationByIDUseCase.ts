import { ISpecificationsRepository } from "../../../repositories/ISpecificationsRepository";

interface IRequest {
    id: string
}

class DeleteSpecificationByIDUseCase {
    constructor(private specificationsRepository: ISpecificationsRepository) { }

    execute({ id }: IRequest) {
        this.specificationsRepository.deleteSpecificationByID(id);
    }
}
export { DeleteSpecificationByIDUseCase }
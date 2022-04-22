import { inject, injectable } from "tsyringe";
import { SpecificationsRepository } from "../../../repositories/implementations/SpecificationsRepository";
import { ISpecificationsRepository } from "../../../repositories/ISpecificationsRepository";

interface IRequest {
    id: string
}
@injectable()
class DeleteSpecificationByIDUseCase {
    constructor(@inject(SpecificationsRepository) private specificationsRepository: ISpecificationsRepository) { }

    execute({ id }: IRequest) {
        this.specificationsRepository.deleteSpecificationByID(id);
    }
}
export { DeleteSpecificationByIDUseCase }
import { inject, injectable } from "tsyringe";
import { ISpecificationsRepository } from "@modules/cars/repositories/ISpecificationsRepository";
import { SpecificationsRepository } from "@modules/cars/infra/typeorm/repositories/SpecificationsRepository";

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
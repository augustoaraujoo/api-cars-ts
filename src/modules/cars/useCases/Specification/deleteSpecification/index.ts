
import { DeleteSpecificationByIDUseCase } from "./DeleteSpecificationByIDUseCase";
import { DeleteSpecificationByIDController } from "./DeleteSpecificationByIDController";
import { SpecificationsRepository } from "../../../repositories/implementations/SpecificationsRepository";

const specificationsRepository = SpecificationsRepository.getInstance();
const deleteSpecificationByIDUseCase = new DeleteSpecificationByIDUseCase(specificationsRepository);
const deleteSpecificationByIDController = new DeleteSpecificationByIDController(deleteSpecificationByIDUseCase);

export { deleteSpecificationByIDController }

import { Router } from 'express';
import { ensureAuthenticated } from '@shared/infra/http/middlewares/ensureAuthenticated';
import { CreateSpecificationController } from '@modules/cars/useCases/Specification/createSpecification/CreateSpecificationController'
import { DeleteSpecificationByIDController } from '@modules/cars/useCases/Specification/deleteSpecification/DeleteSpecificationByIDController';
import { ListSpecificationsController } from '@modules/cars/useCases/Specification/listSpecifications/ListSpecificationsController';

const specificationsRouter = Router()

const createSpecificationController = new CreateSpecificationController();
const deleteSpecificationByIDController = new DeleteSpecificationByIDController();
const listSpecificationsController = new ListSpecificationsController();

specificationsRouter.use(ensureAuthenticated);

specificationsRouter.post("/", createSpecificationController.handle);
specificationsRouter.delete("/:id", deleteSpecificationByIDController.handle);
specificationsRouter.get("/", listSpecificationsController.handle);

export { specificationsRouter }
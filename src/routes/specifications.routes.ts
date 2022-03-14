import { Router } from 'express';

import { createSpecificationController } from '../modules/cars/useCases/Specification/createSpecification'
import { deleteSpecificationByIDController } from '../modules/cars/useCases/Specification/deleteSpecification';
import { listSpecificationsController } from '../modules/cars/useCases/Specification/listSpecifications';

const specificationsRouter = Router()

specificationsRouter.post("/", (request, response) => {
    return createSpecificationController.handle(request, response);
})
specificationsRouter.delete("/:id", (request, response) => {
    return deleteSpecificationByIDController.handle(request, response);
})
specificationsRouter.get("/", (request, response) => {
    return listSpecificationsController.handle(request, response);
})
export { specificationsRouter }
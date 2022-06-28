import { Request, Response, Router } from "express";
import { CreateCarController } from "@modules/cars/useCases/CreateCar/CreateCarController";
import { ensureAuthenticated } from '@shared/infra/http/middlewares/ensureAuthenticated';
import { ensureAdmin } from "../middlewares/ensureAdmin";
import { ListAvailableCarsController } from "@modules/cars/useCases/ListAvailableCars/ListAvailableCarsController";
import { CreateCarSpecificationController } from "@modules/cars/useCases/createCarSpecification/CreateCarSpecificationController";


const carsRouter = Router();
const createCarController = new CreateCarController();
const listAvailableCarsController = new ListAvailableCarsController();
const createCarSpecificationController = new CreateCarSpecificationController();

carsRouter.post("/",
    ensureAuthenticated,
    ensureAdmin,
    createCarController.handle
);

carsRouter.get("/available", listAvailableCarsController.handle);

carsRouter.post("/specifications/:id",createCarSpecificationController.handle);


export { carsRouter }
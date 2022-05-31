import { Request, Response, Router } from "express";
import { CreateCarController } from "@modules/cars/useCases/CreateCar/CreateCarController";
import { ensureAuthenticated } from '@shared/infra/http/middlewares/ensureAuthenticated';
import { ensureAdmin } from "../middlewares/ensureAdmin";
import { ListAvailableCarsController } from "@modules/cars/useCases/ListAvailableCars/listAvailableCarsController";

const carsRouter = Router();
const createCarController = new CreateCarController();
const listAvailableCarsController = new ListAvailableCarsController();

carsRouter.post("/",
    ensureAuthenticated,
    ensureAdmin,
    createCarController.handle
);

carsRouter.get("/available", listAvailableCarsController.handle);

export { carsRouter }
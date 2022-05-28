import { Request, Response, Router } from "express";
import { CreateCategoryController } from '@modules/cars/useCases/Category/createCategory/CreateCategoryController';

const carsRouter = Router();
const createCategoryController = new CreateCategoryController();
carsRouter.post("/", createCategoryController.handle);

carsRouter.get("/", (request: Request, response: Response)=> {
    return response.status(201).json("rota cars funcionando ❤️‍🔥")
})
export { carsRouter }
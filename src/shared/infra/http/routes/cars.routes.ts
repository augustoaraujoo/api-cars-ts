import { Request, Response, Router } from "express";
import { CreateCarController } from "@modules/cars/useCases/CreateCar/CreateCarController";
import { ensureAuthenticated } from '@shared/infra/http/middlewares/ensureAuthenticated';
import { ensureAdmin } from "../middlewares/ensureAdmin";
import { ListAvailableCarsController } from "@modules/cars/useCases/ListAvailableCars/ListAvailableCarsController";
import { CreateCarSpecificationController } from "@modules/cars/useCases/createCarSpecification/CreateCarSpecificationController";
import { UploadCarImageController } from "@modules/cars/uploadImage/UploadCarImageController";
import multer from 'multer';
import upload from "@config/upload";


const carsRouter = Router();
const createCarController = new CreateCarController();
const listAvailableCarsController = new ListAvailableCarsController();
const createCarSpecificationController = new CreateCarSpecificationController();
const uploadCarImageController = new UploadCarImageController();

// images upload

const uploadImage = multer(upload.upload("./tmp/cars"))
/* \    IMAGES UPLOAD */

carsRouter.post("/",
    // ensureAuthenticated,
    // ensureAdmin,
    createCarController.handle
);

carsRouter.get("/available", listAvailableCarsController.handle);

carsRouter.post("/specifications/:id",
    ensureAdmin,
    ensureAuthenticated,
    createCarSpecificationController.handle);

carsRouter.post("/images/:id",
    //ensureAdmin,
    //ensureAuthenticated, 
    uploadImage.array("images"),
    uploadCarImageController.handle)

export { carsRouter }
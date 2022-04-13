import { Router } from 'express';
import multer from 'multer';

import createCategoryController from '../modules/cars/useCases/Category/createCategory/index'
import { listCategoriesController } from '../modules/cars/useCases/Category/listCategories/index';
import { deleteCategoryController } from '../modules/cars/useCases/Category/deleteCategory';
import { listCategoryByIDController } from '../modules/cars/useCases/Category/listCategoryByID';
import { importCategoryController } from '../modules/cars/useCases/importCategory/index';

const categoriesRoutes = Router();

const upload = multer({
    dest: "./tmp"
});

// Receber a Requisição
// Chamar o Serviço
// retornar 
categoriesRoutes.post("/", (request, response) => {
    return createCategoryController().handle(request, response);
});

categoriesRoutes.get("/", (request, response) => {
    return listCategoriesController.handle(request, response);
});

categoriesRoutes.get("/:id", (request, response) => {
    return listCategoryByIDController.handle(request, response);
});

categoriesRoutes.delete("/:id", (request, response) => {
    return deleteCategoryController.handle(request, response);
})

categoriesRoutes.post("/import", upload.single("file"), (request, response) => {
    return importCategoryController.handle(request, response);
})
export { categoriesRoutes }
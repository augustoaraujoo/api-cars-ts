import { Router } from 'express';
import multer from 'multer';
import { CategoriesRepository } from '../modules/cars/repositories/implementations/CategoriesRepository';
import { createCategoryController } from '../modules/cars/useCases/createCategory/index'
import { listCategoriesController } from '../modules/cars/useCases/listCategories/index';
import { deleteCategoryController } from '../modules/cars/useCases/deleteCategory';
import { listCategoryByIDController } from '../modules/cars/useCases/listCategoryByID';

const categoriesRoutes = Router();

const upload = multer({
    dest: "./tmp"
});

// Receber a Requisição
// Chamar o Serviço
// retornar 
categoriesRoutes.post("/", (request, response) => {
    return createCategoryController.handle(request, response);
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
    const { file } = request;
    console.log(file);
    return response.send();
})
export { categoriesRoutes }
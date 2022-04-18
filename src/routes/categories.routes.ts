import { Router } from 'express';
import multer from 'multer';

import { CreateCategoryController } from '../modules/cars/useCases/Category/createCategory/CreateCategoryController';
import { ListCategoriesController } from '../modules/cars/useCases/Category/listCategories/ListCategoriesController';
import { DeleteCategoryController } from '../modules/cars/useCases/Category/deleteCategory/DeleteCategoryController';
import { ListCategoryByIDController } from '../modules/cars/useCases/Category/listCategoryByID/listCategoryByIDController';
import { ImportCategoryController } from '../modules/cars/useCases/importCategory/importCategoryController';

const categoriesRoutes = Router();

const upload = multer({
    dest: "./tmp"
});

// Receber a Requisição
// Chamar o Serviço
// retornar 
const createCategoryController = new CreateCategoryController();
const deleteCategoryController = new DeleteCategoryController();
const listCategoriesController = new ListCategoriesController();
const listCategoryByIDController = new ListCategoryByIDController();
const importCategoryController = new ImportCategoryController();

categoriesRoutes.post("/", createCategoryController.handle);
categoriesRoutes.get("/", listCategoriesController.handle);
categoriesRoutes.get("/:id", listCategoryByIDController.handle);
categoriesRoutes.delete("/:id", deleteCategoryController.handle);
categoriesRoutes.post("/import", upload.single("file"), importCategoryController.handle);

export { categoriesRoutes }
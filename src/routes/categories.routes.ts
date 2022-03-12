import { Router } from 'express';

import { CategoriesRepository } from '../modules/cars/repositories/implementations/CategoriesRepository';
import { createCategoryController } from '../modules/cars/useCases/createCategory/index'
import { listCategoriesController } from '../modules/cars/useCases/listCategories/index';
import { deleteCategoryController } from '../modules/cars/useCases/deleteCategory';

const categoriesRoutes = Router();
const categoriesRepository = CategoriesRepository.getInstance();

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
    const { id } = request.params;


    const existsCategoryID = categoriesRepository.listCategoryByID(id)
    if (!existsCategoryID) {
        return response.status(500).json('error: category[ID] not exists')
    }

    return response.status(201).json(existsCategoryID);

});

categoriesRoutes.delete("/:id", (request, response) => {
    return deleteCategoryController.handle(request, response);
})


export { categoriesRoutes }
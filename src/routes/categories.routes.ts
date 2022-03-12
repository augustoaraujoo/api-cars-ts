import { Router } from 'express';

import { CategoriesRepository } from '../modules/cars/repositories/implementations/CategoriesRepository';
import { DeleteCategoryByIDService } from '../modules/cars/services/DeleteCategoryByIDService';
import { createCategoryController } from '../modules/cars/useCases/createCategory/index'
import { listCategoriesController } from '../modules/cars/useCases/listCategories/index';

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

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
    const { id } = request.params;

    const deleteCategoryByID = new DeleteCategoryByIDService(categoriesRepository);
    deleteCategoryByID.execute({ id });

    return response.status(200).send();

})


export { categoriesRoutes }
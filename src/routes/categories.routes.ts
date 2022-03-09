import { Router } from 'express';

import { CategoriesRepository } from '../repositories/CategoriesRepository';
import { CreateCategoryService } from '../services/CreateCategoryService';
import { DeleteCategoryByIDService } from '../services/DeleteCategoryByIDService';


const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();
// Receber a Requisição
// Chamar o Serviço
// retornar 
categoriesRoutes.post("/", (request, response) => {
    const { name, description } = request.body;

    const createCategoryService = new CreateCategoryService(categoriesRepository);
    createCategoryService.execute({ name, description });

    return response.status(201).json(createCategoryService);

});

categoriesRoutes.get("/", (request, response) => {
    const all = categoriesRepository.list();
    return response.json(all);

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
    deleteCategoryByID.execute({id});
    return response.status(200).send();

})


export { categoriesRoutes }
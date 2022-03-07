import { Router } from 'express';
import { CategoriesRepository } from '../repositories/CategoriesRepository';

const categoriesRoutes = Router();

const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post("/", (request, response) => {
    const { name, description } = request.body;
    const categoryAlreadyExists = categoriesRepository.findByName(name);
    if (categoryAlreadyExists) {
        return response.status(404).json("error");
    }
    categoriesRepository.create({ name, description });
    return response.status(201).send();

})

categoriesRoutes.get("/", (request, response) => {
    const all = categoriesRepository.list();
    return response.json(all);

})
categoriesRoutes.get("/:id", (request, response) => {
    const { id } = request.params;
    const existsID = categoriesRepository.listCategoryByID(id)
    if (existsID) {
        return response.status(200).json(existsID)
    }
})
export { categoriesRoutes }
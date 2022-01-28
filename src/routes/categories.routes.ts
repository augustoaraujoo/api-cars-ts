import { Router } from "express";
import { CategoriesRepository } from "../repositories/CategoriesRepository";

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post("/", (request, response) => {
    const { name, description } = request.body;

    const categoryAlreadyExists = categoriesRepository.findByName(name);
    if (categoryAlreadyExists) {
        return response.status(404).json({ error: 'category already exists' })
    }

    categoriesRepository.create({ name, description })
    return response.status(201).send()
})

categoriesRoutes.get("/", (request, response) => {
    const all = categoriesRepository.list()
    return response.json(all)
})
categoriesRoutes.get("/:id", (request, response) => {
    const { id } = request.params;
    const selectbyId = categoriesRepository.selectById(id)
    return response.status(201).json(selectbyId)
})
export { categoriesRoutes }
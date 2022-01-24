import { Router } from "express";
import { Category } from "../model/Category";

const categoriesRoutes = Router()

const categoryes: Category[] = [];

categoriesRoutes.post("/", (request, response) => {
    const { name, description } = request.body

    const category = new Category()

    Object.assign(category, {
        name,
        description,
        created_at: new Date()
    })

    categoryes.push(category)

    return response.status(201).json({ categoryes })
})

export { categoriesRoutes }
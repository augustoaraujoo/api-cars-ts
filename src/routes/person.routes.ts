import { Router } from "express";
import { PersonsRepository } from "../repositories/PersonsRepository";

const personRoutes = Router()
const person = new PersonsRepository();

personRoutes.post("/", (request, response) => {
    const { name } = request.body;

    const personAlreadyExists = person.findByName(name);

    if (personAlreadyExists) {
        return response.status(404).json({ error: 'person already exists' })
    }

    person.create({ name })
    return response.status(201).send()

})

personRoutes.get("/", (request, response) => {
    const listPersonAll = person.list()
    return response.json(listPersonAll)
})

export { personRoutes }
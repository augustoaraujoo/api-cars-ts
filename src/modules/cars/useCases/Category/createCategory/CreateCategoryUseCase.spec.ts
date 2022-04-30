import { CategoriesRepositoryInMemory } from "../../../repositories/in-memory/CategoriesRepositoryInMemory";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase"
import { AppError } from '../../../../../errors/AppError';

let createCategoryUseCase: CreateCategoryUseCase;
let categoriesRepositoryInMemory: CategoriesRepositoryInMemory;

describe("Create category", () => {
    //antes de executar
    beforeEach(() => {
        categoriesRepositoryInMemory = new CategoriesRepositoryInMemory();
        createCategoryUseCase = new CreateCategoryUseCase(categoriesRepositoryInMemory)
    })

    it("should be able to create a new category", async () => {
        //objeto para user como base no teste
        const category = {
            name: "name test",
            description: "description teste"
        }
        //esperando meu useCase executar a função para criar um novo repositório com o objeto base 
        await createCategoryUseCase.execute({
            name: category.name,
            description: category.description
        })
        // se a categoria foi criada , irá listar seu nome
        const categoryCreated = await categoriesRepositoryInMemory.findByName(category.name)

        console.log(categoryCreated);
        //verificando se minha categoria tem a propriedade id
        expect(categoryCreated).toHaveProperty("id");
    })


    it("should not be able to create a new category with name exists", async () => {
        //caso a estrutura dar erro
        expect(async () => {
            const category = {
                name: "name test",
                description: "description teste"
            }

            await createCategoryUseCase.execute({
                name: category.name,
                description: category.description
            })

            await createCategoryUseCase.execute({
                name: category.name,
                description: category.description
            })
            // passando o erro 
        }).rejects.toBeInstanceOf(AppError);
    })
})
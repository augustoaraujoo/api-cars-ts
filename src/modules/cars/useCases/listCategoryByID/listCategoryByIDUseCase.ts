import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";
interface IRequest {
    id: string
}
class ListCategoryByIDUseCase {

    constructor(private categoriesRepository: ICategoriesRepository) { }

    execute({ id }: IRequest) {
        return this.categoriesRepository.listCategoryByID(id)
    }
}

export { ListCategoryByIDUseCase }
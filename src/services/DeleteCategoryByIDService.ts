import { ICategoriesRepository } from "../repositories/ICategoriesRepository";

interface IRequest {
    id: string;
}
class DeleteCategoryByIDService {
    constructor(private categoriesRepository: ICategoriesRepository) { }

    execute({ id }: IRequest) {
        return this.categoriesRepository.deleteCategoryByID(id)
    }
}

export { DeleteCategoryByIDService }
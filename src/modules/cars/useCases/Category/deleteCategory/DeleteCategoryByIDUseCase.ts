import { ICategoriesRepository } from "../../../repositories/ICategoriesRepository";

interface IRequest {
    id: string;
}
class DeleteCategoryByIDUseCase {
    constructor(private categoriesRepository: ICategoriesRepository) { }

    execute({ id }: IRequest) {
        this.categoriesRepository.deleteCategoryByID(id)
    }
}

export { DeleteCategoryByIDUseCase }
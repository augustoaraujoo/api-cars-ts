import { ICategoriesRepository } from "../../../repositories/ICategoriesRepository";
import { inject, injectable } from 'tsyringe';
import { CategoriesRepository } from "../../../repositories/implementations/CategoriesRepository";

interface IRequest {
    id: string
}

@injectable()
class ListCategoryByIDUseCase {

    constructor(@inject(CategoriesRepository) private categoriesRepository: ICategoriesRepository) { }

    execute({ id }: IRequest) {
        return this.categoriesRepository.listCategoryByID(id)
    }
}

export { ListCategoryByIDUseCase }
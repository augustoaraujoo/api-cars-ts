import { ICategoriesRepository } from "@modules/cars/repositories/ICategoriesRepository";
import { CategoriesRepository } from "@modules/cars/infra/typeorm/repositories/CategoriesRepository";
import { inject, injectable } from 'tsyringe';

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
import { inject, injectable } from "tsyringe";
import { ICategoriesRepository } from "../../../repositories/ICategoriesRepository";
import { CategoriesRepository } from "../../../repositories/implementations/CategoriesRepository";

interface IRequest {
    id: string;
}
@injectable()
class DeleteCategoryByIDUseCase {
    constructor(@inject(CategoriesRepository) private categoriesRepository: ICategoriesRepository ) { }

    execute({ id }: IRequest) {
        this.categoriesRepository.deleteCategoryByID(id)
    }
}

export { DeleteCategoryByIDUseCase }
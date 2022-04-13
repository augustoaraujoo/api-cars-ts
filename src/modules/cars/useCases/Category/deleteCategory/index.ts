import { DeleteCategoryController } from './DeleteCategoryController';
import { DeleteCategoryByIDUseCase } from './DeleteCategoryByIDUseCase';
import { CategoriesRepository } from '../../../repositories/implementations/CategoriesRepository'

const categoriesRepository = null;
const deleteCategoryByIDUseCase = new DeleteCategoryByIDUseCase(categoriesRepository);
const deleteCategoryController = new DeleteCategoryController(deleteCategoryByIDUseCase);

export { deleteCategoryController }
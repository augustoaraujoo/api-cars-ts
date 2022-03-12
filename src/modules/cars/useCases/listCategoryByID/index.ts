import { ListCategoryByIDController } from "./listCategoryByIDController";
import { ListCategoryByIDUseCase } from './listCategoryByIDUseCase';
import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";

const categoriesRepository = CategoriesRepository.getInstance();
const listCategoryByIDUseCase = new ListCategoryByIDUseCase(categoriesRepository);
const listCategoryByIDController = new ListCategoryByIDController(listCategoryByIDUseCase);
export { listCategoryByIDController };
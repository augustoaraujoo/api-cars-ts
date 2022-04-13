import { ListCategoryByIDController } from "./listCategoryByIDController";
import { ListCategoryByIDUseCase } from './listCategoryByIDUseCase';
import { CategoriesRepository } from "../../../repositories/implementations/CategoriesRepository";

const categoriesRepository =  null;
const listCategoryByIDUseCase = new ListCategoryByIDUseCase(categoriesRepository);
const listCategoryByIDController = new ListCategoryByIDController(listCategoryByIDUseCase);
export { listCategoryByIDController };
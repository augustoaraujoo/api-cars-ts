/* SubTipos : CategoriesRepository & PostgresCategoriesRepository */

import { Category } from '../model/Category';
interface ICategoryDTO {
    name: string;
    description: string;
}
interface ICategoriesRepository {
    list(): Category[];
    findByName(name: string): Category;
    create({name, description}: ICategoryDTO): void;

    listCategoryByID(id: string): Category;
    deleteCategoryByID(id: string): void;

}

export { ICategoriesRepository,ICategoryDTO }
/* SubTipos : CategoriesRepository & PostgresCategoriesRepository */

import { Category } from '../entities/Category';
interface ICategoryDTO {
    name: string;
    description: string;
}
interface ICategoriesRepository {
    create({ name, description }: ICategoryDTO): Promise<void>;
    list(): Promise<Category[]>;
    findByName(name: string): Promise<Category>;

    listCategoryByID(id: string): Promise<Category>;
    deleteCategoryByID(id: string): Promise<void>;

}

export { ICategoriesRepository, ICategoryDTO }
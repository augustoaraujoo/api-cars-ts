/* SubTipos : CategoriesRepository & PostgresCategoriesRepository */

import { ICategoryDTO } from '../carsDtos/ICategoryDTO';
import { Category } from '../infra/typeorm/entities/Category';

interface ICategoriesRepository {
    create({ name, description }: ICategoryDTO): Promise<void>;
    list(): Promise<Category[]>;
    findByName(name: string): Promise<Category>;

    listCategoryByID(id: string): Promise<Category>;
    deleteCategoryByID(id: string): Promise<void>;

}

export { ICategoriesRepository }
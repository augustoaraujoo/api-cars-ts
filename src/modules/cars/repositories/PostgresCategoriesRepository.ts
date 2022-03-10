import { Category } from '../model/Category';
import { ICategoriesRepository,ICategoryDTO } from './ICategoriesRepository';


class PostgresCategoriesRepository implements ICategoriesRepository {

    list(): Category[] {
        throw new Error('Method not implemented.');
    }
    findByName(name: string): Category {
        console.log(name);
        return 
    }
    create({name , description}:ICategoryDTO ): void {
        console.log(name, description);
    }
    listCategoryByID(id: string): Category {
        console.log(id);
        throw new Error('Method not implemented.');
    }
    deleteCategoryByID(id: string): void {
        console.log(id);
        throw new Error('Method not implemented.');
    }

}

export { PostgresCategoriesRepository }
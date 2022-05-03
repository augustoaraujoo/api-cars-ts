import { ICategoryDTO } from "../../carsDtos/ICategoryDTO";
import { Category } from "../../infra/typeorm/entities/Category";
import { ICategoriesRepository } from "../ICategoriesRepository";

class CategoriesRepositoryInMemory implements ICategoriesRepository {
    categories: Category[] = [];

    async create({ name, description }: ICategoryDTO): Promise<void> {
        const category = new Category();

        Object.assign(category, {
            name, description
        });
        this.categories.push(category);

    }
    async list(): Promise<Category[]> {
        const list = this.categories
        return list
    }
    async findByName(name: string): Promise<Category> {
        const findByName = this.categories.find((categories) => categories.name === name);
        return findByName
    }
    async listCategoryByID(id: string): Promise<Category> {
        const listCategoryByID = this.categories.find((categories) => categories.id === id);
        return listCategoryByID
    }
    async deleteCategoryByID(id: string): Promise<void> {
        const deleteCategory = this.categories.find(category => category.id === id);
        this.categories.splice(this.categories.indexOf(deleteCategory), 1);
    }

}

export { CategoriesRepositoryInMemory }
import { Category } from "../model/Category";
import { ICategoriesRepository, ICategoryDTO } from "./ICategoriesRepository";

class CategoriesRepository implements ICategoriesRepository {

    private categories: Category[];

    constructor() {
        this.categories = [];
    }

    create({ name, description }: ICategoryDTO): void {
        const category = new Category();

        Object.assign(category, {
            name,
            description,
            created_at: new Date(),
        })

        this.categories.push(category);
    }

    list(): Category[] {
        return this.categories;
    }

    findByName(name: string) {
        const category = this.categories.find(category => category.name === name);
        return category;
    }

    listCategoryByID(id: string) {
        const existsID = this.categories.find(category => category.id === id)
        return existsID;
    }
    deleteCategoryByID(id: string) {
        const existsCategory = this.categories.find(category => category.id === id)
        const removeCategoryByID = this.categories.splice(this.categories.indexOf(existsCategory), 1)
        console.log(removeCategoryByID);

        return removeCategoryByID

    }

}

export { CategoriesRepository };
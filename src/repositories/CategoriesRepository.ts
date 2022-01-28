import { Category } from "../model/Category";

interface ICreateCategoryDTO {
    id?: string,
    name: string,
    description: string
}

class CategoriesRepository {
    private categories: Category[];

    constructor() {
        this.categories = [];
    }

    create({ description, name }: ICreateCategoryDTO): void {
        const category = new Category();

        Object.assign(category, {
            name,
            description,
            created_at: new Date()
        })

        this.categories.push(category);
    }

    list(): Category[] {
        return this.categories;
    }
    findByName(name: string): Category {
        const category = this.categories.find((category) => category.name === name);
        return category
    }
    selectById(id: string): Category {
        const selectById = this.categories.find((category) => category.id === id)
        return selectById
    }
}
export { CategoriesRepository }

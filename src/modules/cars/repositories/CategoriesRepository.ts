import { Category } from "../model/Category";
import { ICategoriesRepository, ICategoryDTO } from "./ICategoriesRepository";
//singleton
class CategoriesRepository implements ICategoriesRepository {

    private categories: Category[];

    private static INSTANCE: CategoriesRepository;

    private constructor() {
        this.categories = [];
    }
    public static getInstance(): CategoriesRepository {
        if (!CategoriesRepository.INSTANCE) {
            CategoriesRepository.INSTANCE = new CategoriesRepository();
        }
        return CategoriesRepository.INSTANCE;
    };

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
        const existsID = this.categories.find(category => category.id === id);
        return existsID;
    }
    deleteCategoryByID(id: string) {
        const existsCategory = this.categories.find(category => category.id === id);

        const removeCategoryByID = this.categories.splice(this.categories.indexOf(existsCategory), 1);

        const haveCategoryForDeleting = this.categories.filter(category => category.id.length <= 0);

        const idDontExistsInCategory = this.categories.find(category => category.id !== id);

        if (haveCategoryForDeleting || idDontExistsInCategory) {
            console.log(this.categories);
            return console.error("error");
        };

        return removeCategoryByID;
    }

}

export { CategoriesRepository };
import { Category } from "../../entities/Category";
import { ICategoriesRepository, ICategoryDTO } from "../ICategoriesRepository";
import { getRepository, Repository } from "typeorm";

class CategoriesRepository implements ICategoriesRepository {


    private repository: Repository<Category>;

    constructor() {
        this.repository = getRepository(Category);
    }

    async create({ name, description }: ICategoryDTO): Promise<void> {
        const category = this.repository.create({
            description,
            name,
        })
        await this.repository.save(category);
    }

    async list(): Promise<Category[]> {
        const categories = await this.repository.find();
        return categories;
    }

    async findByName(name: string): Promise<Category> {
        const category = await this.repository.findOne({ name });
        return category;
    }

    async listCategoryByID(id: string): Promise<Category> {
        const list = await this.repository.findOne({ id });
        return list;
    }
    async deleteCategoryByID(id: string): Promise<void> {
        await this.repository.delete({ id });
    }
}

export { CategoriesRepository };

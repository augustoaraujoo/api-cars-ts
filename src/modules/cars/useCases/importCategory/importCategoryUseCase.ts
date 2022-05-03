import fs from 'fs';
import { ICategoriesRepository } from "@modules/cars/repositories/ICategoriesRepository";
import { CategoriesRepository } from "@modules/cars/repositories/implementations/CategoriesRepository";
import { parse } from 'csv-parse';
import { inject, injectable } from 'tsyringe';


interface IImportCategory {
    name: string;
    description: string;
}

@injectable()
class ImportCategoryUseCase {
    constructor(@inject(CategoriesRepository) private categoriesRepository: ICategoriesRepository) { }

    loadCategories(file: Express.Multer.File): Promise<IImportCategory[]> {
        return new Promise((resolve, reject) => {
            const categories: IImportCategory[] = [];

            const stream = fs.createReadStream(file.path)
            const parseFile = parse();
            stream.pipe(parseFile);
            
            parseFile.on("data", async (line) => {
                const [name, description] = line;
                categories.push({ name, description });
            })
                //retorno esperando a finalização do parseFile
                .on("end", () => {
                    //removendo o arquivo.csv da pasta tmp 
                    fs.promises.unlink(file.path)
                    resolve(categories);
                })
                .on("error", (err) => {
                    reject(err);
                })
        })
    }
    async execute(file: Express.Multer.File): Promise<void> {
        const categories = await this.loadCategories(file);
        console.log(categories);
        
        categories.map(async (categories) => {
            const { name, description } = categories;

            const existsCategory = await this.categoriesRepository.findByName(name);

            if (!existsCategory) {
                await this.categoriesRepository.create({ name, description });
            }

        })
    }
}
export { ImportCategoryUseCase };
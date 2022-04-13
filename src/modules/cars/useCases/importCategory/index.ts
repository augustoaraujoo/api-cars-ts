import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";
import { ImportCategoryController } from "./importCategoryController";
import { ImportCategoryUseCase } from "./importCategoryUseCase";

// const categoriesRepository = CategoriesRepository.getInstance();
// const importCategoryUseCase = new ImportCategoryUseCase(categoriesRepository);
// const importCategoryController = new ImportCategoryController(importCategoryUseCase);

// export { importCategoryController }

const categoryRepository = null;

const importCategoryUseCase = new ImportCategoryUseCase(
    categoryRepository
);

const importCategoryController = new ImportCategoryController(
    importCategoryUseCase
);

export { importCategoryController };
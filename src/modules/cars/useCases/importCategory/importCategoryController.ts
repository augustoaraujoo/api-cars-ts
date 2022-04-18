import { Request, Response } from 'express';
import { ImportCategoryUseCase } from './importCategoryUseCase';
import { container } from 'tsyringe';

class ImportCategoryController {

    async handle(request: Request, response: Response): Promise<Response> {
        const { file } = request;
        console.log("impor");
        
        const importCategoryUseCase = container.resolve(ImportCategoryUseCase);
        await importCategoryUseCase.execute(file)
        return response.status(201).json(file);
    }
}

export { ImportCategoryController }
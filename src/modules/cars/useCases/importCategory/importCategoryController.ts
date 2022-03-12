import { Request, Response } from 'express';
import { ImportCategoryUseCase } from './importCategoryUseCase';
class ImportCategoryController {
    // Controller rota
    constructor(private importCategoryUseCase : ImportCategoryUseCase){}
    
    handle(request: Request, response: Response): Response {
        const { file } = request;
        this.importCategoryUseCase.execute(file)
        return response.status(201).json(file);
    }
}

export { ImportCategoryController }
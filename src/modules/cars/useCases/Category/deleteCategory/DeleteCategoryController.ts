import { Request, Response } from 'express';
import { DeleteCategoryByIDUseCase } from './DeleteCategoryByIDUseCase';

class DeleteCategoryController {
    constructor(private deleteCategoryByIDUseCase: DeleteCategoryByIDUseCase) { }

    handle(request: Request, response: Response) {
        const { id } = request.params;

        this.deleteCategoryByIDUseCase.execute({ id });

        return response.status(200).send();
    }
}
export { DeleteCategoryController }
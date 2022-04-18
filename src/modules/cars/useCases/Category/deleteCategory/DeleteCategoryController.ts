import { Request, Response } from 'express';
import { DeleteCategoryByIDUseCase } from './DeleteCategoryByIDUseCase';
import { container } from 'tsyringe';

class DeleteCategoryController {

    async handle(request: Request, response: Response) {
        const { id } = request.params;
        const deleteCategoryByIDUseCase = container.resolve(DeleteCategoryByIDUseCase);

        deleteCategoryByIDUseCase.execute({ id });
        return response.status(200).send();
    }
}
export { DeleteCategoryController }
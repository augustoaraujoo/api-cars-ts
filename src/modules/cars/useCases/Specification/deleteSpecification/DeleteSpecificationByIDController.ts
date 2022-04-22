import { Response, Request } from 'express';
import { DeleteSpecificationByIDUseCase } from './DeleteSpecificationByIDUseCase';
import { container } from 'tsyringe';

class DeleteSpecificationByIDController {

    async handle(request: Request, response: Response) {
        const { id } = request.params;
        const deleteCategoryByIDUseCase = container.resolve(DeleteSpecificationByIDUseCase);
        deleteCategoryByIDUseCase.execute({ id });

        return response.status(200).send();
    }
}
export { DeleteSpecificationByIDController }
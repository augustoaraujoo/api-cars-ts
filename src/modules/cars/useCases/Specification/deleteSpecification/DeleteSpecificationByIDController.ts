import { Response, Request } from 'express';
import { DeleteSpecificationByIDUseCase } from './DeleteSpecificationByIDUseCase';

class DeleteSpecificationByIDController {

    constructor(private deleteCategoryByIDUseCase: DeleteSpecificationByIDUseCase) { }

    handle(request: Request, response: Response) {
        const { id } = request.params;

        this.deleteCategoryByIDUseCase.execute({ id });

        return response.status(200).send();
    }
}
export { DeleteSpecificationByIDController }
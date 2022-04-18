import { Request, Response } from 'express';
import { ListCategoryByIDUseCase } from './listCategoryByIDUseCase';
import { container } from 'tsyringe';


class ListCategoryByIDController {

    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;

        const listCategoryByIDUseCase = container.resolve(ListCategoryByIDUseCase);

        const listCategoryByID = await listCategoryByIDUseCase.execute({ id });
        
        if (!listCategoryByID) {
            return response.status(500).json('error: category[ID] not exists');
        }

        return response.status(201).json(listCategoryByID);

    }

}

export { ListCategoryByIDController }
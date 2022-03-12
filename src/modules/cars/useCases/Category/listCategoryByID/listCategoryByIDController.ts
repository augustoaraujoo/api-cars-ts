import { Request, Response } from 'express';
import { ListCategoryByIDUseCase } from './listCategoryByIDUseCase';


class ListCategoryByIDController {

    constructor(private listCategoryByIDUseCase: ListCategoryByIDUseCase) { }

    handle(request: Request, response: Response) {
        const { id } = request.params;

        const listCategoryByID = this.listCategoryByIDUseCase.execute({ id })
        if (!listCategoryByID) {
            return response.status(500).json('error: category[ID] not exists')
        }

        return response.status(201).json(listCategoryByID);

    }

}

export { ListCategoryByIDController }
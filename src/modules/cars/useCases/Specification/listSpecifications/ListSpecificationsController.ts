import { ListSpecificationsUseCase } from './ListSpecificationsUseCase'
import { Request, Response } from 'express';
import { container } from 'tsyringe';

class ListSpecificationsController {

    async handle(request: Request, response: Response): Promise<Response> {
        const listSpecificationsUseCase = container.resolve(ListSpecificationsUseCase)
        const all = await listSpecificationsUseCase.execute()
        console.log(all);

        return response.status(200).json(all);
    }
}
export { ListSpecificationsController }
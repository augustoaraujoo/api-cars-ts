import { ListSpecificationsUseCase } from './ListSpecificationsUseCase'
import { Request, Response } from 'express';

class ListSpecificationsController {
    constructor(private listSpecificationsUseCase: ListSpecificationsUseCase) { }

    handle(request: Request, response: Response): Response {
        const all = this.listSpecificationsUseCase.execute()
        console.log(all);
        
        return response.status(200).json(all);
    }
}
export { ListSpecificationsController }
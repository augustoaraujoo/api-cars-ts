import { Response, Request } from 'express';

class DevolutionRentalController {
    async handle(req: Request, res: Response): Promise<Response> {

        const { } = req.body;

        return res.json('Hello express');

    }
}

export { DevolutionRentalController };
import {Response, Request} from 'express';

class CreateRentalController {
async handle(req: Request, res: Response):Promise<Response> {

const {} = req.body;

return res.json('Hello express');

}
}

export {CreateRentalController};
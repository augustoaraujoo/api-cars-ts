import { Response, Request } from 'express';
import { container } from 'tsyringe';
import { CreateRentalUseCase } from './CreateRentalUseCase';

class CreateRentalController {
    async handle(req: Request, res: Response): Promise<Response> {

        const createRentalUseCase = container.resolve(CreateRentalUseCase);

        const rental = await createRentalUseCase.execute({
            car_id: req.body.car_id,
            expected_return_date: req.body.expected_return_date,
            user_id: req.user.id
        });

        return res.status(201).json(rental);
    }
}

export { CreateRentalController };
import { Response, Request } from 'express';
import { container } from 'tsyringe';
import { CreateRentalUseCase } from './CreateRentalUseCase';

class CreateRentalController {
    async handle(req: Request, res: Response): Promise<Response> {

        
        const createRentalUseCase = container.resolve(CreateRentalUseCase);

        const rental = await createRentalUseCase.execute({
            car_id: req.body.car_id,
            expected_return_date: req.body.expected_return_date,
            user_id: "1562d40e-1853-4908-a8bb-79b4dbf9343b"
        });
        //req.user.id
        //	"user_id": "1562d40e-1853-4908-a8bb-79b4dbf9343b"
        return res.status(201).json(rental);
    }
}

export { CreateRentalController };
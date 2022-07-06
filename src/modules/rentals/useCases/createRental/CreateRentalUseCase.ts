import dayjs from "dayjs";
import utc from "dayjs/plugin/utc"
import { Rental } from "@modules/rentals/infra/typeorm/entities/Rental";
import { IRentalRepository } from "@modules/rentals/repositories/IRentalRepository";
import { AppError } from "@shared/errors/AppError";

dayjs.extend(utc);

interface IRequest {
    user_id: string;
    car_id: string;
    expected_return_date: string;
}

class CreateRentalUseCase {

    constructor(private readonly rentalRepository: IRentalRepository) { }

    async execute({
        car_id,
        expected_return_date,
        user_id }: IRequest): Promise<Rental> {
        const carUnavailable = await this.rentalRepository.findOpenRentalByCar(car_id);
        if (carUnavailable) {
            throw new AppError("Car unavailable", 401);
        }
        const rentalOpenToUser = await this.rentalRepository.findOpenRentalByUser(user_id);
        if (rentalOpenToUser) {
            throw new AppError("User already has an open rental", 401);
        }
        const expectedReturnDateFormat = dayjs(expected_return_date).utc().local().format();
        const dateNow = dayjs.utc().local().format();
        const compare = dayjs(expectedReturnDateFormat).diff(dateNow, "hours");
        console.log(compare);

        const rental = await this.rentalRepository.create({ car_id, expected_return_date, user_id })
        return rental;
    }
}

export { CreateRentalUseCase };
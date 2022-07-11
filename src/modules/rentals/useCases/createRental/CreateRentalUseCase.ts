import dayjs from "dayjs";
import utc from "dayjs/plugin/utc"
import { Rental } from "@modules/rentals/infra/typeorm/entities/Rental";
import { IRentalRepository } from "@modules/rentals/repositories/IRentalRepository";
import { AppError } from "@shared/errors/AppError";
import { IDateProvider } from "@shared/container/providers/DateProvider/IDateProvider";
import { inject, injectable } from "tsyringe";

dayjs.extend(utc);

interface IRequest {
    user_id: string;
    car_id: string;
    expected_return_date: Date;
}
@injectable()
class CreateRentalUseCase {

    constructor(
        @inject("RentalsRepository") private rentalRepository: IRentalRepository,
        @inject("DayjsDateProvider") private dateProvider: IDateProvider
    ) { }
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

        const dateNow = this.dateProvider.dateNow();

        const compare = this.dateProvider.compareInHours(dateNow, expected_return_date);

        if (compare < 24) {
            throw new AppError("invalid return time!", 400);
        }

        const rental = await this.rentalRepository.create({ car_id, expected_return_date, user_id })

        return rental;
    }
}

export { CreateRentalUseCase };
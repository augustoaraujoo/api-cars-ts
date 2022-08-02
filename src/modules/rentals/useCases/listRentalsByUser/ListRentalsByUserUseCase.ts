import { inject, injectable } from "tsyringe";
import { RentalsRepository } from '@modules/rentals/infra/typeorm/repositories/RentalsRepository';
import { Rental } from '@modules/rentals/infra/typeorm/entities/Rental';


@injectable()
class ListRentalsByUserUseCase {
    constructor(
        @inject("RentalsRepository")
        private rentalsRepository: RentalsRepository) { }

    async execute(user_id: string): Promise<Rental[]> {
        const rentalsByUser = await this.rentalsRepository.findUserByUserId(user_id);
        return rentalsByUser;
    }
}

export { ListRentalsByUserUseCase };
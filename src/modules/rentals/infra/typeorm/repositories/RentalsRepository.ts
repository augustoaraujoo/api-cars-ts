import { ICreateRentalDTO } from '@modules/rentals/dtos/ICreateRentalDTO';
import { IRentalRepository } from '@modules/rentals/repositories/IRentalRepository';
import { Rental } from '../entities/Rental';
import { Repository, getRepository } from 'typeorm';
class RentalsRepository implements IRentalRepository {

    private repository: Repository<Rental>
    constructor() {
        this.repository = getRepository(Rental);
    }
    async findUserByUserId(user_id: string): Promise<Rental[]> {
        const rentals = await this.repository.find({
            where: { user_id },
            relations: ['Car']
        })
        return rentals
    }

    async findByID(id: string): Promise<Rental> {
        const rental = await this.repository.findOne(id);
        return rental
    }

    async findOpenRentalByCar(car_id: string): Promise<Rental> {
        const openByCar = await this.repository.findOne({
            where: {
                car_id, end_date: null
            }
        })
        return openByCar;
    }

    async findOpenRentalByUser(user_id: string): Promise<Rental> {
        const openByUser = await this.repository.findOne({
            where: { user_id, end_date: null }
        })
        return openByUser;
    }

    async create({ car_id, expected_return_date, user_id, id, end_date, total }: ICreateRentalDTO): Promise<Rental> {
        const rental = this.repository.create({
            car_id, expected_return_date, user_id, id, end_date, total
        });
        await this.repository.save(rental);
        return rental;
    }

}

export { RentalsRepository }
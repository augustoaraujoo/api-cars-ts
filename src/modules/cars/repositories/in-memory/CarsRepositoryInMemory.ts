import { ICreateCarsDTO } from '@modules/cars/carsDtos/ICreateCarsDTO';
import { Car } from '@modules/cars/infra/typeorm/entities/Car';
import { ICarsRepository } from '@modules/cars/repositories/ICarsRepository';
class CarsRepositoryInMemory implements ICarsRepository {
    cars: Car[] = [];
    async create({ brand, category_id, daily_rate, description, fine_amount, license_plate, name }: ICreateCarsDTO): Promise<void> {
        const cars = new Car();
        Object.assign(cars, {
            brand,
            category_id,
            daily_rate,
            description,
            fine_amount,
            license_plate,
            name
        });
        this.cars.push(cars);
    }

}

export { CarsRepositoryInMemory }
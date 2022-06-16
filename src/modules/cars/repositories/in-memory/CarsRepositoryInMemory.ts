import { ICreateCarsDTO } from '@modules/cars/carsDtos/ICreateCarsDTO';
import { Car } from '@modules/cars/infra/typeorm/entities/Car';
import { ICarsRepository } from '@modules/cars/repositories/ICarsRepository';
class CarsRepositoryInMemory implements ICarsRepository {
    
    async findAvailable(
        brand?: string,
        category_id?: string,
        name?: string
    ): Promise<Car[]> {
        const all = this.cars.filter((car) => {
            if (
                car.available === true ||
                ((brand && car.brand === brand) ||
                (category_id && car.category_id === category_id) ||
                (name && car.name === name))
            ) {
                return car;
            }
            return null;
        });
        return all;
    }

    cars: Car[] = [];
    async findById(car_id: string): Promise<Car> {
        return this.cars.find((car) => car.id === car_id);
    }
    async create({
        brand,
        category_id,
        daily_rate,
        description,
        fine_amount,
        license_plate,
        name }: ICreateCarsDTO): Promise<Car> {
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
        return cars;
    }

    async findByLicensePlate(license_plate: string): Promise<Car> {
        return this.cars.find((car) => car.license_plate === license_plate);
    }
}

export { CarsRepositoryInMemory }
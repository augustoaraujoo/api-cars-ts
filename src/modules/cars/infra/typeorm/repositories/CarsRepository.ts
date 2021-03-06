import { ICreateCarsDTO } from '@modules/cars/carsDtos/ICreateCarsDTO';
import { ICarsRepository } from '@modules/cars/repositories/ICarsRepository';
import { Car } from '../entities/Car';
import { getRepository, Repository } from 'typeorm';

class CarsRepository implements ICarsRepository {

    private repository = new Repository<Car>();

    constructor() {
        this.repository = getRepository(Car);
    }
    async updateAvailable(id: string, available: boolean): Promise<void> {
        await this.repository.createQueryBuilder().update().set({
            available
        }).where("id = :id", { id }).setParameters({ id }).execute();

    }
    async findById(car_id: string): Promise<Car> {
        return await this.repository.findOne(car_id);
    }

    async findAvailable(brand: string, category_id?: string, name?: string): Promise<Car[]> {
        const carsQuery = await this.repository
            .createQueryBuilder("c")
            .where("available = :available", { available: true })
        if (brand) {
            carsQuery.andWhere("c.brand = :brand", { brand })
        }
        if (name) {
            carsQuery.andWhere("c.name = :name", { name })
        }
        if (category_id) {
            carsQuery.andWhere("c.category_id = :category_id", { category_id })
        }
        const cars = await carsQuery.getMany();
        return cars;
    }

    async create({ brand, category_id, daily_rate, description, fine_amount, license_plate, name, specifications, id }: ICreateCarsDTO): Promise<Car> {
        const car = this.repository.create({ brand, category_id, daily_rate, description, fine_amount, license_plate, name, specifications, id });
        await this.repository.save(car);
        return car;
    }
    async findByLicensePlate(license_plate: string): Promise<Car> {
        const car = await this.repository.findOne({
            license_plate,
        })
        return car;
    }

}
export { CarsRepository }
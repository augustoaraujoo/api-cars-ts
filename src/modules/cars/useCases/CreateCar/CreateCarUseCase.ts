import { Car } from '@modules/cars/infra/typeorm/entities/Car';
import { CarsRepository } from '@modules/cars/infra/typeorm/repositories/CarsRepository';
import { ICarsRepository } from '@modules/cars/repositories/ICarsRepository';
import { injectable, inject } from 'tsyringe';
import { AppError } from '../../../../shared/errors/AppError';

interface IRequest {
    name: string;
    description: string;
    daily_rate: number;
    license_plate: string;
    fine_amount: number;
    brand: string;
    category_id: string;
}
@injectable()
class CreateCarUseCase {
    constructor(@inject(CarsRepository) 
    private carsRepository: ICarsRepository) { }
   
    async execute({ 
        name,
        description,
        daily_rate,
        license_plate,
        fine_amount,
        brand,
        category_id }: IRequest): Promise<Car> {

        const carAlreadyExists = await this.carsRepository.findByLicensePlate(license_plate);

        if (carAlreadyExists) {
            throw new AppError("Car already exists!", 401);
        }
        const car = await this.carsRepository.create({
            name,
            description,
            daily_rate,
            license_plate,
            fine_amount,
            brand,
            category_id
        });
        return car;
    };
}

export {
    CreateCarUseCase
}
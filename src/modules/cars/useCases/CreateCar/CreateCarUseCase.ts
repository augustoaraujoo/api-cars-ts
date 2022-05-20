import { ICarsRepository } from '@modules/cars/repositories/ICarsRepository';
import { injectable, inject } from 'tsyringe';
interface IRequest {
    name: string;
    description: string;
    daily_rate: number;
    license_plate: string;
    fine_amount: number;
    brand: string;
    category_id: string;
}
// @injectable()
//@inject("CarsRepository")
class CreateCarUseCase {
    constructor(private carsRepository: ICarsRepository) { }
    async execute({ name, description, daily_rate, license_plate, fine_amount, brand, category_id }: IRequest): Promise<void> {
        this.carsRepository.create({
            name,
            description,
            daily_rate,
            license_plate,
            fine_amount,
            brand,
            category_id
        })
    };
}

export {
    CreateCarUseCase
}
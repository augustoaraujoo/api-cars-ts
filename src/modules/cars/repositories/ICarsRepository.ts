import { ICreateCarsDTO } from "../carsDtos/ICreateCarsDTO";
import { Car } from '@modules/cars/infra/typeorm/entities/Car';

interface ICarsRepository {
    findAvailable(brand:string, category_id?:string, name?:string): Promise<Car[]>;
    create(data: ICreateCarsDTO): Promise<Car>;
    findByLicensePlate(license_plate: string): Promise<Car>;
}
export { ICarsRepository }
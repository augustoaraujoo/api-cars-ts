import { ICreateCarsDTO } from "../carsDtos/ICreateCarsDTO";
import { Car } from '@modules/cars/infra/typeorm/entities/Car';

interface ICarsRepository {
    create(data: ICreateCarsDTO): Promise<Car>;
    findByLicensePlate(license_plate: string):Promise<Car>;
}
export { ICarsRepository }
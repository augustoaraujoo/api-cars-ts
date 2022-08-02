import { ICreateRentalDTO } from "../dtos/ICreateRentalDTO";
import { Rental } from "../infra/typeorm/entities/Rental";

interface IRentalRepository {
    findOpenRentalByCar(car_id: string): Promise<Rental>;
    findOpenRentalByUser(user_id: string): Promise<Rental>;
    create(data: ICreateRentalDTO):Promise<Rental>;
    findByID(id: string): Promise<Rental>;
    findUserByUserId(user_id: string): Promise<Rental[]>;
}

export { IRentalRepository }
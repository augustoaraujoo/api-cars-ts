import { ICreateCarsDTO } from "../carsDtos/ICreateCarsDTO";

interface ICarsRepository {
    create(data: ICreateCarsDTO): Promise<void>;
}

export { ICarsRepository }
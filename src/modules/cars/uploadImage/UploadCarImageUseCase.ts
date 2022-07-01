import { inject, injectable } from "tsyringe";
import { CarImage } from "../infra/typeorm/entities/CarImage";
import { ICarsImagesRepository } from '@modules/cars/repositories/ICarsImagesRepository';
import { CarsImagesRepository } from "../infra/typeorm/repositories/CarsImagesRepository";

interface IRequest {
    car_id: string;
    images_name: string[];
}
@injectable()
class UploadCarImageUseCase {
    constructor(@inject(CarsImagesRepository) 
    private carImageRepository: ICarsImagesRepository) {}
    
    async execute({ car_id, images_name }: IRequest): Promise<void> {
        images_name.map((images_name)=> {
            this.carImageRepository.create(car_id, images_name);
        });
        
    }
}

export { UploadCarImageUseCase}


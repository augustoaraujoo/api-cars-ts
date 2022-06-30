import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { UploadCarImageUseCase } from './UploadCarImageUseCase';

interface IFile {
    filename: string;
}

class UploadCarImageController {

    async handle(request: Request, response: Response):Promise<Response> {
        const { id } = request.body
        const images = request.files as IFile[];

        const uploadCarImageUseCase = container.resolve(UploadCarImageUseCase);

        const fileNames = images.map((file) => file.filename);
        
        await uploadCarImageUseCase.execute({
            car_id: id,
            images_name: fileNames
        })
        return response.status(201).send()

    }


}



export { UploadCarImageController }
import { CarsRepositoryInMemory } from "@modules/cars/repositories/in-memory/CarsRepositoryInMemory";
import { CreateCarUseCase } from "./CreateCarUseCase"
import { AppError } from '../../../../shared/errors/AppError';

let createCarUseCase: CreateCarUseCase;
let carsRepository: CarsRepositoryInMemory;

describe("Create Car", () => {
    beforeEach(() => {
        carsRepository = new CarsRepositoryInMemory();
        createCarUseCase = new CreateCarUseCase(carsRepository);
    });

    it("should be able to create a new car", async () => {
        const car = await createCarUseCase.execute({
            name: "Name test car",
            description: "Description car",
            daily_rate: 100,
            license_plate: "ABC-1234",
            fine_amount: 60,
            brand: "Brand",
            category_id: "category",
        });
        expect(car).toHaveProperty("id");
    })

    it("should not be able to create a car with exists license_plate", () => {
        expect(async () => {
            await createCarUseCase.execute({
                name: "Name test car",
                description: "Description car",
                daily_rate: 100,
                license_plate: "ABC-1234",
                fine_amount: 60,
                brand: "Brand",
                category_id: "category",
            });
            await createCarUseCase.execute({
                name: "Name test car2",
                description: "Description car",
                daily_rate: 100,
                license_plate: "ABC-1234",
                fine_amount: 60,
                brand: "Brand",
                category_id: "category",
            });
        }).rejects.toBeInstanceOf(AppError);
    });

    it("should not be able to create a with available true by default", async () => {
        const car = await createCarUseCase.execute({
            name: "Name ",
            description: "Description car",
            daily_rate: 100,
            license_plate: "ABC-1234",
            fine_amount: 60,
            brand: "Brand",
            category_id: "category",
        });
        console.log(car);
        
        expect(car.available).toBe(true);
    })
})
import { RentalsRepositoryInMemory } from "@modules/rentals/repositories/in-memory/RentalsRepositoryInMemory";
import { AppError } from "@shared/errors/AppError";
import { CreateRentalUseCase } from "./CreateRentalUseCase";
import dayjs from 'dayjs';
import { DayjsDateProvider } from "@shared/container/providers/DateProvider/implementations/DayjsDateProvider";
import { CarsRepositoryInMemory } from "@modules/cars/repositories/in-memory/CarsRepositoryInMemory";

let createRentalUseCase: CreateRentalUseCase;
let rentalsRepositoryInMemory: RentalsRepositoryInMemory;
let dateProvider: DayjsDateProvider
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe("CreateRentalUseCase", () => {
    const dayAdd24Hours = dayjs().add(1, 'hour');
    beforeEach(() => {
        rentalsRepositoryInMemory = new RentalsRepositoryInMemory();
        dateProvider = new DayjsDateProvider();
        createRentalUseCase = new CreateRentalUseCase(rentalsRepositoryInMemory, dateProvider, carsRepositoryInMemory);
    })

    it("should be able to create a new rental", async () => {
        const request = {
            user_id: "user_id",
            car_id: "car_id",
            expected_return_date: "2020-01-01"
        }

        expect(request).toHaveProperty("user_id");
        expect(request).toHaveProperty("expected_return_date");
    })

    it("should not be able to create a new rental if there is another open to the same user", async () => {


        expect(async () => {

            await createRentalUseCase.execute({
                user_id: "user_id",
                car_id: "1234",
                expected_return_date: new Date()
            })


            await createRentalUseCase.execute({
                user_id: "user_id",
                car_id: "123",
                expected_return_date: new Date(),
            })
        }).rejects.toBeInstanceOf(AppError);

    })
    it("should not be able to create a new rental if there is another open to the same car", async () => {

        expect(async () => {

            await createRentalUseCase.execute({
                user_id: "44432",
                car_id: "432",
                expected_return_date: new Date()
            })


            await createRentalUseCase.execute({
                user_id: "123213",
                car_id: "432",
                expected_return_date: new Date()
            })
        }).rejects.toBeInstanceOf(AppError);

    })
    it("should not be able to create a new rental with invalid return time", async () => {

        expect(async () => {
            await createRentalUseCase.execute({
                user_id: "44432",
                car_id: "432",
                expected_return_date: dayjs().toDate()
            })
        }).rejects.toBeInstanceOf(AppError);

    })
})
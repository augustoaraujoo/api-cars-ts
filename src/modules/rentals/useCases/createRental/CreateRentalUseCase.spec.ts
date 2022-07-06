import { RentalsRepositoryInMemory } from "@modules/rentals/repositories/in-memory/RentalsRepositoryInMemory";
import { AppError } from "@shared/errors/AppError";
import { CreateRentalUseCase } from "./CreateRentalUseCase";
import dayjs from 'dayjs';

let createRentalUseCase: CreateRentalUseCase;
let rentalsRepositoryInMemory: RentalsRepositoryInMemory;


describe("CreateRentalUseCase", () => {
    const dayAdd24Hours = dayjs().add(1, 'hour');
    beforeEach(() => {
        rentalsRepositoryInMemory = new RentalsRepositoryInMemory();
        createRentalUseCase = new CreateRentalUseCase(rentalsRepositoryInMemory);
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
                expected_return_date: "2020-01-01"
            })


            await createRentalUseCase.execute({
                user_id: "user_id",
                car_id: "123",
                expected_return_date: `${dayAdd24Hours}`,
            })
        }).rejects.toBeInstanceOf(AppError);

    })
    it("should not be able to create a new rental if there is another open to the same car", async () => {

        expect(async () => {

            await createRentalUseCase.execute({
                user_id: "44432",
                car_id: "432",
                expected_return_date: "2020-01-01"
            })


            await createRentalUseCase.execute({
                user_id: "123213",
                car_id: "432",
                expected_return_date: "2020-01-01"
            })
        }).rejects.toBeInstanceOf(AppError);

    })
})
import { CarsRepositoryInMemory } from '@modules/cars/repositories/in-memory/CarsRepositoryInMemory';
import { ListAvailableCarsUseCase } from "./ListAvailableCarsUseCase"

let listAvailableCarsUseCase: ListAvailableCarsUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;
describe("list cars", () => {
    beforeEach(() => {
        carsRepositoryInMemory = new CarsRepositoryInMemory();
        listAvailableCarsUseCase = new ListAvailableCarsUseCase(carsRepositoryInMemory);
    })
    it("should be able list all cars available cars", async () => {
        const car = await carsRepositoryInMemory.create({
            brand: "Car_brand",
            category_id: "category_id",
            daily_rate: 111,
            description: "audi tt",
            fine_amount: 40,
            license_plate: "DEF-3214",
            name: "Car1"
        });
        const cars = await listAvailableCarsUseCase.execute({
            brand: "Car_brand"
        });
        expect(cars).toEqual([car])
    })
    it("should be able to list all available cars by name ", async() => {
        const car = await carsRepositoryInMemory.create({
            brand: "Car_brand_test",
            category_id: "category_id",
            daily_rate: 111,
            description: "audi tt",
            fine_amount: 40,
            license_plate: "DEF-3214",
            name: "Car1"
        });
        const cars = await listAvailableCarsUseCase.execute({
            name: "Car1",
        });
        console.log(cars);
        
        expect(cars).toEqual([car])

    })
})
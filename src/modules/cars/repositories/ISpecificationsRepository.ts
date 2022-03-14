import { Specification } from "../model/Specification";

interface ICreateSpecificationDTO {
    name: string;
    description: string;
}
interface ISpecificationsRepository {
    create({ name, description }: ICreateSpecificationDTO): void;
    findByName(name: string): Specification;
    
    deleteSpecificationByID(id: string): void;
    list(): Specification[];
}
export { ISpecificationsRepository, ICreateSpecificationDTO }
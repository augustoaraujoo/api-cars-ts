import { Specification } from '@modules/cars/infra/typeorm/entities/Specification';
import { ICreateSpecificationDTO, ISpecificationsRepository } from '@modules/cars/repositories/ISpecificationsRepository';

class SpecificationsInMemory implements ISpecificationsRepository {

    specifications: Specification[] = []

    async create({ name, description }: ICreateSpecificationDTO): Promise<Specification> {

        const specification = new Specification();

        Object.assign(specification, {
            description,
            name
        })

         this.specifications.push(
            specification
        )
            return specification;
    }
    async findByName(name: string): Promise<Specification> {
        return this.specifications.find(specification => specification.name === name)
    }
    async deleteSpecificationByID(id: string): Promise<void> {
        const deleteSpecification = this.specifications.find(specification => specification.id === id);
        this.specifications.splice(this.specifications.indexOf(deleteSpecification), 1);
    }
    async list(): Promise<Specification[]> {
       return this.specifications;
    }
    async findByIds(id: string[]): Promise<Specification[]> {
        const allSpecifications =  this.specifications.filter(specification => id.includes(specification.id))
        return allSpecifications;
    }


}

export { SpecificationsInMemory };

import { ICreateSpecificationDTO, ISpecificationsRepository } from '@modules/cars/repositories/ISpecificationsRepository';
import { Repository, getRepository } from 'typeorm';
import { Specification } from '../entities/Specification';

class SpecificationsRepository implements ISpecificationsRepository {

    private repository: Repository<Specification>;

    constructor() {
        this.repository = getRepository(Specification);
    }
    async findByIds(id: string[]): Promise<Specification[]> {
        const specification = await this.repository.findByIds(id);
        return specification;
    }

    async create({ name, description }: ICreateSpecificationDTO): Promise<Specification> {
        const specification = this.repository.create(
            {
                name,
                description
            }
        );
        await this.repository.save(specification);
        return specification
    }

    async findByName(name: string): Promise<Specification> {
        const specification = await this.repository.findOne({
            name
        })
        return specification
    }
    async deleteSpecificationByID(id: string): Promise<void> {
        await this.repository.delete({ id });
    }
    async list(): Promise<Specification[]> {
        return await this.repository.find();
    }
}

export { SpecificationsRepository }
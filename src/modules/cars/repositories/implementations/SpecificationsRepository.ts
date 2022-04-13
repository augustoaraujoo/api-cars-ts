import { Specification } from "../../entities/Specification";
import { ICreateSpecificationDTO, ISpecificationsRepository } from "../ISpecificationsRepository";

class SpecificationsRepository implements ISpecificationsRepository {

    private specifications: Specification[]

    private static INSTANCE: SpecificationsRepository;

    private constructor() {
        this.specifications = []
    }

    public static getInstance(): SpecificationsRepository {
        if (!SpecificationsRepository.INSTANCE) {
            SpecificationsRepository.INSTANCE = new SpecificationsRepository();
        }
        return SpecificationsRepository.INSTANCE;
    }

    create({ name, description }: ICreateSpecificationDTO): void {
        const specification = new Specification();

        Object.assign(specification, {
            name,
            description,
            created_at: new Date()
        })

        this.specifications.push(specification);
    }

    findByName(name: string): Specification {
        const specification = this.specifications.find(specification => specification.name === name)
        return specification;
    }
    deleteSpecificationByID(id: string) {
        const existsSpecification = this.specifications.find(specification => specification.id === id);

        const remove = this.specifications.splice(this.specifications.indexOf(existsSpecification), 1);

        const haveSpecification = this.specifications.filter(specification => specification.id.length <= 0);

        const dontExistsID = this.specifications.find(specification => specification.id !== id);

        if (haveSpecification || dontExistsID) {
            console.log(this.specifications);
            return console.error("error");
        };

        return remove;
    }
    list(): Specification[] {
        return this.specifications;
    }
}

export { SpecificationsRepository }
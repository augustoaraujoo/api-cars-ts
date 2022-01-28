import { Person } from "../model/Person";

interface IPersonTypeDTO {
    name: string;
}

class PersonsRepository {
    private persons: Person[];

    constructor() {
        this.persons = [];
    }

    create({ name }: IPersonTypeDTO): void {

        const person = new Person();

        Object.assign(person, {
            name
        })

        this.persons.push(person);
    }

    list(): Person[] {
        return this.persons;
    }

    findByName(name: string): Person {
        const person = this.persons.find((name) => person.name === name);
        return person
    }
}

export { PersonsRepository }
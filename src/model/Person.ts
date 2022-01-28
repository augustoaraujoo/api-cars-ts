import { v4 as uuid } from 'uuid'

class Person {
    id!: string;
    name!: string;

    constructor() {
        if (!this.id) {
            this.id = uuid()
        }
    }
}

export { Person }
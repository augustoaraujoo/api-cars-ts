import { v4 as uuidV4 } from 'uuid';
import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';

@Entity("categories")
class Category {

    @PrimaryColumn({
        type: "uuid",
        default: uuidV4(),
    })
    id?: string;

    @Column()
    name!: string;

    @Column()
    description!: string;

    @CreateDateColumn()
    created_at!: Date;

    constructor() {
        if (!this.id) {
            this.id = uuidV4();
        }
    }
}
export { Category }
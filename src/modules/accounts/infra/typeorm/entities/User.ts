import { v4 as uuidV4 } from 'uuid';
import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';

@Entity("users")
class User {
    @PrimaryColumn({
        type: "uuid",
        default: uuidV4(),
    })
    id: string;
    @Column()
    name: string;

    @Column()
    email: string;
    @Column()
    password: string;
    @Column()
    driver_license: string;
    @Column()
    isAdmin: boolean;
    @Column({
        type: "varchar",
        default: "ab",
        nullable: true,
    })
    avatar: string;

    @CreateDateColumn()
    created_at: Date;

    constructor() {
        if (!this.id) {
            this.id = uuidV4()
        }
    }
}
export { User }
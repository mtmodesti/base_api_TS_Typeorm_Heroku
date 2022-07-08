
import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Employee {
    
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    name: string

    @Column()
    hash_password: string

    @Column()
    empty: string
    
    @Column()
    eempty: string
    
    @Column()
    aempty: string

}
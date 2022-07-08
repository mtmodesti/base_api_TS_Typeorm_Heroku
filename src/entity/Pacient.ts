
import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Pacient {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    name: string

    @Column()
    phone: string
 
}
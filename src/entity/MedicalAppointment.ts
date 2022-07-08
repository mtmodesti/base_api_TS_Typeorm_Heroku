import { Pacient } from './Pacient';

import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm"

@Entity()
export class MedicalAppointment {
    
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({ type: 'timestamp', nullable: true })
    date: Date

    @ManyToOne(() => Pacient, (pacient) => pacient.id)
    pacient: Pacient

     
}

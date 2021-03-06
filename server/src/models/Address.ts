/**
 * Address
 * Author: Rhys Wright
 * Description: Defines the Address table and uses validation to ensure that the address is valid
 * Usage: Create Address table
 */
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { IsNotEmpty, Matches } from 'class-validator';

@Entity()
export class Address {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @IsNotEmpty()
    @Matches(/[,#-\/\s\!\@\$.....]/gi)
    street: string;

    @Column({
        length: 50
    })
    @IsNotEmpty()
    city: string;

    @Column({
        width: 2
    })
    @IsNotEmpty()
    state: string;

    @Column({
        width: 5,
    })
    zip: number;
}
/**
 * Booking
 * Author: Rhys Wright
 * Description: Defines the Booking table and uses validation to ensure that the booking type is a valid value
 * Usage: Create booking table
 */
import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, Unique } from 'typeorm';
import {
    IsEmail,
    IsDate,
    Min,
    Max,
    MinDate,
    MaxDate
} from 'class-validator';
import { Address } from './Address';

export const futureDate = () => {
    const today = new Date();
    const day = today.getDate();
    const month = today.getMonth();
    const year = today.getFullYear() + 1;

    return new Date(`${month} ${day} ${year}`);
}

export enum BookingType {
    HOUSEKEEPING = 'housekeeping',
    DOGWALK = 'dog walk'
}

@Entity()
@Unique('date_time', ['date', 'time'])
export class Booking {  
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @Min(2)
    @Max(50)
    name: string;

    @Column()
    @IsEmail()
    email: string;

    @OneToOne(() => Address)
    @JoinColumn()
    @Min(5)
    @Max(75)
    address: Address;

    @Column({
        type: 'enum',
        enum: BookingType
    })
    type: BookingType;

    @Column({
        type: 'date'
    })
    @IsDate()
    @MinDate(new Date())
    @MaxDate(futureDate())
    date: Date;

    @Column({
        type: 'time'
    })
    time: Date;
}
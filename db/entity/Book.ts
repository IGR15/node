import { BaseEntity,Column,Entity,PrimaryGeneratedColumn } from "typeorm";
@Entity("books")
export class Book extends BaseEntity {
    @PrimaryGeneratedColumn('increment')
    id: number;
    @Column({length:255,nullable:false})
    bookName: string;
    @Column({length:255,nullable:false})
    author: string;
}

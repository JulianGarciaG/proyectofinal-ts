import { IsString } from "class-validator";
import { Pedido } from "src/modules/pedido/entities/pedido.entity";
import { Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Usuario {
    @PrimaryGeneratedColumn()
    id: number;
    @IsString()
    nombre: string;
    @IsString()
    email: string;
    @OneToMany(() => Pedido, pedido => pedido.usuario)
    pedidos: Pedido[];
}
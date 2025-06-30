import { Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Categoria } from "src/modules/categoria/entities/categoria.entity";
import { Pedido } from "src/modules/pedido/entities/pedido.entity";
import { IsNumber, IsString } from "class-validator";

@Entity()
export class Producto {
    @PrimaryGeneratedColumn()
    id: number;

    @IsString()
    nombre: string;

    @IsNumber()
    precio: number;

    @ManyToOne(() => Categoria, categoria => categoria.productos)
    categoria: Categoria;

    @ManyToMany(() => Pedido, pedido => pedido.productos)
    pedidos: Pedido[];

}

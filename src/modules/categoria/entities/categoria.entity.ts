import { IsString } from "class-validator";
import { Producto } from "src/modules/producto/entities/producto.entity";
import { Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Categoria {
    @PrimaryGeneratedColumn()
    id: number;

    @IsString()
    nombre: string;

    @OneToMany(() => Producto, producto => producto.categoria )
    productos: Producto[];


}

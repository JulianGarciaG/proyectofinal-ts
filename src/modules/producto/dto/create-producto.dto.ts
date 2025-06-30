import { IsNotEmpty, IsNumber, IsString, Min } from "class-validator";

export class CreateProductoDto {
    @IsString()
    @IsNotEmpty()
    nombre: string;

    @IsNumber()
    @Min(0)
    precio: number;

    @IsNumber()
    categoriaId: number;
}

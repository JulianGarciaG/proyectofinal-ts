import { IsArray, IsNumber } from "class-validator";

export class CreatePedidoDto {
    @IsNumber()
    usuarioId: number;

    @IsArray()
    productoIds: number[];
}

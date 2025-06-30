import { PartialType } from '@nestjs/mapped-types';
import { CreatePedidoDto } from './create-pedido.dto';
import { IsArray, IsNumber, IsOptional } from 'class-validator';

export class UpdatePedidoDto extends PartialType(CreatePedidoDto) {
  @IsOptional()
  @IsNumber()
  usuarioId?: number;

  @IsOptional()
  @IsArray()
  productoIds?: number[];
}

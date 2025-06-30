import { PartialType } from '@nestjs/mapped-types';
import { CreateProductoDto } from './create-producto.dto';
import { IsNumber, IsOptional } from 'class-validator';

export class UpdateProductoDto extends PartialType(CreateProductoDto) {
    @IsOptional()
    @IsNumber()
    categoriaId?: number;
}

import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UsuarioModule } from './modules/usuario/usuario.module';
import { ProductoModule } from './modules/producto/producto.module';
import { PedidoModule } from './modules/pedido/pedido.module';
import { CategoriaModule } from './modules/categoria/categoria.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (Config: ConfigService) => ({
        type: 'mysql',
        host: Config.get('DB_HOST'),
        port: Config.get('DB_PORT'),
        username: Config.get('DB_USERNAME'),
        database: Config.get('DB_NAME'),
        entities: [__dirname + '/**/*/*.entity{.ts,.js}'],
        synchronize: true,
      }),
    }),
    UsuarioModule,
    ProductoModule,
    PedidoModule,
    CategoriaModule,
  ],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { ReservasModule } from './reservas/reservas.module';
import { EnderecosModule } from './enderecos/enderecos.module';
import { PedidosModule } from './pedidos/pedidos.module';


import { AdminModule } from './admin/admin.module';
import { UsuariosModule } from './usuario/usuario.module';
import { JwtStrategy } from './Auth/jwtstrategy';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        uri: configService.getOrThrow<string>('MONGODB_URI'),
      }),
      inject: [ConfigService],
    }),
    ReservasModule,
    EnderecosModule,
    PedidosModule,
    
    AdminModule,
    UsuariosModule,
  ],
  controllers: [AppController],
  providers: [AppService, JwtStrategy],
})
export class AppModule {}
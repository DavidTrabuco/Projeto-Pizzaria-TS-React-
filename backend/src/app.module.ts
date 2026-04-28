import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { ReservasModule } from './reservas/reservas.module';
import { EnderecosModule } from './enderecos/enderecos.module';
import { PedidosModule } from './pedidos/pedidos.module';

import { PagamentosModule } from './pagamentos/pagamentos.module';
import { AdminModule } from './admin/admin.module';
import { UsuariosModule } from './usuario/usuario.module';
import { JwtStrategy } from './Auth/jwtstrategy';
import { ConfigModule } from '@nestjs/config';
@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), ReservasModule, EnderecosModule, PedidosModule, PagamentosModule, AdminModule, UsuariosModule],
  controllers: [AppController],
  providers: [AppService, JwtStrategy],
  
})
export class AppModule {}
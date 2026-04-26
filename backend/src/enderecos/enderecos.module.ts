import { Module } from '@nestjs/common';
import { EnderecosService } from './enderecos.service';
import { EnderecosController } from './enderecos.controller';
import { JwtStrategy } from '../Auth/jwtstrategy';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [PassportModule],
  controllers: [EnderecosController],
  providers: [EnderecosService, JwtStrategy],
})
export class EnderecosModule {}

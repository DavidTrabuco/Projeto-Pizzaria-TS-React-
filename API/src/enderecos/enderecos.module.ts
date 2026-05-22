import { Module } from '@nestjs/common';
import { EnderecosService } from './enderecos.service';
import { EnderecosController } from './enderecos.controller';
import { JwtStrategy } from '../Auth/jwtstrategy';
import { PassportModule } from '@nestjs/passport';
import { MongooseModule } from '@nestjs/mongoose';
import { Endereco, EnderecoSchema } from './entities/endereco.entity';

@Module({
  imports: [
    PassportModule,
    MongooseModule.forFeature([{ name: Endereco.name, schema: EnderecoSchema }]),
  ],
  controllers: [EnderecosController],
  providers: [EnderecosService, JwtStrategy],
})
export class EnderecosModule {}

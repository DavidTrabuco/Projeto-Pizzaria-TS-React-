import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type EnderecoDocument = HydratedDocument<Endereco>;

@Schema()
export class Endereco {
  @Prop({ required: true })
  logradouro: string;

  @Prop({ required: true })
  numero: string;

  @Prop()
  complemento?: string;

  @Prop({ required: true })
  bairro: string;

  @Prop({ required: true })
  cidade: string;

  @Prop({ required: true })
  estado: string;

  @Prop({ required: true })
  cep: string;
}

export const EnderecoSchema = SchemaFactory.createForClass(Endereco);

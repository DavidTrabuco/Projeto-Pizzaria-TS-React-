import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ReservaDocument = HydratedDocument<Reserva>;

@Schema()
export class Reserva {
  @Prop({ required: true })
  nome: string;

  @Prop({ required: true })
  pessoas: number;

  @Prop({ required: true })
  dataHorario: string;

  @Prop({ required: true })
  contato: string;

  @Prop({ default: 'pendente' })
  status: string;
}

export const ReservaSchema = SchemaFactory.createForClass(Reserva);

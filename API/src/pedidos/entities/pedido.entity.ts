import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type PedidoDocument = HydratedDocument<Pedido>;

@Schema()
export class Pedido {
  @Prop({ required: true })
  nomeCliente: string;

  @Prop({ type: [String], required: true })
  itens: string[];

  @Prop({ required: true })
  total: number;

  @Prop({
    default: 'pendente',
    enum: ['pendente','confirmado', 'em preparo', 'saiu para entrega', 'entregue'],
  })
  status: string;
}

export const PedidoSchema = SchemaFactory.createForClass(Pedido);

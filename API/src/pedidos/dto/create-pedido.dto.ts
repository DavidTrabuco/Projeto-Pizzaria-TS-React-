import { ApiProperty } from '@nestjs/swagger';

export class CreatePedidoDto {
  @ApiProperty({ example: 'Maria Oliveira' })
  nomeCliente: string;

  @ApiProperty({ example: ['Pizza Calabresa G', 'Refrigerante 2L'], isArray: true, type: String })
  itens: string[];

  @ApiProperty({ example: 89.90 })
  total: number;

  @ApiProperty({ example: 'pendente', enum: ['pendente', 'em preparo', 'saiu para entrega', 'entregue'] })
  status: 'pendente' | 'em preparo' | 'saiu para entrega' | 'entregue';
}
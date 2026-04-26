import { ApiProperty } from "@nestjs/swagger";

export class CreatePagamentoDto {
 @ApiProperty({ example: 1, description: 'ID do pedido associado ao pagamento' })

  pedidoId: number;
 @ApiProperty({ example: 'Cartão de Crédito', description: 'Método de pagamento utilizado' })
  metodo: string;
 
  @ApiProperty({ example: 'João Silva', description: 'Nome do titular do cartão' })
  titular: string;
 
  @ApiProperty({ example: 'R$ 150.00', description: 'Valor total do pagamento'
  })
  total: number;
}

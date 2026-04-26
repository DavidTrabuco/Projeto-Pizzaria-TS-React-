import { ApiProperty } from '@nestjs/swagger';

export class CreateReservaDto {
  @ApiProperty({ description: 'Nome do cliente', example: 'João da Silva' })
  nome: string;

  @ApiProperty({ description: 'Quantidade de pessoas', example: 4 })
  pessoas: number;

  @ApiProperty({ description: 'Data e horário da reserva', example: '2023-12-31T20:00:00.000Z' })
  dataHorario: string;

  @ApiProperty({ description: 'Contato telefônico ou email', example: '11999999999' })
  contato: string;
}

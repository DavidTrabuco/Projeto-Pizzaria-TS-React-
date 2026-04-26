import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateEnderecoDto {
  @ApiProperty({ description: 'Logradouro do endereço (rua, avenida)', example: 'Rua das Flores' })
  logradouro!: string;

  @ApiProperty({ description: 'Número do imóvel', example: '123' })
  numero!: string;

  @ApiPropertyOptional({ description: 'Complemento (opcional)', example: 'Apto 45' })
  complemento?: string;

  @ApiProperty({ description: 'Bairro', example: 'Centro' })
  bairro!: string;

  @ApiProperty({ description: 'Cidade', example: 'São Paulo' })
  cidade!: string;

  @ApiProperty({ description: 'Estado', example: 'SP' })
  estado!: string;

  @ApiProperty({ description: 'CEP', example: '01001-000' })
  cep!: string;
}

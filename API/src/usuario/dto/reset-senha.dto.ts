import { ApiProperty } from '@nestjs/swagger';

export class ResetSenhaDto {
  @ApiProperty({ example: 'david@david.com', description: 'Email do usuário' })
  email: string;

  @ApiProperty({ example: 'novaSenha123', description: 'Nova senha do usuário' })
  novaSenha: string;
}

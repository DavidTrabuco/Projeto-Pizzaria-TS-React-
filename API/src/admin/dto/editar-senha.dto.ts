import { ApiProperty } from '@nestjs/swagger';

export class EditarSenhaDto {
    @ApiProperty({ example: 'senha_atual_123' })
    senhaAtual: string;

    @ApiProperty({ example: 'nova_senha_456' })
    novaSenha: string;
}

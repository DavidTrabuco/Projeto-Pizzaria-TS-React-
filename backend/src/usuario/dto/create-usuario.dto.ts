import { ApiProperty } from "@nestjs/swagger";

export class CreateUsuarioDto {

    @ApiProperty({ example: 'João Silva', description: 'Nome completo do usuário' })
    nome: string;

    @ApiProperty({ example: 'jaodasilva@email.com', description: 'Email do usuário' })
    email: string;

    @ApiProperty({ example: 'senha123', description: 'Senha do usuário' })
    senha: string;

    @ApiProperty({ example: '(71) 99999-9999', description: 'Telefone do usuário' })
    telefone: string;
}

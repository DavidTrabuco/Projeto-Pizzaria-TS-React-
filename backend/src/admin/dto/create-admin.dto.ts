

import { ApiProperty } from '@nestjs/swagger';

export class CreateAdminDto {
    @ApiProperty({ example: 'admin@pizzahouse.com' })
    email: string;

    @ApiProperty({ example: 'admin123' })
    senha: string;
}


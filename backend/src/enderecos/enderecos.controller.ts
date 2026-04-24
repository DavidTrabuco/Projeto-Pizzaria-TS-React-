import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { EnderecosService } from './enderecos.service';
import { CreateEnderecoDto } from './dto/create-endereco.dto';
import { UpdateEnderecoDto } from './dto/update-endereco.dto';
import { AuthGuard } from '@nestjs/passport';

@ApiTags('enderecos')
@ApiBearerAuth()
@UseGuards(AuthGuard('jwtAdmin'))
@Controller('enderecos')
export class EnderecosController {
  constructor(private readonly enderecosService: EnderecosService) {}

  @Post()
  @ApiOperation({ summary: 'Criar endereço' })
  create(@Body() createEnderecoDto: CreateEnderecoDto) {
    return this.enderecosService.create(createEnderecoDto);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todos os endereços' })
  findAll() {
    return this.enderecosService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Buscar um endereço por ID' })
  findOne(@Param('id') id: string) {
    return this.enderecosService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualizar um endereço existente' })
  update(@Param('id') id: string, @Body() updateEnderecoDto: UpdateEnderecoDto) {
    return this.enderecosService.update(+id, updateEnderecoDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remover um endereço' })
  remove(@Param('id') id: string) {
    return this.enderecosService.remove(+id);
  }
}

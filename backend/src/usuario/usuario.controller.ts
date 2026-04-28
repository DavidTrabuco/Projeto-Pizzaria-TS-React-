import { Controller, Post, Body } from '@nestjs/common';
import { UsuariosService } from './usuario.service';
import { ApiTags } from '@nestjs/swagger';
import { CreateUsuarioDto } from './dto/create-usuario.dto';

@ApiTags('Usuarios')
@Controller('usuarios')
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) {}

  @Post('cadastrar')
  cadastrar(@Body() body: CreateUsuarioDto) {
    return this.usuariosService.cadastrar(body.nome, body.email, body.senha, body.telefone);
  }

  @Post('login')
  login(@Body() body: CreateUsuarioDto) {
    return this.usuariosService.login(body.email, body.senha);
  }
}
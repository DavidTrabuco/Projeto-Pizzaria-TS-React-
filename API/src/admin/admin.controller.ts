import { Controller, Post, Patch, Body, Get, UseGuards, Request } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AdminService } from './admin.service';
import { CreateAdminDto } from './dto/create-admin.dto';
import { EditarSenhaDto } from './dto/editar-senha.dto';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';

@ApiTags('Admin')
@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Post('criar')
  criar(@Body() body: CreateAdminDto) {
    return this.adminService.criar(body.email, body.senha);
  }

  @Post('login')
  login(@Body() body: CreateAdminDto) {
    return this.adminService.login(body.email, body.senha);
  }

  @Get('listar')
  @UseGuards(AuthGuard('jwtAdmin'))
  @ApiBearerAuth()
  listar() {
    return this.adminService.listar();
  }

  @Patch('editar')
  @UseGuards(AuthGuard('jwtAdmin'))
  @ApiBearerAuth()
  editar(@Request() req, @Body() body: EditarSenhaDto) {
    return this.adminService.editarSenha(req.user.email, body.senhaAtual, body.novaSenha);
  }
}

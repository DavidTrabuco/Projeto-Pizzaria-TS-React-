import { Controller, Post, Body } from '@nestjs/common';
import { AdminService } from './admin.service';
import { CreateAdminDto } from './dto/create-admin.dto';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';



@ApiTags('Admin')

@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) { }

  @Post('criar')
  
  criar(@Body() body: CreateAdminDto) {
    return this.adminService.criar(body.email, body.senha);
  }
  @Post('login')
  login(@Body() body: CreateAdminDto) {
    return this.adminService.login(body.email, body.senha);
  }
}
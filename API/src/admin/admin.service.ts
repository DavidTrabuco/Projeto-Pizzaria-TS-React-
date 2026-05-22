import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { Admin, AdminDocument } from './entities/admin.entity';

@Injectable()
export class AdminService {
  constructor(
    @InjectModel(Admin.name) private adminModel: Model<AdminDocument>,
    private jwtService: JwtService,
  ) {}

  async criar(email: string, senha: string) {
    const jaExiste = await this.adminModel.findOne({ email });
    if (jaExiste) {
      return { mensagem: 'Esse email já está cadastrado.' };
    }

    const senhaCriptografada = await bcrypt.hash(senha, 10);
    await this.adminModel.create({ email, senha: senhaCriptografada });
    return { mensagem: 'Admin cadastrado com sucesso!' };
  }

  async login(email: string, senha: string) {
    const admin = await this.adminModel.findOne({ email });
    if (!admin) {
      return { mensagem: 'Email ou senha incorretos.' };
    }

    const senhaBate = await bcrypt.compare(senha, admin.senha);
    if (!senhaBate) {
      return { mensagem: 'Email ou senha incorretos.' };
    }

    const token = this.jwtService.sign({ email });
    return { token };
  }

  async listar() {
    return this.adminModel.find().select('-senha');
  }

  async editarSenha(email: string, senhaAtual: string, novaSenha: string) {
    const admin = await this.adminModel.findOne({ email });
    if (!admin) return { mensagem: 'Admin não encontrado.' };

    const senhaBate = await bcrypt.compare(senhaAtual, admin.senha);
    if (!senhaBate) return { mensagem: 'Senha atual incorreta.' };

    if (novaSenha.length < 6) return { mensagem: 'A nova senha deve ter pelo menos 6 caracteres.' };

    admin.senha = await bcrypt.hash(novaSenha, 10);
    await admin.save();
    return { mensagem: 'Senha atualizada com sucesso!' };
  }
}

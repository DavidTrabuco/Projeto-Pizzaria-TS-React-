import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { Usuario, UsuarioDocument } from './entities/usuario.entity';

@Injectable()
export class UsuariosService {
  constructor(
    @InjectModel(Usuario.name) private usuarioModel: Model<UsuarioDocument>,
    private jwtService: JwtService,
  ) {}

  async cadastrar(nome: string, email: string, senha: string, telefone: string) {
    const jaExiste = await this.usuarioModel.findOne({ email });
    if (jaExiste) {
      return { mensagem: 'Esse email já está cadastrado.' };
    }

    const senhaCriptografada = await bcrypt.hash(senha, 10);
    await this.usuarioModel.create({ nome, email, senha: senhaCriptografada, telefone });

    const token = this.jwtService.sign({ email, nome });
    return { token };
  }

  async login(email: string, senha: string) {
    const usuario = await this.usuarioModel.findOne({ email });
    if (!usuario) {
      return { mensagem: 'Email ou senha incorretos.' };
    }

    const senhaBate = await bcrypt.compare(senha, usuario.senha);
    if (!senhaBate) {
      return { mensagem: 'Email ou senha incorretos.' };
    }

    const token = this.jwtService.sign({ email, nome: usuario.nome });
    return { token };
  }

  async redefinirSenha(email: string, novaSenha: string) {
    const usuario = await this.usuarioModel.findOne({ email });
    if (!usuario) {
      return { mensagem: 'Email não encontrado.' };
    }

    const senhaCriptografada = await bcrypt.hash(novaSenha, 10);
    await this.usuarioModel.updateOne({ email }, { senha:
  senhaCriptografada });

    return { mensagem: 'Senha redefinida com sucesso.' };
  }
}

import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

let usuarios: { nome: string; email: string; senha: string; telefone: string }[] = [];

@Injectable()
export class UsuariosService {
  constructor(private jwtService: JwtService) {}

  async cadastrar(nome: string, email: string, senha: string, telefone: string) {
    const jaExiste = usuarios.find(u => u.email === email);
    if (jaExiste) {
      return { mensagem: 'Esse email já está cadastrado.' };
    }

    const senhaCriptografada = await bcrypt.hash(senha, 10);
    usuarios.push({ nome, email, senha: senhaCriptografada, telefone });

    const token = this.jwtService.sign({ email, nome });
    return { token };
  }

  async login(email: string, senha: string) {
    const usuario = usuarios.find(u => u.email === email);
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
}
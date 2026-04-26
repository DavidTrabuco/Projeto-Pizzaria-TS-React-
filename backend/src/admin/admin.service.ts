import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

let admins: { email: string; senha: string }[] = [];

@Injectable()
export class AdminService {
  constructor(private jwtService: JwtService) {}

  async criar(email: string, senha: string) {
    const jaExiste = admins.find(a => a.email === email);
    if (jaExiste) {
      return { mensagem: 'Esse email já está cadastrado.' };
    }

    const senhaCriptografada = await bcrypt.hash(senha, 10);
    admins.push({ email, senha: senhaCriptografada });
    return { mensagem: 'Admin cadastrado com sucesso!' };
  }

  async login(email: string, senha: string) {
    if (admins.length === 0) {
      return { mensagem: 'Nenhum admin cadastrado ainda.' };
    }

    const admin = admins.find(a => a.email === email);
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
}
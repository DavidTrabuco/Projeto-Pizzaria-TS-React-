import { Injectable } from '@nestjs/common';
import { CreateEnderecoDto } from './dto/create-endereco.dto';
import { UpdateEnderecoDto } from './dto/update-endereco.dto';
import { Endereco } from './entities/endereco.entity';

@Injectable()
export class EnderecosService {
  private enderecos: Endereco[] = [];
  private idCounter = 1;

  create(createEnderecoDto: CreateEnderecoDto) {
    const endereco = { id: this.idCounter++, ...createEnderecoDto };
    this.enderecos.push(endereco);
    return endereco;
  }

  findAll() {
    return this.enderecos;
  }

  findOne(id: number) {
    return this.enderecos.find(endereco => endereco.id === id);
  }

  update(id: number, updateEnderecoDto: UpdateEnderecoDto) {
    const index = this.enderecos.findIndex(e => e.id === id);
    if (index >= 0) {
      this.enderecos[index] = { ...this.enderecos[index], ...updateEnderecoDto };
      return this.enderecos[index];
    }
    return null;
  }

  remove(id: number) {
    const index = this.enderecos.findIndex(e => e.id === id);
    if (index >= 0) {
      this.enderecos.splice(index, 1);
    }
  }
}

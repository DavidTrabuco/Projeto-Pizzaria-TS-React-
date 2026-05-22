import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateEnderecoDto } from './dto/create-endereco.dto';
import { UpdateEnderecoDto } from './dto/update-endereco.dto';
import { Endereco, EnderecoDocument } from './entities/endereco.entity';

@Injectable()
export class EnderecosService {
  constructor(
    @InjectModel(Endereco.name) private enderecoModel: Model<EnderecoDocument>,
  ) {}

  async create(createEnderecoDto: CreateEnderecoDto) {
    return this.enderecoModel.create(createEnderecoDto);
  }

  async findAll() {
    return this.enderecoModel.find();
  }

  async findOne(id: string) {
    return this.enderecoModel.findById(id);
  }

  async update(id: string, updateEnderecoDto: UpdateEnderecoDto) {
    return this.enderecoModel.findByIdAndUpdate(id, updateEnderecoDto, { new: true });
  }

  async remove(id: string) {
    return this.enderecoModel.findByIdAndDelete(id);
  }
}

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePedidoDto } from './dto/create-pedido.dto';
import { UpdatePedidoDto } from './dto/update-pedido.dto';
import { Pedido, PedidoDocument } from './entities/pedido.entity';

@Injectable()
export class PedidosService {
  constructor(
    @InjectModel(Pedido.name) private pedidoModel: Model<PedidoDocument>,
  ) {}

  async create(createPedidoDto: CreatePedidoDto) {
    return this.pedidoModel.create(createPedidoDto);
  }

  async findAll() {
    return this.pedidoModel.find();
  }

  async findOne(id: string) {
    return this.pedidoModel.findById(id);
  }

  async update(id: string, updatePedidoDto: UpdatePedidoDto) {
    return this.pedidoModel.findByIdAndUpdate(id, updatePedidoDto, { new: true });
  }

  async remove(id: string) {
    return this.pedidoModel.findByIdAndDelete(id);
  }
}

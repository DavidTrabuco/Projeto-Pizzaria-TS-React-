import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateReservaDto } from './dto/create-reserva.dto';
import { UpdateReservaDto } from './dto/update-reserva.dto';
import { Reserva, ReservaDocument } from './entities/reserva.entity';

@Injectable()
export class ReservasService {
  constructor(
    @InjectModel(Reserva.name) private reservaModel: Model<ReservaDocument>,
  ) {}

  async create(createReservaDto: CreateReservaDto) {
    return this.reservaModel.create(createReservaDto);
  }

  async findAll() {
    return this.reservaModel.find();
  }

  async findOne(id: string) {
    return this.reservaModel.findById(id);
  }

  async update(id: string, updateReservaDto: UpdateReservaDto) {
    return this.reservaModel.findByIdAndUpdate(id, updateReservaDto, { new: true });
  }

  async remove(id: string) {
    return this.reservaModel.findByIdAndDelete(id);
  }
}

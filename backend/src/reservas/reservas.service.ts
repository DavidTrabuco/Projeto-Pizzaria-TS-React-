import { Injectable } from '@nestjs/common';
import { CreateReservaDto } from './dto/create-reserva.dto';
import { UpdateReservaDto } from './dto/update-reserva.dto';

export interface Reserva {
  id: number;
  nome: string;
  pessoas: number;
  dataHorario: string;
  contato: string;
}

@Injectable()
export class ReservasService {
  private reservas: Reserva[] = [];
  private idCounter = 1;

  create(createReservaDto: CreateReservaDto) {
    const novaReserva: Reserva = {
      id: this.idCounter,
      ...createReservaDto,
    };
    this.idCounter++;
    this.reservas.push(novaReserva);
    return novaReserva;
  }

  findAll() {
    return this.reservas;
  }

  findOne(id: number) {
    return this.reservas.find((reserva) => reserva.id === id);
  }

  update(id: number, updateReservaDto: UpdateReservaDto) {
    const index = this.reservas.findIndex((reserva) => reserva.id === id);
    if (index === -1) {
      return null;
    }
    this.reservas[index] = { ...this.reservas[index], ...updateReservaDto };
    return this.reservas[index];
  }

  remove(id: number) {
    const index = this.reservas.findIndex((reserva) => reserva.id === id);
    if (index === -1) {
      return null;
    }
    const removida = this.reservas.splice(index, 1);
    return removida[0];
  }
}
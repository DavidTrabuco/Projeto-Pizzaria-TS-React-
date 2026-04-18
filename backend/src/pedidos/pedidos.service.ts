import { Injectable } from '@nestjs/common';
import { CreatePedidoDto } from './dto/create-pedido.dto';
import { UpdatePedidoDto } from './dto/update-pedido.dto';

export interface Pedido {
  id: number;
  nomeCliente: string;
  itens: string[];
  total: number;
  status: 'pendente' | 'em preparo' | 'saiu para entrega' | 'entregue';
}

@Injectable()
export class PedidosService {
  private pedidos: Pedido[] = [];
  private idCounter = 1;

  create(createPedidoDto: CreatePedidoDto): Pedido {
    const novoPedido: Pedido = {
      id: this.idCounter++,
      ...createPedidoDto,
    };
    this.pedidos.push(novoPedido);
    return novoPedido;
  }

  findAll(): Pedido[] {
    return this.pedidos;
  }

  findOne(id: number): Pedido | undefined {
    return this.pedidos.find((p) => p.id === id);
  }

  update(id: number, updatePedidoDto: UpdatePedidoDto): Pedido | null {
    const index = this.pedidos.findIndex((p) => p.id === id);
    if (index === -1) return null;
    this.pedidos[index] = { ...this.pedidos[index], ...updatePedidoDto };
    return this.pedidos[index];
  }

  remove(id: number): Pedido | null {
    const index = this.pedidos.findIndex((p) => p.id === id);
    if (index === -1) return null;
    return this.pedidos.splice(index, 1)[0];
  }
}

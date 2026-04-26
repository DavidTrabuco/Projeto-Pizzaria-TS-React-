import { Injectable } from '@nestjs/common';
import { CreatePagamentoDto } from './dto/create-pagamento.dto';
import { Pagamento } from './entities/pagamento.entity';

@Injectable()
export class PagamentosService {
  private pagamentos: Pagamento[] = [];
  private idCounter = 1;

  create(createPagamentoDto: CreatePagamentoDto): Pagamento {
    const novoPagamento: Pagamento = {
      id: this.idCounter++,
      pedidoId: createPagamentoDto.pedidoId,
      metodo: createPagamentoDto.metodo,
      titular: createPagamentoDto.titular,
      total: createPagamentoDto.total,
      status: 'aprovado',
      criadoEm: new Date(),
    };

    this.pagamentos.push(novoPagamento);
    return novoPagamento;
  }

  findAll(): Pagamento[] {
    return this.pagamentos;
  }
}

export class Pagamento {
  id: number;
  pedidoId: number;
  metodo: string;
  titular: string;
  total: number;
  status: string;
  criadoEm: Date;
}

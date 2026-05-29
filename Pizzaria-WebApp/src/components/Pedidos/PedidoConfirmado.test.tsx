import {render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router'
import PedidoConfirmado from './PedidoConfirmado'



const pedidoFake = {
    id: 42,
    nomeCliente: 'João Silva',
    itens: ['Pizza Margherita', 'Coca-Cola'],
    total: 59.90,
    status: 'Em preparo'
}

describe('PedidoConfirmado', () => {
    it('exibe o número do pedido', () => {
      render(<MemoryRouter><PedidoConfirmado pedido={pedidoFake} /></MemoryRouter>)
      expect(screen.getByText('#42')).toBeInTheDocument()
    })

    it('exibe o nome do cliente', () => {
      render(<MemoryRouter><PedidoConfirmado pedido={pedidoFake} /></MemoryRouter>)
      expect(screen.getByText('João Silva')).toBeInTheDocument()
    })

    it('exibe todos os itens do pedido', () => {
      render(<MemoryRouter><PedidoConfirmado pedido={pedidoFake} /></MemoryRouter>)
      expect(screen.getByText('• Pizza Margherita')).toBeInTheDocument()
      expect(screen.getByText('• Coca-Cola')).toBeInTheDocument()
    })

    it('exibe o total formatado', () => {
      render(<MemoryRouter><PedidoConfirmado pedido={pedidoFake} /></MemoryRouter>)
      expect(screen.getByText('R$ 59.90')).toBeInTheDocument()
    })
  })

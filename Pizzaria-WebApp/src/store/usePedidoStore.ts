import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { type PedidoConfirmado } from '../hooks/usePedidos';

interface PedidoStore {
    pedidoConfirmado: PedidoConfirmado | null;
    setPedidoConfirmado: (pedido: PedidoConfirmado | null) => void;
    limparPedido: () => void;
}

export const usePedidoStore = create<PedidoStore>()(
    persist(
        (set) => ({
            pedidoConfirmado: null,//Aqui guarda o valor 
            setPedidoConfirmado: (pedido) => set({ pedidoConfirmado: pedido }), //Aqui faz a função pra salvar 
            limparPedido: () => set({ pedidoConfirmado: null }),// Aqui faz a função para limpar o pedido
        }),
        { name: 'pedido-confirmado' }
    )
);

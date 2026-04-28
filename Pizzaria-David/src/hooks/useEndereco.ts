import { useState, useEffect } from 'react';

export interface Endereco {
    logradouro: string;
    numero: string;
    complemento?: string;
    bairro: string;
    cidade: string;
    estado: string;
}

export function useEndereco() {
    const [endereco, setEndereco] = useState<Endereco | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchEndereco = async () => {
            try {
                const response = await fetch('http://localhost:3000/enderecos');
                if (!response.ok) {
                    throw new Error('Falha ao buscar os endereços da API');
                }
                const data: Endereco[] = await response.json();

                if (data && data.length > 0) {
                    setEndereco(data[0]);
                }
            } catch (err) {
                setError((err as Error).message);
            } finally {
                setLoading(false);
            }
        };

        fetchEndereco();
    }, []);

    return { endereco, loading, error };
}

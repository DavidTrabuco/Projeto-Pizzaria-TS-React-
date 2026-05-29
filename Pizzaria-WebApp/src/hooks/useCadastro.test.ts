import { renderHook, act } from '@testing-library/react'
import { MemoryRouter } from 'react-router'
import { useCadastro } from './useCadastro'

// wrapper necessário porque o hook usa useNavigate
const wrapper = ({ children }: { children: React.ReactNode }) => (
    MemoryRouter({ children })
)

// evento falso para o handleSubmit (substitui o evento real do browser)
const fakeEvent = { preventDefault: vi.fn() } as any

// função auxiliar que preenche todos os campos válidos
function preencherCamposValidos(result: any) {
    act(() => {
        result.current.setNome('João Silva')
        result.current.setEmail('joao@email.com')
        result.current.setPassword('123456')
        result.current.setConfirmPassword('123456')
        result.current.setContato('11987654321')
    })
}

// ─── VALIDAÇÕES ───────────────────────────────────────────────

describe('useCadastro — validações', () => {

    it('exibe erro quando nome está vazio', async () => {
        const { result } = renderHook(() => useCadastro(), { wrapper })

        await act(async () => {
            await result.current.handleSubmit(fakeEvent)
        })

        expect(result.current.erros.nome).toBe('Nome é obrigatório')
    })

    it('exibe erro quando nome contém número', async () => {
        const { result } = renderHook(() => useCadastro(), { wrapper })

        act(() => { result.current.setNome('João2') })

        await act(async () => {
            await result.current.handleSubmit(fakeEvent)
        })

        expect(result.current.erros.nome).toBe('Nome não pode conter números')
    })

    it('exibe erro quando email está vazio', async () => {
        const { result } = renderHook(() => useCadastro(), { wrapper })

        act(() => { result.current.setNome('João Silva') })

        await act(async () => {
            await result.current.handleSubmit(fakeEvent)
        })

        expect(result.current.erros.email).toBe('Email é obrigatório')
    })

    it('exibe erro quando email é inválido', async () => {
        const { result } = renderHook(() => useCadastro(), { wrapper })

        act(() => {
            result.current.setNome('João Silva')
            result.current.setEmail('emailinvalido')
        })

        await act(async () => {
            await result.current.handleSubmit(fakeEvent)
        })

        expect(result.current.erros.email).toBe('Email inválido')
    })

    it('exibe erro quando senha tem menos de 6 caracteres', async () => {
        const { result } = renderHook(() => useCadastro(), { wrapper })

        act(() => {
            result.current.setNome('João Silva')
            result.current.setEmail('joao@email.com')
            result.current.setPassword('123')
        })

        await act(async () => {
            await result.current.handleSubmit(fakeEvent)
        })

        expect(result.current.erros.senha).toBe('A senha precisa ter pelo menos 6 caracteres')
    })

    it('exibe erro quando senhas não coincidem', async () => {
        const { result } = renderHook(() => useCadastro(), { wrapper })

        act(() => {
            result.current.setNome('João Silva')
            result.current.setEmail('joao@email.com')
            result.current.setPassword('123456')
            result.current.setConfirmPassword('654321')
        })

        await act(async () => {
            await result.current.handleSubmit(fakeEvent)
        })

        expect(result.current.erros.senha).toBe('As senhas não coincidem')
    })

    it('exibe erro quando telefone tem menos de 10 dígitos', async () => {
        const { result } = renderHook(() => useCadastro(), { wrapper })

        act(() => {
            result.current.setNome('João Silva')
            result.current.setEmail('joao@email.com')
            result.current.setPassword('123456')
            result.current.setConfirmPassword('123456')
            result.current.setContato('11999')
        })

        await act(async () => {
            await result.current.handleSubmit(fakeEvent)
        })

        expect(result.current.erros.contato).toBe('Telefone precisa ter pelo menos 10 dígitos')
    })

})

// ─── CHAMADA À API ────────────────────────────────────────────

describe('useCadastro — chamada à API', () => {

    afterEach(() => {
        vi.unstubAllGlobals()
        localStorage.clear()
    })

    it('salva o token e marca enviado quando API retorna token', async () => {
        vi.stubGlobal('fetch', vi.fn().mockResolvedValue({
            json: () => Promise.resolve({ token: 'token-fake-123' })
        }))

        const { result } = renderHook(() => useCadastro(), { wrapper })
        preencherCamposValidos(result)

        await act(async () => {
            await result.current.handleSubmit(fakeEvent)
        })

        expect(localStorage.getItem('token_usuario')).toBe('token-fake-123')
        expect(result.current.enviado).toBe(true)
    })

    it('exibe erro quando API retorna mensagem de erro', async () => {
        vi.stubGlobal('fetch', vi.fn().mockResolvedValue({
            json: () => Promise.resolve({ mensagem: 'Email já cadastrado.' })
        }))

        const { result } = renderHook(() => useCadastro(), { wrapper })
        preencherCamposValidos(result)

        await act(async () => {
            await result.current.handleSubmit(fakeEvent)
        })

        expect(result.current.erros.geral).toBe('Email já cadastrado.')
    })

    it('exibe erro quando não há conexão com o servidor', async () => {
        vi.stubGlobal('fetch', vi.fn().mockRejectedValue(new Error('Network error')))

        const { result } = renderHook(() => useCadastro(), { wrapper })
        preencherCamposValidos(result)

        await act(async () => {
            await result.current.handleSubmit(fakeEvent)
        })

        expect(result.current.erros.geral).toBe('Erro ao conectar com o servidor.')
    })

})

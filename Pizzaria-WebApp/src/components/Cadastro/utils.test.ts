import { mascaraTelefone } from './utils'

describe('mascaraTelefone', () => {
  it('formata telefone fixo com 10 digitos', () => {
    expect(mascaraTelefone('1133334444')).toBe('(11) 3333-4444')
  })

  it('formata celular com 11 digitos', () => {
    expect(mascaraTelefone('11987654321')).toBe('(11) 98765-4321')
  })

  it('remove caracteres nao numericos', () => {
    expect(mascaraTelefone('(11) 98765-4321')).toBe('(11) 98765-4321')
  })

  it('retorna string vazia para entrada vazia', () => {
    expect(mascaraTelefone('')).toBe('')
  })
})

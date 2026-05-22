# 🍕 Pizza House
 
> Projeto fullstack de uma pizzaria, desenvolvido para aplicar na prática conhecimentos de desenvolvimento web moderno — do front-end ao deploy em produção.
 
🌐 **[Ver projeto no Deploy](https://pizzaria-trabuco.vercel.app)**  

 
---
 
## 📌 Sobre o Projeto
 
Este projeto foi desenvolvido com o objetivo de simular o site de uma pizzaria, aplicando na prática os conhecimentos adquiridos em desenvolvimento fullstack. A aplicação conta com navegação entre páginas, cardápio, sistema de pedidos e autenticação de usuários.
 
> ⚠️ **Aviso:** Este é um projeto de portfólio. Não insira dados pessoais reais — as informações são armazenadas em banco de dados e podem ser apagadas a qualquer momento.
 
---
 
## 🏗 Funcionamento
 
```
┌─────────────────────────────────────────────────────┐
│           Usuário acessa o site                     │
│                    ↓                                │
│   [Vercel] Frontend React + TypeScript + Vite       │
│                    ↓                                │
│   [Render] Backend NestJS (Docker container)        │
│                    ↓                                │
│   [MongoDB Atlas] Banco de dados na nuvem           │
└─────────────────────────────────────────────────────┘
```
 
---
 
## 🛠 Tecnologias e Ferramentas
 
### Frontend
| Tecnologia | Descrição |
|---|---|
| **React** | Biblioteca para construção de interfaces |
| **TypeScript** | Tipagem estática para JavaScript |
| **Vite** | Build tool moderna e rápida |
| **React Router DOM** | Gerenciamento de rotas e navegação (SPA) |
| **HTML5 & CSS3** | Estrutura e estilização |
 
### Backend
| Tecnologia | Descrição |
|---|---|
| **NestJS** | Framework Node.js para REST API |
| **TypeScript** | Tipagem estática no backend |
| **Swagger (OpenAPI)** | Documentação interativa da API |
| **JWT** | Autenticação com tokens |
| **ValidationPipe** | Validação automática de dados |
 
### Banco de Dados
| Tecnologia | Descrição |
|---|---|
| **MongoDB** | Banco de dados NoSQL |
| **Mongoose** | ODM para modelagem de dados |
| **MongoDB Atlas** | Banco gerenciado na nuvem |
 
### DevOps & Deploy
| Tecnologia | Descrição |
|---|---|
| **Docker** | Containerização da aplicação |
| **Docker Compose** | Orquestração de containers local |
| **Render** | Hospedagem do backend |
| **Vercel** | Hospedagem do frontend |
| **Git + GitHub** | Versionamento de código |
 
---
 
## 📚 Conceitos Aplicados
 
### Frontend
- Criação e organização de componentes React
- Navegação entre páginas sem recarregamento (SPA)
- Componentização e reutilização de componentes
- Gerenciamento de estado com `useState`
- Renderização condicional de componentes
- Responsividade para diferentes dispositivos
- Variáveis de ambiente com Vite (`import.meta.env`)
- Centralização de chamadas à API
### Backend
- Arquitetura REST API com NestJS
- Autenticação com JWT e Bearer Token
- Validação de dados com `ValidationPipe`
- Documentação automática com Swagger
- Configuração de CORS para produção
- Porta dinâmica via variável de ambiente (`process.env.PORT`)
- Organização em módulos (Modules, Controllers, Services)
### Banco de Dados
- Modelagem de dados com Mongoose
- Operações CRUD completas
- Conexão segura via connection string
- Banco gerenciado na nuvem (Atlas)
- Persistência de dados com volumes Docker
### Docker
- Dockerfile multi-stage build (Builder + Produção)
- Imagem Alpine para menor tamanho final
- Cache de layers otimizado
- `.dockerignore` para excluir arquivos desnecessários
- `docker-compose.yml` para orquestrar todos os serviços localmente
- Volumes para persistência do banco local
### Deploy & Produção
- Deploy do frontend na Vercel (integração contínua com GitHub)
- Deploy do backend no Render usando Docker
- Banco de dados gerenciado no MongoDB Atlas
- Variáveis de ambiente separadas por ambiente (local vs produção)
- Network Access configurado para produção
- Deploy automático a cada push no GitHub
### Boas Práticas (12-Factor App)
- **Config:** configurações em variáveis de ambiente, nunca hardcoded
- **Port Binding:** aplicação expõe porta dinamicamente
- **Dev/Prod Parity:** Docker garante ambiente igual em local e produção
- **Codebase:** um repositório, múltiplos ambientes
- **Dependencies:** tudo declarado no `package.json`
---
 
## 🚀 Como Rodar Localmente
 
### Pré-requisitos
- Node.js 20+
- Docker + Docker Compose
- Git
### Com Docker (recomendado)
 
```bash
# Clone o repositório
git clone https://github.com/DavidTrabuco/Projeto-Pizzaria-TS-React
 
# Entre na pasta
cd Projeto-Pizzaria-TS-React
 
# Suba todos os serviços
docker compose up
```
 
### Sem Docker
 
**Backend:**
```bash
cd API
cp .env.example .env
# Preencha as variáveis no .env
npm install
npm run start:dev
```
 
**Frontend:**
```bash
cd Pizzaria-WebApp
cp .env.example .env
# Preencha as variáveis no .env
npm install
npm run dev
```
 
---
 
## ⚙️ Variáveis de Ambiente
 
### Backend (`API/.env`)
```env
PORT=3000
MONGO_URI=mongodb://localhost:27017/pizzaria
JWT_SECRET=qualquer_string_secreta
NODE_ENV=development

```
 
### Frontend (`Pizzaria-WebApp/.env`)
```env
VITE_API_URL=http://localhost:3000
```
 
> ⚠️ Nunca commite o `.env` — ele já está no `.gitignore`  
> Use o `.env.example` como referência
 
---
 
## 📁 Estrutura do Projeto
 

<img width="1850" height="929" alt="image" src="https://github.com/user-attachments/assets/be67fc83-a01c-49ce-914f-bce765de563d" />



 
---
 
## 📱 Responsividade
 
| Dispositivo | Suporte |
|---|---|
| 🖥 Desktop | ✅ |
| 💻 Notebook | ✅ |
| 📱 Smartphone | ✅ |
| 📟 Tablet | ✅ |
 
---
 
## 🗺 Próximos Passos
 
- [ ] Testes automatizados (Jest no NestJS)
- [ ] CI/CD com GitHub Actions
- [ ] Deploy automático apenas quando testes passarem
- [ ] Banner de aviso "projeto de portfólio"
- [ ] Centralizar chamadas à API num service único
---
 
## 👨‍💻 Autor
 
**David Trabuco**  
[GitHub](https://github.com/DavidTrabuco) • [LinkedIn](#)
 
---
 
## 📺 Referências
 
- [Documentação oficial do React](https://react.dev)
- [Documentação oficial do NestJS](https://nestjs.com)
- [Documentação oficial do MongoDB](https://www.mongodb.com/docs)
- [Documentação do Docker](https://docs.docker.com)
- [12-Factor App](https://12factor.net)

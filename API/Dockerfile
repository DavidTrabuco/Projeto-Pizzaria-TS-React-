# ============================================
# ESTÁGIO 1 — BUILDER
# Compila o TypeScript em JavaScript
# ============================================
FROM node:20-alpine AS builder

WORKDIR /app

# Copia dependências primeiro (cache)
COPY package*.json ./

# Instala TODAS as deps (incluindo devDependencies pro build)
RUN npm install

# Copia o código fonte
COPY . .

# Compila TypeScript → JavaScript (gera /app/dist)
RUN npm run build


# ============================================
# ESTÁGIO 2 — PRODUÇÃO
# Só Node + dist compilado + deps de produção
# ============================================
FROM node:20-alpine

WORKDIR /app

# Copia só o package.json
COPY package*.json ./

# Instala APENAS dependências de produção (sem dev)
RUN npm install --only=production

# Copia apenas o resultado do build do estágio 1
COPY --from=builder /app/dist ./dist

# Documenta a porta
EXPOSE 3000

# Roda o JavaScript compilado (não usa npm run start:dev!)
CMD ["node", "dist/main.js"]
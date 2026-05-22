
#ESTAGIO 1 - CONSTRUIR O APP COM NODE

FROM node:20-alpine AS builder

WORKDIR /app

COPY package.json ./

RUN npm install

COPY . .

RUN npm run build 

#ESTAGIO 2 - SERVIR O APP COM NGINX EM PRODUCAO

FROM nginx:alpine

COPY --from=builder /app/dist /usr/share/nginx/html

# 👇 LINHA NOVA: copia nossa configuração customizada
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
FROM node:18

WORKDIR /app

COPY package*.json ./

RUN npm install

# Copia o restante do código da API para o diretório de trabalho do container
COPY . .

EXPOSE 3000

CMD ["npm", "start"]
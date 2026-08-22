FROM nginx:alpine

WORKDIR /usr/share/nginx/html

# O ponto final significa "copie para o diretório atual do WORKDIR"
COPY . .

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
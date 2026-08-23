FROM nginx:alpine

# Define a pasta padrão do Nginx como área de trabalho
WORKDIR /usr/share/nginx/html

# MODO DEVOPS: Limpa tudo que veio de fábrica no Nginx (incluindo o index.html padrão)
RUN rm -rf ./*

# Copia os arquivos do seu repositório para a pasta limpa
COPY . .

# Expõe a porta 80
EXPOSE 80

# Inicia o Nginx
CMD ["nginx", "-g", "daemon off;"]
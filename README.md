# ⛽ Fuel App - DevOps CI/CD Pipeline

<p align="center">
  <img src="[https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)" alt="Docker">
  <img src="[https://img.shields.io/badge/AWS_EC2-FF9900?style=for-the-badge&logo=amazonaws&logoColor=white](https://img.shields.io/badge/AWS_EC2-FF9900?style=for-the-badge&logo=amazonaws&logoColor=white)" alt="AWS EC2">
  <img src="[https://img.shields.io/badge/AWS_ECR-FF9900?style=for-the-badge&logo=amazonaws&logoColor=white](https://img.shields.io/badge/AWS_ECR-FF9900?style=for-the-badge&logo=amazonaws&logoColor=white)" alt="AWS ECR">
  <img src="[https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white](https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white)" alt="GitHub Actions">
</p>

> Uma aplicação web conteinerizada, focada em demonstrar práticas modernas de DevOps. A aplicação realiza o cálculo de gastos de combustível para viagens (baseado no preço, distância e autonomia do veículo), mas o objetivo principal do projeto é demonstrar a **Infraestrutura (AWS)** e o **Pipeline de Integração/Entrega Contínuas (CI/CD)**.

## 🏗️ Arquitetura e Fluxo de CI/CD

O fluxo de implantação é totalmente automatizado. Ao realizar um *push* na branch `main`, o GitHub Actions assume o controle do *build*, registro da imagem e *deploy* direto no servidor de produção.

```mermaid
sequenceDiagram
    participant Dev as Desenvolvedor
    participant Git as GitHub (Repositório)
    participant Actions as GitHub Actions
    participant ECR as AWS ECR (Registry)
    participant EC2 as AWS EC2 (Servidor)

    Dev->>Git: Git Push (código novo)
    Git->>Actions: Dispara a Pipeline de CI/CD
    Actions->>Actions: Docker Build
    Actions->>ECR: Docker Push (Envia Imagem)
    Actions->>EC2: Acesso via SSH
    EC2->>ECR: Docker Pull (Baixa Imagem)
    EC2->>EC2: Docker Run (Reinicia a Aplicação na Porta 80)
```

## 🚀 Tecnologias Utilizadas

**Infraestrutura e DevOps:**
- **Docker:** Conteinerização da aplicação.
- **AWS ECR (Elastic Container Registry):** Armazenamento privado das imagens.
- **AWS EC2 (Elastic Compute Cloud):** Servidor de produção.
- **GitHub Actions:** Automação da pipeline.

**Aplicação Base:**
- HTML, CSS e JS puro rodando sobre um servidor **Nginx** conteinerizado.

## 🔐 Configuração do Pipeline (Secrets)

Para o GitHub Actions orquestrar o deploy na AWS, as seguintes variáveis estão configuradas:
- `AWS_ACCESS_KEY_ID` & `AWS_SECRET_ACCESS_KEY`
- `AWS_REGION`
- `ECR_REPOSITORY`
- `EC2_HOST` & `EC2_USER`
- `EC2_SSH_KEY`

## 💻 Como executar o projeto localmente

1. Clone o repositório:
```bash
git clone https://github.com/matheus98sto-stack/calculo-combustivel.git
cd calculo-combustivel
```

2. Faça o build da imagem Docker:
```bash
docker build -t fuel-app-local .
```

3. Execute o container:
```bash
docker run -d -p 8080:80 fuel-app-local
```

Acesse `http://localhost:8080` no seu navegador.

---
Desenvolvido por **Matheus Oliveira**
- LinkedIn: [in/matheus-santos-de-oliveira-474139197](https://www.linkedin.com/in/matheus-santos-de-oliveira-474139197/)
- GitHub: [matheus98sto-stack](https://github.com/matheus98sto-stack)

# ⛽ Fuel App - DevOps CI/CD Pipeline

<p align="center">
  <img src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white" alt="Docker">
  <img src="https://img.shields.io/badge/AWS_EC2-FF9900?style=for-the-badge&logo=amazonaws&logoColor=white" alt="AWS EC2">
  <img src="https://img.shields.io/badge/AWS_ECR-FF9900?style=for-the-badge&logo=amazonaws&logoColor=white" alt="AWS ECR">
  <img src="https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white" alt="GitHub Actions">
</p>

> Uma aplicação web conteinerizada focada em demonstrar práticas modernas de DevOps. O projeto calcula a melhor opção de abastecimento (Álcool vs Gasolina), mas o verdadeiro destaque é sua **Infraestrutura em Nuvem (AWS)** e o **Pipeline de Integração/Entrega Contínuas (CI/CD)**.

## 🏗️ Arquitetura e Fluxo de CI/CD

O fluxo de implantação é **100% automatizado**. Ao realizar um *push* na branch `main`, o GitHub Actions assume o controle do processo de linting, build da imagem Docker, registro no repositório de imagens e deploy direto no servidor de produção.

```mermaid
sequenceDiagram
    participant Dev as Desenvolvedor
    participant Git as GitHub (Repositório)
    participant Actions as GitHub Actions
    participant ECR as AWS ECR (Registry)
    participant EC2 as AWS EC2 (Servidor)

    Dev->>Git: Push na branch 'main'
    Git->>Actions: Dispara a Pipeline CI/CD
    Actions->>Actions: Checkout & Setup Docker
    Actions->>Actions: Docker Build (App)
    Actions->>ECR: Autentica e Executa Docker Push
    Actions->>EC2: Acesso Remoto via SSH
    EC2->>ECR: Docker Pull (Baixa a nova imagem)
    EC2->>EC2: Docker Stop & Remove container antigo
    EC2->>EC2: Docker Run (Sobe a nova versão na Porta 80)

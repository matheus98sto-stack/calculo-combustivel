# ⛽ Fuel App - DevOps CI/CD Pipeline

Uma aplicação web conteinerizada, focada em demonstrar práticas modernas de DevOps, incluindo Infraestrutura, Conteinerização (Docker) e Integração/Entrega Contínuas (CI/CD) utilizando AWS e GitHub Actions.

## 🏗️ Arquitetura do Projeto

O fluxo de implantação é totalmente automatizado. Ao realizar um *push* na branch `main`, o GitHub Actions assume o controle do *build*, registro e *deploy* da aplicação na AWS.

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
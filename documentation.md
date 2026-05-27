# Documentação do Pipeline CI/CD - MBA Mackenzie

Este documento detalha os conceitos, ferramentas e processos aplicados no desenvolvimento deste projeto para a disciplina de **DevOps & DataOps**.

## 1. O que é CI/CD?

### CI (Continuous Integration - Integração Contínua)
A Integração Contínua é a prática de automatizar a integração de alterações de código de vários contribuidores em um único projeto de software. 
Neste projeto, o CI é acionado a cada `push` ou `pull request` na branch `master`. Ele garante que:
- O código HTML siga as melhores práticas (via **HTMLHint**).
- O código CSS esteja padronizado e livre de erros (via **Stylelint**).
- As funcionalidades básicas e textos obrigatórios estejam presentes (via **Testes Automatizados**).

### CD (Continuous Deployment - Entrega Contínua)
O Deploy Contínuo é a fase onde as alterações que passaram em todos os estágios do pipeline de produção são liberadas automaticamente para os usuários.
Aqui, o CD utiliza o **GitHub Pages** para hospedar o site de forma automática assim que os testes de CI são validados na branch `master`.

---

## 2. Ferramentas Utilizadas

- **GitHub Actions**: Orquestrador do pipeline. Define os "jobs" e "steps" de automação.
- **Node.js**: Ambiente de execução para as ferramentas de validação e testes.
- **HTMLHint**: Ferramenta de Linting que analisa arquivos HTML em busca de erros de sintaxe ou tags mal formatadas.
- **Stylelint**: Ferramenta de Linting para CSS que garante a qualidade e padronização das folhas de estilo, utilizando a configuração `stylelint-config-standard`.
- **Custom Test Script (`test.js`)**: Script em JavaScript que realiza a validação funcional do conteúdo do site (ex: presença de nomes, RA, etc).

---

## 3. Estrutura do Pipeline

O pipeline está definido em `.github/workflows/ci-cd.yml` e dividido em dois jobs principais:

### Job 1: Build & Test (CI)
1. **Checkout**: Baixa o código do repositório para o servidor do GitHub.
2. **Setup Node.js**: Configura o ambiente Node.js na versão 20.
3. **Install Dependencies**: Instala todas as dependências necessárias via `npm install`.
4. **Run Lint**: Executa `npm run lint` (que engloba `lint:html` e `lint:css`) para validar o código.
5. **Run Tests**: Executa `npm test` para validar o conteúdo.
6. **Upload Artifact**: Comprime e armazena a pasta `site/` para ser usada no próximo job.

### Job 2: Deploy (CD)
1. **Environment Setup**: Configura o ambiente `github-pages`.
2. **Deploy to GitHub Pages**: Utiliza a action oficial do GitHub (`actions/deploy-pages`) para publicar os arquivos validados de forma segura e automática.

---

## 4. Como os Testes Funcionam?

Os testes foram desenhados para serem simples, porém eficazes para o escopo do projeto:
- **Linting (HTML & CSS)**: Garante integridade estrutural e visual. Se houver uma tag não fechada ou uma propriedade CSS inválida, o pipeline falha e o deploy não acontece.
- **Testes de Conteúdo**: O script `test.js` lê o arquivo `index.html` e busca por strings obrigatórias. Isso garante que informações críticas (como identificação do aluno ou instituição) nunca sejam removidas acidentalmente.

---

## 5. Execução Local

Para validar as alterações localmente antes de enviar para o GitHub:
1. Instale as dependências: `npm install`
2. Execute o linting: `npm run lint`
3. Execute os testes: `npm test`

---

## 6. Conclusão

A implementação deste pipeline demonstra como a automação reduz o erro humano e acelera o ciclo de entrega. Em um cenário de **DataOps**, esses mesmos conceitos são aplicados para validar pipelines de dados, garantindo que o dado chegue ao destino com qualidade e integridade.

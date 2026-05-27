# Pipeline CI/CD Mackenzie

Este projeto demonstra um pipeline de CI/CD automatizado utilizando **GitHub Actions**.

## Objetivo
- **CI (Integração Contínua)**: Validar o código HTML (linting) e executar testes automatizados simples.
- **CD (Deploy Contínuo)**: Publicar automaticamente o site no **GitHub Pages** após a aprovação nos testes.

## Estrutura do Projeto
- `site/`: Contém os arquivos estáticos do site.
- `test.js`: Script de teste em Node.js.
- `.github/workflows/ci-cd.yml`: Configuração do pipeline.

## Como rodar localmente
1. Instale as dependências:
   ```bash
   npm install
   ```
2. Rode o linter:
   ```bash
   npm run lint
   ```
3. Rode os testes:
   ```bash
   npm test
   ```

## Como configurar o Deploy
1. Crie um repositório no GitHub.
2. Vá em **Settings > Pages**.
3. Em **Build and deployment > Source**, selecione **GitHub Actions**.
4. Faça o push do código para a branch `main`.
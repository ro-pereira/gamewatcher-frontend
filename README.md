# GameWatcher — Frontend

Plataforma de consulta de transmissões de jogos de futebol. O GameWatcher permite consultar partidas de futebol e descobrir onde assisti-las, integrando front-end, API, banco de dados e automação de coleta de dados em uma aplicação full-stack.

Este repositório contém o **front-end** da aplicação. A API que o alimenta está no repositório [`gamewatcher-backend`](https://github.com/ro-pereira/gamewatcher-backend).

## Sobre o projeto

O GameWatcher foi desenvolvido para facilitar a consulta de partidas de futebol e suas respectivas opções de transmissão, reunindo em um só lugar informações que normalmente estão espalhadas em diferentes fontes.

Principais funcionalidades e aspectos técnicos do projeto como um todo:

- Interface desenvolvida em React.js e TypeScript
- API REST construída com Node.js e Express
- Persistência e consulta de dados com PostgreSQL
- Web scraping com Selenium para coleta automatizada de informações sobre jogos e transmissões
- Integração entre front-end e API para consumo e apresentação dos dados
- Configuração de CORS para comunicação entre as aplicações
- Interface responsiva e focada na experiência do usuário

## Stack (front-end)

- [Next.js](https://nextjs.org) 16 (App Router)
- [React](https://react.dev) 19 + TypeScript
- [MUI (Material UI)](https://mui.com) + Emotion
- [GSAP](https://gsap.com) para animações
- ESLint

## Pré-requisitos

- Node.js 18+
- A API [`gamewatcher-backend`](https://github.com/ro-pereira/gamewatcher-backend) rodando localmente ou acessível remotamente

## Como rodar localmente

1. Clone o repositório:

   ```bash
   git clone https://github.com/ro-pereira/gamewatcher-frontend.git
   cd gamewatcher-frontend
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Configure as variáveis de ambiente (crie um arquivo `.env.local` na raiz do projeto):

   ```bash
   NEXT_PUBLIC_API_URL=http://localhost:PORTA_DA_API
   ```

4. Rode o servidor de desenvolvimento:

   ```bash
   npm run dev
   ```

5. Abra [http://localhost:3000](http://localhost:3000) no navegador para ver o resultado.

## Scripts disponíveis

| Script | Descrição |
| --- | --- |
| `npm run dev` | Inicia o servidor de desenvolvimento |
| `npm run build` | Gera o build de produção |
| `npm run start` | Inicia o servidor com o build de produção |
| `npm run prod` | Executa build + start em sequência |
| `npm run lint` | Roda o ESLint |

## Estrutura do projeto

```
├── app/          # Rotas e páginas (Next.js App Router)
├── src/          # Componentes, lógica e demais códigos-fonte
├── public/       # Arquivos estáticos
└── .vscode/      # Configurações do editor
```

## Repositórios relacionados

- [`gamewatcher-backend`](https://github.com/ro-pereira/gamewatcher-backend) — API REST, banco de dados e web scraping

## Objetivo do projeto

Desenvolver uma aplicação full-stack completa, integrando desenvolvimento front-end, criação de APIs, persistência de dados e automação de coleta de informações.

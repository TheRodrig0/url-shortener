# URL Shortener

![Preview do Projeto](https://github.com/user-attachments/assets/89535c48-8261-4dfa-adf7-21c035bf82dc)

Um simples encurtador de URLs que permite transformar links longos em versões mais curtas.

## Funcionalidades

- Encurtar URLs longas
- Copiar URL encurtada
- Redirecionamento para URL original
- Proteção básica com rate limiting

## Tecnologias

### Backend
- Node.js
- Fastify
- MongoDB
- TypeScript

### Frontend
- Vite
- JavaScript
- CSS

## Como Executar

### Pré-requisitos
- Node.js
- MongoDB

### Backend

1. Entre na pasta do backend:
```bash
cd backend
```

2. Instale as dependências:
```bash
npm install
```

3. Configure o `.env`:
```env
DATABASE_URL="sua_url_do_mongodb"
PORT=3000
```

4. Rode o projeto:
```bash
npm run dev
```

### Frontend

1. Entre na pasta do frontend:
```bash
cd frontend
```

2. Instale as dependências:
```bash
npm install
```

3. Configure o `.env`:
```env
VITE_API_URL="http://localhost:3000"
```

4. Rode o projeto:
```bash
npm run dev
```

## Deploy (Vercel)

### Backend
```bash
vercel
```

### Frontend
```bash
vercel
```

Lembre-se de configurar as variáveis de ambiente na Vercel.

## Licença

Apache 2.0
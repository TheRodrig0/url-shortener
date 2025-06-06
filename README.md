# URL Shortener

![Preview do Projeto](https://github.com/user-attachments/assets/89535c48-8261-4dfa-adf7-21c035bf82dc)

Um encurtador de URLs moderno e eficiente, construído com uma arquitetura full-stack robusta.

## 🚀 Funcionalidades

- Encurtamento de URLs longas para links mais curtos e amigáveis
- Interface moderna e responsiva
- Redirecionamento rápido
- Proteção contra spam com rate limiting
- Validação de URLs
- Feedback visual durante operações
- Cópia de URL com um clique

## 🛠️ Tecnologias Utilizadas

### Backend
- Node.js
- Fastify
- MongoDB
- TypeScript
- Zod (validação)
- Rate Limiting

### Frontend
- Vite
- JavaScript
- CSS Moderno
- Design Responsivo

## 📦 Como Executar

### Pré-requisitos
- Node.js
- MongoDB
- npm ou yarn

### Backend

1. Entre na pasta do backend:
```bash
cd backend
```

2. Instale as dependências:
```bash
npm install
```

3. Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:
```env
DATABASE_URL="sua_url_do_mongodb"
PORT=3000
```

4. Execute o servidor de desenvolvimento:
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

3. Crie um arquivo `.env` na raiz do projeto com:
```env
VITE_API_URL="http://localhost:3000"
```

4. Execute o servidor de desenvolvimento:
```bash
npm run dev
```

## 🚀 Deploy

### Backend (Vercel)
1. Configure as variáveis de ambiente na Vercel:
   - `DATABASE_URL`
   - `PORT`

2. Deploy via CLI:
```bash
vercel
```

### Frontend (Vercel)
1. Configure as variáveis de ambiente na Vercel:
   - `VITE_API_URL`

2. Deploy via CLI:
```bash
vercel
```

## 🌟 Como Usar

1. Acesse a aplicação através do navegador
2. Cole uma URL longa no campo de entrada
3. Clique em "Encurtar URL"
4. Copie a URL encurtada usando o botão "Copiar"
5. Compartilhe a URL encurtada!

## 🔒 Segurança

- Rate limiting para prevenir abuso
- Validação de URLs para prevenir redirecionamentos maliciosos
- Sanitização de entradas
- Proteção contra XSS

## 📝 Licença

Este projeto está sob a licença Apache 2.0. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👨‍💻 Autor

TheRodrig0

---
⭐ Se este projeto te ajudou, considere dar uma estrela no GitHub!
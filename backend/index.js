// Importa os pacotes
const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
require('dotenv').config();

// Inicializa o app
const app = express();
const port = process.env.PORT || 3001;

// Middlewares
app.use(cors());
app.use(express.json()); // Permite receber JSON nas requisições

// Rota de teste
app.get('/', (req, res) => {
  res.send('API do sistema de estoque funcionando!');
});

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

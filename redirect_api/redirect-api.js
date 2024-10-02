const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.use(express.json());

app.post('/endpoint', (req, res) => {
  const dadosRecebidos = req.body;

  console.log('Dados recebidos:', dadosRecebidos);

  res.status(200).json({ mensagem: 'Dados recebidos com sucesso' });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Servidor da segunda API rodando na porta ${PORT}`);
});
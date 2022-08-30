require('dotenv/config')
const express = require('express')

const TransacoesRepositorio = require("./transacoes-repositorio")
const app = express()

const port = 3001;
//precisa ter acessar o body
app.use(express.json());
app.use(express.static(`${__dirname}/public`))

app.get('/transacoes', async (req,res) => {
  const repositorio  = new TransacoesRepositorio()
  const transacoes = await repositorio.listarTransacoes()
  res.send(transacoes)
})

app.post('/transacoes', async (req,res) =>{
  const repositorio  = new TransacoesRepositorio()
  const transacao = req.body
  await repositorio.criarTransacao(transacao)
  res.status(201).send(transacao)
})


app.get('/criar-transacao',(req,res) =>{
  const repositorio = new TransacoesRepositorio()
  const transacao = {
    valor:10,
    descricao:"Pastel"
  }
  repositorio.criarTransacao(transacao)
  res.status(201).send(transacao)
})

app.listen(port, () => {
  console.log(`Servidor ouvindo na porta ${port}`);
});
const express = require('express')
const app = express()

const port = 3001;

app.use(express.static(`${__dirname}/public`))

app.get('ola', (req,res) => {
  res.send("Ola Mundo!")
})

server.listen(port, () => {
  console.log(`Servidor ouvindo na porta ${port}`);
});
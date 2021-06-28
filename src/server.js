const express = require('express') // → Importa o express
const route = require('./route')    // → Importa o arquivo de rota
const path = require('path') // → Importa path

const server = express() // Servidor recebe o express ativo

server.set('view engine', 'ejs') // → Define o view engine como o ejs

server.use(express.static('public')) // → define a pasta 'public' como pasta de arquivos estáticos (CCS & imagens)|

server.use(express.urlencoded({extended: true}))

server.use(route) // → servidor usa o arquivo de rota

server.set('views', path.join(__dirname, 'views')) // → define o local da pasta views | _dirname → pega o caminho do diretório atual | .join → junta o _disname com 'views'

server.listen(3000, () => console.log("RODANDO")) // → coloca o servidor para rodar na porta :3000 e cria uma  arrow function para dar um console.log quando o servidor começa a rodar

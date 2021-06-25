const express = require('express')

const route = express.Router()

route.get('/', (req, res) => res.render("index")) // → Caminho da pasta 'home'
route.get('/room', (req, res) => res.render("room")) // → Caminho da pasta 'room'
route.get('/create-pass', (req, res) => res.render("create-pass")) // → Caminho da pasta 'create-pass'

// Formato que o formulário de dentro da modal tem que passar a info
// route.get('/room/:room/:question/:action')

module.exports = route
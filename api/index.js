const express = require('express')
const app = require ('./controllers/cityController')

app.listen(3000, () => console.log('servidor rodando na porta 3000'))

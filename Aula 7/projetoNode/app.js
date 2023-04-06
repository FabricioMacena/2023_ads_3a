// fazer a importação do express
const express = require('express');

// rotas (quando o servidor for acessado, ele irá para a rota)
const router = express.Router();
router.get('/',(req, res) =>{
    res.send('Olá Mundo.');
});

// configurações básicas do aplicativo
const app = express();
app.use('/', router);      // passamos apenas uma rota, pois foi criada 1

module.exports = app;       // exportamos o app pois iremos usa-la no servidor


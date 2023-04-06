const express = require('express');


// rotas (quando o servidor for acessado, ele irá para a rota)
const router = express.Router();
router.get('/',(req, res) =>{
    res.send('Olá Mundo 2023');
});

router.get('/contato',(req, res) =>{
    res.send('Página com informação de contato');
});

router.get('/cadastro',(req, res) =>{
    res.send('Página de cadastro de aplicação');
});

module.exports = router;
const express = require('express');


// rotas (quando o servidor for acessado, ele irá para a rota)
const router = express.Router();


/*
router.get('/',(req, res) =>{
    let nome = req.query.nome;
    let idade = req.query.idade;
    res.send('Olá ' + nome + ' ,você tem ' + idade + ' anos de idade');   // utiliza a variável declarada na requisição do servidor
});
*/

/*
router.get('/post/:id',(req, res) =>{
    let id = req.params.id
    res.send('ID do post: ' + id);
});
*/

/*
router.get('/',(req, res) =>{
    let nome = req.query.nome;
    let sobrenome = req.query.sobrenome

    res.json({
        nomeCompleto:nome + ' ' + sobrenome
    })
});
*/

router.get('/',(req, res) =>{
    let nome = req.query.nome;
    let sobrenome = req.query.sobrenome

    res.json(req.query)
});

router.get('/contato',(req, res) =>{
    res.send('Página com informação de contato');
});

router.get('/cadastro',(req, res) =>{
    res.send('Página de cadastro de aplicação');
});

module.exports = router;
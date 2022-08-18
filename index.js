///chamar a blioteca express.
const express = require('express')

///armazenar na variavel server a biblioteca express()
const server = express();

///chamar a funcao listen para "escutar a porta que vamos utilizar"
server.listen(3500);
///criando a rota get para testar a API

//server.get('/teste', () =>{
    //console.log('Deu certo!!!')
//})

///vamos criar dois paremetros REQ -> representa as dados da aplicaçao e RES
/// -> representa os dados que vai para o frontend

//server.get('/teste', (req, res) =>{
    //return res.send('Ola mundo')
//})
//server.get('/teste', (req, res) => {
    ///return res.json({teste: 'Deu certo'})
//})

///teste com Query
server.get('/teste', (req, res) => {
    const escola = req.query.escola;
    return res.json({teste: `Estamos estudando na ${ escola }`});
})
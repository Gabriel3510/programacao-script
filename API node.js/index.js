const express = require('express')
var morgan = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors())

let db = [
    {'1': {Nome: 'Gabriel', Funcao: 'dev', Salario: '1000'}},
    {'2': {Nome: 'Higor', Funcao: 'dev', Salario: '1500'}},
    {'3': {Nome: 'Bruno', Funcao: 'dev', Salario: '2000'}}
]

app.get('/', (req, res) => {
    return res.json(db)
})

app.post('/add', (req, res) => {
    const body = req.body

    if(!body)
        return res.status(400).end()
    db.push(body)
    return res.json(body)
})

app.delete('/:id', (req, res) => {
    const id = req.params.id

    let newDB = db.filter(item => {
        if(!item[id])
          return item  
    })
    db = newDB
    return res.send(newDB)
})


app.listen(2000, () => {
    console.log('Express started at https://localhost:2000')
})
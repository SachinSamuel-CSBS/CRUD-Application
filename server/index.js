const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const ItemModel = require('./models/items')

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb://127.0.0.1:27017/CRUD")

app.get("/", (req,res) => {
    ItemModel.find({})
    .then(users => res.json(users))
    .catch(err => console.log(err))
})

app.post("/addItem", (req, res) => {
    ItemModel.create(req.body)
    .then(item => res.json(item))
    .catch(err => res.json(err))
})

app.get('/getItem/:id', (req, res) => {
    const id = req.params.id;
    ItemModel.findById({_id:id})
    .then(user => res.json(user))
    .catch(err => res.json(err))
})


app.put('/editItem/:id', (req, res) => {
    const id = req.params.id;
    ItemModel.findByIdAndUpdate({_id: id}, {
        name: req.body.name,
        description: req.body.description
    }).then(item => res.json(item))
    .catch(err => res.json(err))
})

app.delete('/deleteItem/:id', (req,res) => {
    const id = req.params.id;
    ItemModel.findByIdAndDelete({_id: id})
    .then(item => res.json(item))
    .catch(err => res.json(err))
})

app.listen(3001, () => {
    console.log("Server is running")
})
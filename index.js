const express = require('express')
const app = express()
const path = require('path')
const axios = require('axios')
const { v4: uuid} = require('uuid')

var comments = []
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true}))

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '/views'))

app.listen(3000, () => {
    console.log('works')
})

app.get('/', (req, res) => {
    res.render('home', {comments})
})

app.post('/comment', (req, res) => {
    console.log(req.body)
    const { username, comment} = req.body
    const id = uuid()
    comments.push({username, comment, id})
    console.log(comments)
    res.redirect('/', username, comment, id)
})

app.patch('/comment/:id', (req, res) => {
    const { id } = req.params 
    const comment = comments.find(c => c.id === id)
    console.log(comment)
    res.redirect('/' )
})
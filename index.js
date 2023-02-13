const express = require('express')
const app = express()
const path = require('path')
const axios = require('axios')
const { v4: uuid} = require('uuid')
const methodOverride = require('method-override')

var comments = []
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true}))
app.use(methodOverride('_method'))

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '/views'))

app.listen(3000, () => {
    console.log('works')
})

app.get('/', (req, res) => {
    res.render('home', {comments})
})

app.post('/comment', (req, res) => {
    const { username, comment} = req.body
    const id = uuid()
    comments.push({username, comment, id})
    res.redirect('/', username, comment, id)
})

app.patch('/comment/:id', (req, res) => {
    const { id } = req.params 
    const { newComment } = req.body
    const comment = comments.find(c => c.id === id)
    comment.comment = newComment
    res.redirect('/' )
})

app.delete('/comment/:id', (req, res) => {
    const { id } = req.params
    comments = comments.filter(c => c.id !== id)
    res.redirect('/')
})
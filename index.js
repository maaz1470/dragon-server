const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const categories = require('./data/categories.json')
const news = require('./data/news.json')
const cors = require('cors')

app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello World');
})

app.get('/categories', (req, res) => {
    res.send(categories);
})

app.get('/news', (req, res) => {
    res.send(news)
})

app.get('/categories/:id',(req, res) => {
    const id = req.params.id;
    if(id == 0){
        res.send(news)
    }else{
        const data = news.filter(singleNews => singleNews.category_id == id);
        res.send(data)
    }
    
})

app.get('/news/:id',(req, res) => {
    const id = req.params.id;
    const data = news.find(singleNews => singleNews._id == id)
    res.send(data)
})

app.listen(port)
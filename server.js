require('dotenv').config();
const express = require('express');
const request = require('request');
const app = express();

app.set('view engine', 'ejs');
app.use (express.static('static'));

app.get('/', function(req, res){
    res.render('index');
});

//GET find all post/views page 
app.get('/posts', function(req, res){
   let postsUrl = 'https://jsonplaceholder.typicode.com/posts'; 
    request(postsUrl, function(error, response, body){
        let articles = JSON.parse(body);
        res.render('posts', { articles });
    });
});

var server = app.listen(process.env.PORT || 3000);

module.exports = server;

var express = require('express');

var app = express.createServer();
app.use(express.static(__dirname + '/public'));

app.set('view engine', 'ejs');
app.set('view options', {
  layout: false
});

app.get('/', function(req, res){
    res.render('index');
});

app.listen(process.env.PORT || 3000);
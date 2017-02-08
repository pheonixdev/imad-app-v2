var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));



app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
  var visited = 0;
  visited = visited + 1;
    var span = document.getElementById('visit');
    span.innerHTML = visited.toString();
});


var counter = 0;
app.get('/counter', function (req, res){
    counter = counter + 1;
    res.send(counter.toString());
});

app.get('/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/main.js', function (req, res){
    res.sendFile(path.join(__dirname,'ui','main.js'));
});

app.get('/prof_pic.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'prof_pic.jpg'));
});

app.get('/:filename', function (req, res) {
res.sendFile(path.join(__dirname, 'ui', req.params.filename));
});

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});

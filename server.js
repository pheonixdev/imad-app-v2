var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var pages= {
    pageOne: {
        title: 'First Page|Pheonixdev',
        date: '2 Feb,2017',
        content: `<p>
        
        
        
        `
    },
    pageTwo: {
        title: 'Second Page|Pheonixdev',
        date: '2 Feb,2017',
        content: `
        
        
        
        `
    },
    pageThree: {
        title: 'Third Page|Pheonixdev',
        date: '2 Feb,2017',
        content: `
        
        
        
        `
    }
};
       




app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});

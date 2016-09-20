var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articleOne = {
    title:'article One|Mayank Gera',
    heading:'Arcticle One',
    date:'sept,21',
    content:   `
        <p>
            yo aby ksauhd asjkdhsadkalsd jsadkjasdka.yo aby ksauhd asjkdhsadkalsd jsadkjasdka.yo aby ksauhd asjkdhsadkalsd jsadkjasdka.yo aby ksauhd asjkdhsadkalsd jsadkjasdka.yo aby ksauhd asjkdhsadkalsd jsadkjasdka.yo aby ksauhd asjkdhsadkalsd jsadkjasdka.yo aby ksauhd asjkdhsadkalsd jsadkjasdka.yo aby ksauhd asjkdhsadkalsd jsadkjasdka.yo aby ksauhd asjkdhsadkalsd jsadkjasdka.
        </p>
        <p>
            yo aby ksauhd asjkdhsadkalsd jsadkjasdka.yo aby ksauhd asjkdhsadkalsd jsadkjasdka.yo aby ksauhd asjkdhsadkalsd jsadkjasdka.yo aby ksauhd asjkdhsadkalsd jsadkjasdka.yo aby ksauhd asjkdhsadkalsd jsadkjasdka.yo aby ksauhd asjkdhsadkalsd jsadkjasdka.yo aby ksauhd asjkdhsadkalsd jsadkjasdka.yo aby ksauhd asjkdhsadkalsd jsadkjasdka.yo aby ksauhd asjkdhsadkalsd jsadkjasdka.
        </p>  `
};

function createTemplate(data){
var content = data.content;   
var htmlTemplate= `
<html>
<head>
    <title>Article ONE | MayankGera</title>
    <meta name="viewport" content="width-device-width, initial-scale=1" />
</head>    
<body>
    <div>
        <a href="/">Home</a>
    </div>
    <div>
        ${content}
    </div>
    
</body>   
</html>

`;
    return htmlTemplate;
}


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/article-one',function(req,res){
  res.send(createTemplate(articleOne));
});
app.get('/article-two',function(req,res){
    res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});
app.get('/article-three',function(req,res){
    res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
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

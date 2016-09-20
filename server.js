var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles={
'article-one' : {
    title:'article One|Mayank Gera',
    heading:'Arcticle One',
    date:'sept,21',
    content:   `
        <p>
            BCCCCCCCCCCCCCCCyo aby ksauhd asjkdhsadkalsd jsadkjasdka.yo aby ksauhd asjkdhsadkalsd jsadkjasdka.yo aby ksauhd asjkdhsadkalsd jsadkjasdka.yo aby ksauhd asjkdhsadkalsd jsadkjasdka.yo aby ksauhd asjkdhsadkalsd jsadkjasdka.yo aby ksauhd asjkdhsadkalsd jsadkjasdka.yo aby ksauhd asjkdhsadkalsd jsadkjasdka.yo aby ksauhd asjkdhsadkalsd jsadkjasdka.yo aby ksauhd asjkdhsadkalsd jsadkjasdka.
        </p>
        <p>
            yo aby ksauhd asjkdhsadkalsd jsadkjasdka.yo aby ksauhd asjkdhsadkalsd jsadkjasdka.yo aby ksauhd asjkdhsadkalsd jsadkjasdka.yo aby ksauhd asjkdhsadkalsd jsadkjasdka.yo aby ksauhd asjkdhsadkalsd jsadkjasdka.yo aby ksauhd asjkdhsadkalsd jsadkjasdka.yo aby ksauhd asjkdhsadkalsd jsadkjasdka.yo aby ksauhd asjkdhsadkalsd jsadkjasdka.yo aby ksauhd asjkdhsadkalsd jsadkjasdka.
        </p>  `
},
'article-two' : {
    title:'article Two|Mayank Gera',
    heading:'Arcticle Two',
    date:'sept,21',
    content:   `
        <p>
            222222222222
        </p>
        <p>
            yo aby ksauhd asjkdhsadkalsd jsadkjasdka.yo aby ksauhd asjkdhsadkalsd jsadkjasdka.yo aby ksauhd asjkdhsadkalsd jsadkjasdka.yo aby ksauhd asjkdhsadkalsd jsadkjasdka.yo aby ksauhd asjkdhsadkalsd jsadkjasdka.yo aby ksauhd asjkdhsadkalsd jsadkjasdka.yo aby ksauhd asjkdhsadkalsd jsadkjasdka.yo aby ksauhd asjkdhsadkalsd jsadkjasdka.yo aby ksauhd asjkdhsadkalsd jsadkjasdka.
        </p>  `
},
'article-three' : {
    title:'article Three|Mayank Gera',
    heading:'Arcticle Three',
    date:'sept,21',
    content:   `
        <p>
            33333333
        </p>
        <p>
            yo aby ksauhd asjkdhsadkalsd jsadkjasdka.yo aby ksauhd asjkdhsadkalsd jsadkjasdka.yo aby ksauhd asjkdhsadkalsd jsadkjasdka.yo aby ksauhd asjkdhsadkalsd jsadkjasdka.yo aby ksauhd asjkdhsadkalsd jsadkjasdka.yo aby ksauhd asjkdhsadkalsd jsadkjasdka.yo aby ksauhd asjkdhsadkalsd jsadkjasdka.yo aby ksauhd asjkdhsadkalsd jsadkjasdka.yo aby ksauhd asjkdhsadkalsd jsadkjasdka.
        </p>  `
}
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
app.get('/:articleName',function(req,res){
    var articleName = req.params.articleName;
  res.send(createTemplate(articles[articleName]));
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

var express = require('express');
var app = express();
var fs = require('fs');

app.use(express.static('public'));
app.use(express.static('files'));

// fs.readFile('./public/images/pokemon1.jpg',(err,data) => {
//     if (err) {
//         throw err;
//     }

//     app.get('/', function(req, res) {
//         res.send(data);
//     });
// });


app.get('/', function(req, res) {
    res.send('Hello World!');
});

app.listen(3000, function() {
    console.log('Example app listening on port 3000');
});
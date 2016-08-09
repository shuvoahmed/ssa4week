var example = require('./example.js')

var xml = require('xml');
var fs = require('fs');

setTimeout(() => {
    var data = fs.readFileSync('example.js');
    console.log(data.toString());
}, 2000);


setTimeout(() => {
    var data = fs.readFile('example.js', (err, data) =>{
        if(err) throw err;
        console.log(data.toString());
    });

    //fs.writeFile('');
}, 2000);

fs.writeFile('output.txt', 'Hello there', (err) => {
    if(err) throw err;
    console.log('It\'s saved!');
});


// setTimeout(() => {
//     console.log(example.foo);
// }, 3000);

// example.on('ready', function(){
//     console.log(example.foo);
// });

var obj = {
    x:  function (a, b) {
        this.foo = 9;
        return a + b;
    }

}

// var x = (a, b) => {
//     return a + b;
// }

obj.x(2, 3);

console.log(obj.foo);
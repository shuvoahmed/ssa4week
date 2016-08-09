var fs = require('fs');

fs.readFile('sample.txt',(err,data) => {
    if (err) {
        throw err;
    }

    //console.log(data.toString());    

    fs.writeFile('sampleOutput.txt', data.toString(), (err) => {
        if (err) {
            throw err;
        }
        console.log('it is saved.');
    });    
});



// fs.readFile('sample.txt', function (err,data) {
//     if (err) {
//         throw err;
//     }

//     //console.log(data.toString());    

//     fs.writeFile('sampleOutput.txt', data.toString(), (err) => {
//         if (err) {
//             throw err;
//         }
//         console.log('it is saved.');
//     });    
// });
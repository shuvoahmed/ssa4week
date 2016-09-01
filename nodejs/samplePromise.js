var fs = require('fs');

function fileWritePromise(path, data) {
    return new Promise((resolve, reject) => {
        fs.writeFile(path, data, (err) => {
            if (err) {
                reject(err);
            }
            else {
                resolve(data);
            }
        });
    });
};


var fp = fileWritePromise('promiseFileWrite.txt', 'Promise file write sample' );
fp.then(
    (val) => {
        console.log(val.toString());
    },
    (err) => {
        console.log(err);
    }
)


// function timedPromise(ms, resolveVal) {
//     return new Promise(function(resolve, reject) {
    
//         // This is only an example to create asynchronism
//         setTimeout(
//             function() {
//                 // We fulfill the promise !
//                 resolve(resolveVal);
//             }, 
//             ms
//         );
//     });
// }


var promises = [
    timedPromises(1000, 'hi'),
    timedPromises(5000, 'yo'),
    timedPromises(3000, 'bye')
];





// new function Promise(function (resolve, reject){

// });

// function fileReadPromise(path) {
//     return new Promise((resolve, reject) => {
//         fs.readFile(path, (err, data) => {
//             if (err) {
//                 reject(err);
//             }
//             else {
//                 resolve(data);
//             }
//         });
//     });
// };


// var fp = fileReadPromise('sample.txt');
// fp.then(
//     (val) => {
//         console.log(val.toString());
//     },
//     (err) => {
//         console.log(err);
//     }
// )



// var p = timedPromise(2000, 'hi');

// var p2 = p.then(
//     (val) => {
//         console.log(val);
//         return timedPromise(1000, 'next');
//         throw 'on no';
//         return 3;
//     }
//     (err) => {

//     }
// );

// p2.then(
//     (val) => {
//         console.log(val);
//     }
//     (err) => {
//         console.log(err);
//     }
// );

// var p = timedPromise(2000, 'hi');

// var p2 = p.then(
//     (val) => {
//         console.log(val);
//         throw 'on no';
//         return 3;
//     }
//     (err) => {

//     }
// );

// p2.then(
//     (val) => {
//         console.log(val);
//     }
//     (err) => {
//         console.log(err);
//     }
// );
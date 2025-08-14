
const { promises } = require('dns');
const fs = require('fs');
//-------------------------------------------- without promisses
// my own asynchronous function
// function kiratsReadFile(cb) {
//   fs.readFile("zzz.txt", "utf-8", function(err, data) {
//     cb(data);
//   });
// }

// function onDone(data) {
//   console.log(data)
// }

// kiratsReadFile(onDone); 


// ----------------------------------------------with promisses
// my own asynchronous function
function AyushReadFile(){
    return new Promise(function(resolve){
        fs.readFile('zzz.txt', "utf-8", function(err, data){
            resolve(data);
        })
    })
}

function onDone(data){
    console.log(data);
}

AyushReadFile().then((data)=>console.log(data));
    

// promise as a class
let p1 = new Promise(function(resolve){});     // status pending.
console.log(p1)

let p2 = new Promise(function(resolve){         // status resolved.
    resolve("hello");
});
console.log(p2);


// with Arrow function 
let p3 = new Promise(resolve => {});
console.log(p3);


// with reject 
const fs = require('fs');
function letsReadFile(){
    return new Promise((resolve, reject) => {
        fs.readFile('hhdwf.txt', 'utf-8', (err, data)=>{
            if(err){
                reject(err);
            }
            else{
                resolve(data);
            }
        })
    })
}

letsReadFile().
then((data)=>{
    console.log("Data: ",data);
})
.catch((err)=>{
    console.log("Error: ",err);
})
// Create promisified version of fs.readFile

const fs = require('fs');

function readFileA(){
    return new Promise((resolve) => {
        fs.readFile('a.txt', 'utf-8', (err, data) => {
            if(err)
                resolve(err);
            else
                resolve(data)
        })
    })
}

function printer(data){
    console.log(data);
}

readFileA().then(printer);
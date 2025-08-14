//Try to create promisified version of setTimeout

function ayushFunction(){
    return new Promise((resolve) => {
        setTimeout(()=>{
            console.log("setTimeOut executed")
            resolve("returned data from promis");
        }, 2000);
    })
}

function printer(data){
    console.log(data);
}

ayushFunction().then(printer);
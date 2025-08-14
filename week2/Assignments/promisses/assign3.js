// Assignment #3
// Q: Write code that

// logs hi after 1 second
// logs hello 2 seconds after step 1
// logs hello there 2 seconds after step 2


//using simple functions.
function helper(time, text){
    setTimeout(()=>{
        console.log(text);
    }, time*1000);
}

function myFunction(){
    helper(1, "hi");
    helper(3, "hello");
    helper(5, "hello There");
}

myFunction();


//using call-backs
function myFunction2(){
    setTimeout(()=>{
        console.log("hi");
        setTimeout(()=>{
            console.log("hello")
            setTimeout(()=>{
                console.log("hello there")
            },2000);
        }, 2000)
    }, 1000)
}

myFunction2();

//promisses
function setTimeOutProfile(duration){
    return new Promise((resolve)=>{
        setTimeout(resolve, duration)
    })
}

setTimeOutProfile(1)
.then(()=>{
    return new Promise((resolve)=>{
        console.log("hi");
        setTimeOutProfile(2000);
    })
})
.then(()=>{
    return new Promise((resolve)=>{
        console.log("hello");
        setTimeOutProfile(2000);
    })
})
.then(()=>{
    return new Promise((resolve)=>{
        console.log("hello there");
    })
})


// async await.

function promissifiedSetTimeOut(){

}

async function solve(){
    await setTimeout(()=>console.log("hi"), 1000);
    await setTimeout(()=>console.log("hello"), 2000);
    await setTimeout(()=>console.log("hello there"), 2000);
}
solve();
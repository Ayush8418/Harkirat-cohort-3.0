// faster time out gets executed first even if it comes next to slower timeout
// becuse after the browser api waited for the time 't' it added the callback of faster timeout to the callback queue and then the slower one
// and event loop takes the first callbak then the second one

console.log("hello1");

setTimeout(()=>{
    console.log("1");
},2000);

setTimeout(()=>{
    console.log("2"); 
},1000);

console.log("hello2");
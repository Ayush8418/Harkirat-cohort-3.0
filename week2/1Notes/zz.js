// // let a = 10;
// // {
// //     let a = 20;
// // }
// // console.log(a);

// setTimeout(()=>{
//     console.log(100000000000);
// },1000);

// for(let i=0 ; i<10000 ; i++){
//     console.log(i);
// }

console.log("A");

setTimeout(() => {
  console.log("B");
}, 0);

Promise.resolve()
  .then(() => {
    console.log("C");
    return "D";
  })
  .then((value) => {
    console.log(value);
  });

(async function() {
  console.log("E");
  await null;
  console.log("F");
})();

console.log("G");

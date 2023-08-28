window.promises = [];

// Do not change the code above this
// add your promises to the array `promises`
const output = document.getElementById("output");

// Create an array of five promises, each of which resolves with a random time between 1 and 5 seconds. Use Promise.any to wait for the first promise to resolve, and then print its result to the div of id output.
async function createPromise(time){
    let promise = new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(time);
        }, time)
    })
    return promise;
}

let promises = [
    createPromise(1000), 
    createPromise(3000),
    createPromise(2000),
    createPromise(5000),
    createPromise(4000),
];

let promises = Promise.any(promises);
//  prom.then((data)=>{
//     output.innerHTML = data;

// });



// let age = 25;
// function displayAge(){
//     console.log("displayAge:", age);
// }
// function changeAge(newAge){
//     age = newAge;
//     console.log("changeAge: age updated to", age);
// }
// displayAge();
// changeAge(30);
// displayAge();

console.log("Begin");
setTimeout(() => {
    console.log("Timeout Task");
}, 0);
Promise.resolve().then(()=>{
    console.log("Promise Task");
});
console.log("End");
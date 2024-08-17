// callback and foreach

// function myFunc(cb){
//     let value = 50;
//     cb(value);
// }

// const myFunc = (callbackfun)=>{
//     let value = 50;
//     callbackfun(value)
// }

// myFunc((value)=>{
//     console.log(value);
// })

let people = ['vinit','mario','sam','chan']

//for each value of array it will fire the cb function
// people.forEach(function(){
//   console.log(`something`);  
// })

// people.forEach(function(person){  //cb f
//     console.log(person);
// })

// people.forEach((person,index)=>{
//     console.log(person,index);
// })

const logPerosn = (person,index)=>{
    console.log(`${index} -hello ${person}`);
}

people.forEach(logPerosn); //logPerson - cbf
//get element by ID
const title =document.getElementById('page-title')
// console.log(title);


//get elements by their class name
const errors = document.getElementsByClassName('hey')
// console.log(errors); //this will give a html collection
// console.log(errors[0]); 

// errors.forEach((error)=>{
//     console.log(error);
// })                           //cant use foreach in html collection



//get elements by their tag name
const paras = document.getElementsByTagName('p')
console.log(paras);
console.log(paras[0]);

//function expression
const speak = function(){
  console.log(`good day`);  
};
//hoisting dont work with function expression //not hoisted

greet(); //calling/invoking
greet();
greet();
//function declaration is hoisted on top

//function declaratrion
function greet(){
    console.log(`hello there`);
}

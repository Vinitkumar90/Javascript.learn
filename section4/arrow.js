// const greet = ()=> 'hello wrlld'

// let hello = greet();
// console.log(hello);



const bill = (products,tax)=>{
    let total = 0;
    for(let i=0; i<products.length; i++){
        total+=products[i]+products[i]*tax; 
    }
    return total
}

console.log(bill([10,5,20],0.2));
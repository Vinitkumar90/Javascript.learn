// const para = document.querySelector('div.error')

// console.log(para);


const paras = document.querySelectorAll('p');
console.log(paras); // it selects all p in a nodelist ..like an array but we cannot perform all array methods to it

paras.forEach(function(para){
    console.log(para);
})


const errors = document.querySelectorAll('.error')
console.log(errors);
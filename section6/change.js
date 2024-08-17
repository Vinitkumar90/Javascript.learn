const para = document.querySelector('p');

// console.log(para.innerText);
// para.innerText = 'ninja are awesome'

const paras = document.querySelectorAll('p'); //nodelist of p node

paras.forEach((para)=>{                   //traversing node list
    console.log(para.innerText);
    para.innerText += ' king';
})


const content = document.querySelector('.content');

// console.log(content.innerHTML);
//content.innerHTML = `<h2>This is a new KING</h2>`  // = to overwrite  //+= to append

const people = ['vinit','harkirat','king','seven']

people.forEach((person)=>{
    content.innerHTML += `<p>${person}</p>`
})
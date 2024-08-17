const ul = document.querySelector('.people')

const people = ['mario','vinit','harkirat','sevendeadlysins']


let html = ``;

people.forEach((person)=>{
    html +=`<li style="color: purple">${person}</li>`
})

let array = {
forEach(cb){
    cb()
}
}


console.log(html);
ul.innerHTML = html
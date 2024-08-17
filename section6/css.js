const title = document.querySelector('h1')


// title.setAttribute('style','margin: 50px') it will overwrite the exisiting property of color orange

// so we use style property

console.log(title.style); // to see all style properties
console.log(title.style.color);

title.style.margin = '50px'
title.style.color = 'crimson'
title.style.fontSize = '60px' 

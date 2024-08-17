const link = document.querySelector('a')


console.log(link.getAttribute('href'));
link.setAttribute('href', 'https://www.youtube.com');
link.innerText = "YOUTUBEEE"


const message = document.querySelector('p')
console.log(message.getAttribute('class'));
message.setAttribute('class', 'success')
message.setAttribute('style','color: green;')
//variables and block scope

let age = 30;

if(true){
   let age = 40;
    console.log(`inside the first vlock `,age);
}

console.log(`outside code block`,age);
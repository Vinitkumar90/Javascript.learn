// object literals

let user = {
    fname: 'crystal',
    age:18,
    gender:'male',
    location:'berlin',
    blogs: ['hi','hello','by','why-not']
};

// console.log(user);
// console.log(user.fname);

//dot notation
//changing key value
user.age = 22;
console.log(user.age);

//square bracket notation
console.log(user["fname"]); //user.fname
user['location'] = 'tokyo';
console.log(user["location"]);

//dot can not work with variables
const key = "location"

// console.log(user.key);

console.log(user[key]);



console.log(typeof user);
// adding methods to objects

let user = {
    fname: 'crystal',
    age:18,
    gender:'male',
    location:'berlin',
    blogs: ['hi','hello','by','why-not'],
    login: function(cb){
        console.log(`the user logged in`);
        cb("vinit");
    },
    logout(){
        console.log(`user logged out`);
    }
};

//user.login()

user.login((fname)=>{
    console.log(fname);
});


const fname = 'mario'  
fname.toUpperCase()     //string method

user.logout()

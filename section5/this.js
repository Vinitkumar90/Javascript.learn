let user = {
    fname: 'crystal',
    age:18,
    gender:'male',
    location:'berlin',
    blogs: ['hi','hello','by','why-not'],
    login(){ //this is still a regular function
        console.log(`the user logged in`);
    },
    logout(){
        console.log(`user logged out`);
    },
    logBlogs: function(){  //()=> arrow fx...this context is not changed to object ...remain window
        // console.log(this.blogs);
        console.log('this user has written the following blogs:');
        this.blogs.forEach((blog)=>{
            console.log(blog);
        })
    }
};


user.logBlogs();

// console.log(this);
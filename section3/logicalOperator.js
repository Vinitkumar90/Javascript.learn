const pass = 'password123';

if(pass.length>=12 && pass.includes('@')){
    console.log(`that password is mighty strong`);
}
else if(pass.length>=8 || pass.includes('@')&& pass.length >=5){
    console.log(`that password is long enough !!`);
}else{
    console.log(`password is not long enough`);
}
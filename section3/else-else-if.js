const pass = 'p@@ssword123';

if(pass.length>=12){
    console.log(`that password is mighty strong`);
}
else if(pass.length>=8){
    console.log(`that password is long enough !!`);
}else{
    console.log(`password is not long enough`);
}
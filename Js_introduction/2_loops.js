var flag = true;

var num = 13;

for(var i = 2; i*i<=num; i++){
    if(num%i == 0){
        flag = false;
        return;
    }
}

if(flag==true){
    console.log('Number is prime');
}else{
    console.log('Number is not prime');
}
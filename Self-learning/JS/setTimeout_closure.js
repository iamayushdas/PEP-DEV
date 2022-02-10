
function x(){
    // for(var i = 1; i<=5; i++ ){
    //     function close(n){
    //         setTimeout(function (){
    //             console.log(n);
    //         }, n*1000)
    //     }
    //     close(i);
    // }
    for( let i = 1; i<= 5; i++){
        setTimeout(function (){
            console.log(i);
        }, i*1000)
    }

    console.log("Hello");
}

x();
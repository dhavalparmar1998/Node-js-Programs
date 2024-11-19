console.log("start");
console.log("1");

setTimeout(function(){
    console.log("callback queue");
    for(i=1;i<=100;i++){
        console.log(i);
    }
},2000);
console.log("2");

fetch('https://fakestoreapi.com/products/1')
            .then(res=>res.json())
            .then(json=>console.log("microtask queue"))

            setTimeout(function(){
                console.log("callback queue with 0");
            },0)
            console.log("End");
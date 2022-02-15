function MyFunction(a,b){
    if(a.length==b.length){
        console.log(a,b)
    }else if(a.length>b.length){
        console.log(a)
    }else{
        console.log(b)
    }
}
MyFunction("hello","welcome")


// var variable=function(a,b){
//     if(a.length==b.length){
//         console.log(a,b)
//     }else if(a.length>b.length){
//         console.log(a)
//     }else{
//         console.log(b)
//     }

// };variable("manisha","mavaskar")


// var fun=(a,b)=>{
//         if(a.length==b.length){
//         console.log(a,b)
//     }else if(a.length>b.length){
//         console.log(a)
//     }else{
//         console.log(b)
//     }

// };fun("hellow","by")



var fun=(function(a,b){
    if(a.length==b.length){
        console.log(a,b)
    }else if(a.length>b.length){
        console.log(a)
    }else{
        console.log(b)
    }

})("hy","bye")
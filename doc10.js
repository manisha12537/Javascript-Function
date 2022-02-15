function fun(a,b){
    let x
    let y
    if(a.toString()==a){
         x=parseInt(a)
        
    }if(b.toString()==b){
        y=parseInt(b)
    }
    else{
       return(a+b)
    }
    return x+y

}
console.log(fun("34","3"))




// var a="34"
// var b;
// if(a.toString()==a){
//     b=parseInt(a)
//     console.log(typeof(b))
// }
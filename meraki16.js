// function fun(a){
//     let i=1
//     let sum=0
//     while(i<a){
//         if (a%i==0){
//             sum+=i

//         }i++
//     }if(sum==a){
//         return " it is perfect number"
//     }else{
//         return "it is not perfect number"
//     }
// }
// console.log(fun(8))



// var perfecr_num=function(a){
//     let i=1
//     let sum=0
//     while(i<a){
//         if(a%i==0){
//             sum+=i
//         }i++
//     }if(sum==a){
//         return "perfect number"
//     }
//     else{
//         return "not perfect number"
//     }
// }
// console.log(perfecr_num(6))



// var perfect_num=(a)=>{
//     let i=1
//     let sum=0
//     while(i<a){
//         if(a%i==0){
//             sum+=i
//         }i++
//         }if(sum==a){
//             return "perfect number"
//         }
//         else{
//             return "not perfect number"
//             }
//         }
// console.log(perfect_num(6))


var perfect_num=(function(a){
    let i=1
    let sum=0
    while(i<a){
        if(a%i==0){
            sum+=i
        }i++
    }if(sum==a){
        return "perfect number"
    }else{
        return "not a perfect number"
    }

});
console.log(perfect_num(6))

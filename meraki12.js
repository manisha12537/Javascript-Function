// function MyFunction(a,b){
//     let sum=0
//     let i=0
//     while(i<a.length){
//         for(var j of b){
//             sum=a[i]+j
//             i++
//             console.log(sum) 
//         }
//     }
// }
// MyFunction([50, 60, 10],[10, 20, 13])



// var a=function(b,c){
//     let i=0
//     let sum=0
//     while(i<b.length){
//         for(var j of c){
//             sum=b[i]+j
//             i++
//             console.log(sum)
//         }
//     }
// }
// a([50, 60, 10],[10, 20, 13])



// var a=(b,c)=>{
//     let i=0
//     let sum=0
//     while(i<b.length){
//         for(var j of c){
//             sum=b[i]+j
//             i++
//             console.log(sum)
//         }
//     }

// }
// a([50, 60, 10],[10, 20, 13])



(function MyFunction(a,b){
    let i=0
    let sum=0
    while(i<a.length){
        for(var j of b){
            sum=a[i]+j
            i++
            console.log(sum)
        }
    }
})
MyFunction([50, 60, 10],[10, 20, 13])
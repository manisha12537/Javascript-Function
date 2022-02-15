// function even_num(a,b){
// var i=0
// while(i<a.length){
//     for (var j of b){
//         if (a[i]%2==0 && j%2==0){
//             console.log("dono even")
//         }else{
//             console.log("dono nhi hai")
//         }i++
//     }
// }}
// even_num([2, 6, 18, 10, 3, 75],[2, 6, 18, 10, 3, 75])




// var a=function(b,c){
//     var i=0
// while(i<b.length){
//     for (var j of c){
//         if (b[i]%2==0 && j%2==0){
//             console.log("dono even")
//         }else{
//             console.log("dono nhi hai")
//         }i++
//     }
// }}
// a([2, 6, 18, 10, 3, 75],[2, 6, 18, 10, 3, 75])




// var j=(c,b)=>{
//     var i=0
//     while(i<b.length){
//         for (var j of c){
//             if (b[i]%2==0 && j%2==0){
//                 console.log("dono even")
//             }else{
//                 console.log("dono nhi hai")
//             }i++
//         }
//     }}
// j([2, 6, 18, 10, 3, 75],[2, 6, 18, 10, 3, 75])




var a=(function(b,c){
    var i=0
    while(i<b.length){
        for (var j of c){
            if (b[i]%2==0 && j%2==0){
                console.log("dono even")
            }else{
                console.log("dono nhi hai")
            }i++
        }
    }})
([2, 6, 18, 10, 3, 75],[2, 6, 18, 10, 3, 75])



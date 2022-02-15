// function MyFunction(num1,num2,num3){
//     let sum=0
//     sum=num1+num2+num3
//     console.log(sum)
//     console.log(sum/3)

// }
// var readlinesync=require("readline-sync")
// var a=readlinesync.questionInt("enter number")
// var b=readlinesync.questionInt("enter number")
// var c=readlinesync.questionInt("enter number")
// MyFunction(a,b,c)



// var fun=function(a,b,c){
//     let sum=0
//     sum=a+b+c
//     console.log(sum)
//     console.log(sum/3)
// }
// var readlinesync=require("readline-sync")
// var d=readlinesync.questionInt("enter number")
// var e=readlinesync.questionInt("enter number")
// var f=readlinesync.questionInt("enter number")
// fun(d,e,f)


// var fun=(a,b,c)=>{
//     let sum=0
//     sum=a+b+c
//     console.log(sum)
//     console.log(sum/3)
// }
// var readlinesync=require("readline-sync")
// var d=readlinesync.questionInt("enter number")
// var e=readlinesync.questionInt("enter number")
// var f=readlinesync.questionInt("enter number")
// fun(d,e,f)


var readlinesync=require("readline-sync")
var d=readlinesync.questionInt("enter number")
var e=readlinesync.questionInt("enter number")
var f=readlinesync.questionInt("enter number")
var fun=(function(a,b,c){
    let sum=0
    sum=a+b+c
    console.log(sum)
    console.log(sum/3)
})
(d,e,f)

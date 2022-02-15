var readlinesync=require("readline-sync")
var a=readlinesync.questionInt("enter the number")
function prime_number(j){
var i=2
var prime;
if(j>1){
    while(i<j){
        if(j%i==0){
            prime=true
        }i++
    }
}
if(prime){
    console.log("not prime number")
}else{
    console.log("prime number")
}}
prime_number(a)
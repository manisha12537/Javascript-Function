function middle_number(x){
if(x.length%2==0){
    let a=x.length/2-1
    let b=x.length/2
    console.log(x[a])
    console.log(x[b])
}else{
    console.log(x[Math.floor(x.length/2)])
}
}
middle_number([1,2,4,4,3,4])
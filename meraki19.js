function MyFunction(limit){
    let a=1
    for(var i;i<=limit;i++){
        if (i%3==0){
            a+=i
        }if (i%5==0){
            a+=i
        }
    }console.log(a)
}MyFunction(10)

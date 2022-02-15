// function MyFunction(num){
//     let i=0
//     let j=toString(num)
//     while(i<j.length){
//     let a=num%10
//     if (a==0){
//         delete(a)
//         num=num/10
//         num=Math.floor(num)
//     }
//     i++
//     }console.log(num)
// }
// MyFunction(500670000)


(function(num){
    let i=0
    let j=toString(num)
    while(i<j.length){
        let k=num%10
        if(k==0){
            delete(k)
            num=num/10
            num=Math.floor(num)
           
        };i++
    }console.log(num)
})(67810900)

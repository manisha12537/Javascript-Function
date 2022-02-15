let str='The quick Brow Fox'
var i=0
var count=0
var c=0
var sum=str.split(" ").join("")
while(i<sum.length){
    if(sum[i].toUpperCase()===sum[i]){
        count+=1
    }else{
        c+=1
    }
    i++}
console.log("uppercase charactor count:-",count)
console.log("lowercase charactor count:-",c)


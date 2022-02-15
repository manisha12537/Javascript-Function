function MyFunction(a){
    var i=0
    var j=a.length-1
    var x=""
    while(i<a.length){
        x+=a[j]
        i+=1
        j-=1
    }console.log(x)
}MyFunction("9834abcd")
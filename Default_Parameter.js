// function MyFunction(a,c="hi",b){
//     console.log(a)
//     console.log(b)
//     console.log(c)
// }MyFunction(6,9)



function multiply(a, b = 1) {
    return a * b;
  }
  
  console.log(multiply(5, 2));
  // expected output: 10
  
  
  console.log(multiply(5));
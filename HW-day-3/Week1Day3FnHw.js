// Q1. sum of the numbers between 1 and n 

function numSum(n){
    var sum = 0;
      for(i = 0; i <= n; i++){
        sum += i; 
         }
    console.log(sum)
         }
numSum(5);



// Q2.  Sum even numbers:

let summ = 0;
let array=[1,2,3,4,5,6,7,8,9];
for(i=0;i<=array.length;i++){
    if(array[i] %2==0){
        summ= summ+array[i];
        console.log(summ)

    } 
}



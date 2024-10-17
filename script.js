 // print the any table upto 20
 let a = prompt('enter the table number')
 for (i = 1; i <= 20; i++) {
     console.log(a, '*', i + '=' + i * a)
 }
 //  print  the  even number between 0 to 10
 let n1=1;
 let n2=10;
 count=0
 for(i=n1;i<=n2;i++){
     if(i%2==0){
        // console.log(i)
        count++   
     }
 }
console.log(count)
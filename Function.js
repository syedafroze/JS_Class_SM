
//function - its a block of code that can be invoked/call when ever neccesary 

//function declaration 
// function Square(num){
//   //function definition
//   return num*num ;
//   console.log("wont get executed ");
// }

// //num 

// let result = Square(5);//function call 

// console.log( result +5);//30
 


//function expression 
// let Sqaure2 = function (num){
//    return num*num;
// }

// 
//

// let res =Sqaure2(3);
// console.log(res);

//Arrow function 

// let Sqaure2 = num =>  num*num;


// let res =Sqaure2(3);
// console.log(res);


/*
Regular functin 
recursive functin 
nested function
callback function 
higher order function 
currying function
IIFE
Arrow function
*/

//


//Recursive function  - > function calling itself is called 

//factorial 5! = 5*4*3*2*1 =120 
             //  5 *(5-1)*(5-2)

function fact(num){

    if(num==1){
        return 1;
    }
    else{
        return num *fact(num-1)
    }
}
let res2 = fact(5);
console.log(res2)
/*
fact(5) =  return 5 * 24
fact(4) = return 4 *6
fact(3) = return 3 * 2
fact(2) = return 2 *1;
fact(1)= return 1 ;

*/




function mul(num1){
    let num3=7;
   return function (num2){
      console.log(num1*num2);
   }
  }
  
  let res = mul(2);
  /*
  
  
  */
  console.dir(res)
  // res(3);


//callback - functin passed as an argument to another function and called later init .
  function Greet(name){
    console.log(`hello ${name}`);//hello syed 
  }
  
  //---------------------
  //HOF - > function that accepts another function as a parameter is called HOF 
  function user(greetFunction , name){
    //higher order function 
     
    greetFunction(name);//callback function
  }
  
  
  user(Greet,"syed");


  //iife immediatley invoked function expression

((function greet(){
    console.log("hello")
  }))();
  

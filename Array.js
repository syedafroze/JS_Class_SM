

// ///Array - collection of data 

// //let arr = [1,"syed",[2,3],function(){console.log("in func")}, {name:"dell"}];



// //index    0 1 2 3
// let arr2 =[4,3,2,5]


// //create 

// let arr3 = new Array(4,3,2,1); 


// //access using indexes

// console.log(arr2[1]);

// //push - adds elem to the end of the array 
// arr2.push(6);
// console.log(arr2);

// //pop -remove last elem 
// arr2.pop()
// console.log(arr2);

// //unshift - add elem  to beginig 

// arr2.unshift(3);
// console.log(arr2);

// //shift () - removes first elem 
// arr2.shift();
// console.log(arr2);


// //splice  - remove,add and copy 
// //splice - arrName.splice(startIndex, no.of elements to be removed , elements to be added )
// //
// let arr4 = [3,5,6];// [1,2,6]

// // let splicedArr = arr4.splice(0 ,2, 1,2);
// // console.log(arr4,splicedArr);


// // slice    arrayName.slice(startIndex, endIndex+1);

// let sliceArr = arr4.slice(0, 2);
// console.log(arr4,sliceArr);

// //        0 1 2 3 
// let arr5=[4,5,6,7] ;
// //len     1 2 3 4
//             //i<=4
// // for(let i=0 ;i<arr5.length;i++){
// //   console.log(arr5[i]);
// // }

// // for( let i= arr5.length-1 ; i>=0 ; i--){

// //     console.log(arr5[i])

// // }

// //for of and for in 

// //for in 
// for(let i in arr5){  //i-index

//     console.log(arr5[i])
// }

// for(let i of arr5){//of    i=value
//     console.log(i);
// }


// index       0 1 2 3 
let mapArr =  [2,4,5,6] ;
//new array => [ 0, 4, 10 ,18] ;
let newArr=[];
for(let i=0 ;i<mapArr.length;i++){
  
     //value *index 
       newArr.push( mapArr[i] * i );

}
console.log(newArr); 

/*
for loop 
mul
push into new Arr 
*/

let res = mapArr.map((value,index)=> value* index )

console.log(res)

//map 
/*
it initalizes an array  [0,4,10,18]
it loop over the array 
it passes each value to the callback function 
what ever that function is returning it pushes into array 
*/



let arr2 = [ 6,4,3,5,7,9];

//[6,7,9]   value>5
   //loop
   //if (value>5)
   //push that into a array

let filterArr =[];

for(let i=0; i<arr2.length ;i++){
   if(arr2[i] > 5){
       filterArr.push(arr2[i]);
   }
}
console.log(filterArr);

let res2 = arr2.filter((val)=> val>5) ;
//[6,7,9]
//
console.log(res2); 

//map 

let arr3 =[4,5,3,2]
arr3.forEach((val)=>console.log(val));
//[]
//
//console.log(res3);// undefined 



let arr4 =[3,2,1,4];//10

let sum =0; 
for(let j=0 ; j<arr4.length ;j++){
   sum =sum+ arr4[j] ;
}
console.log(sum);

let sum2 = arr4.reduce((val1,val2)=>val1+val2 );
console.log(sum2)
// val1=10 val2 =3 => 13
//val1= 5 val2=1 => 6;
//val1 = 6 val2 =4 => 10

let str ="desktop";
//reverse

let greet="hello,how are you?"
//  "olleh,woh era ?uoy" 



//Bayers
  

/*

let arr =[2,3,1,2,3,4,4]  {2 :2 , 3:2,1:1,4:2}
let users=[
    {
        name:"syed",
        age:23,
    },
    {
        name:"Shiva",
        age:23,
    },
    {
        name:"Chetan",
        age:20,
    },
    {
        name:"Vivek",
        age:20,
    }
]
[
    {
        names:["syed","shiva"],
        age:23
    }
    ,{
        names:["vivek","chetan"],
        age:20
    }
]
*/




/*
map
filter
forEach
reduce 

*/
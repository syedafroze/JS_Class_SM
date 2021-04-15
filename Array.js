

///Array - collection of data 

//let arr = [1,"syed",[2,3],function(){console.log("in func")}, {name:"dell"}];



//index    0 1 2 3
let arr2 =[4,3,2,5]


//create 

let arr3 = new Array(4,3,2,1); 


//access using indexes

console.log(arr2[1]);

//push - adds elem to the end of the array 
arr2.push(6);
console.log(arr2);

//pop -remove last elem 
arr2.pop()
console.log(arr2);

//unshift - add elem  to beginig 

arr2.unshift(3);
console.log(arr2);

//shift () - removes first elem 
arr2.shift();
console.log(arr2);


//splice  - remove,add and copy 
//splice - arrName.splice(startIndex, no.of elements to be removed , elements to be added )
//
let arr4 = [3,5,6];// [1,2,6]

// let splicedArr = arr4.splice(0 ,2, 1,2);
// console.log(arr4,splicedArr);


// slice    arrayName.slice(startIndex, endIndex+1);

let sliceArr = arr4.slice(0, 2);
console.log(arr4,sliceArr);

//        0 1 2 3 
let arr5=[4,5,6,7] ;
//len     1 2 3 4
            //i<=4
// for(let i=0 ;i<arr5.length;i++){
//   console.log(arr5[i]);
// }

// for( let i= arr5.length-1 ; i>=0 ; i--){

//     console.log(arr5[i])

// }

//for of and for in 

//for in 
for(let i in arr5){  //i-index

    console.log(arr5[i])
}

for(let i of arr5){//of    i=value
    console.log(i);
}



/*
map
filter
forEach
reduce 

*/
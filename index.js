// array te jokhon onek gula element thake tokhon protita element er moddhe ekta position thake.
//index:position (bivinno element er position)
const array=[11, 22, 33, 44, 55, 66,77, 88, 99, 100] //index ache 0,1,2,3,4,5,6,7,8,9. 
// index suru hoi 0 diye
/* 
index-0=11
index-1=22
index-2=33.......index-9=100.
*/ 
console.log(array);
console.log('Array length:', array.length) ;
// get element value by index 
console.log( '0-index :', array[0]);
console.log('5th-index:',array[5]); 

const fourth =array[3];//index vabe dhorle 0 theke suru forth mane -[0,1,2,3]
console.log(fourth);

// set or update element value by index 
array[1]=111;
console.log(array);
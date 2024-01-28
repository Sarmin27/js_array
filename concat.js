//-------------------------------Array Methods-----------------------------
// 2 ta array k concat kore new ekta array create. 

const friends=['Sawon','Sarmin', 'Toya', 'Choya', 'Momota'] 
const numbers=[10, 20, 30, 40, 50, 60]
console.log(friends.concat(numbers)); 

/* Ans:
[
  'Sawon',  'Sarmin',
  'Toya',   'Choya',
  'Momota', 10,
  20,       30,
  40,       50,
  60
]

*/


// ----------------------------------slice()-----------------------
// array kono ekta onso k vag kore fela ...korar pore new ekta array dibe but original array k change korbe na.
const number=[10, 20, 30, 40, 50, 60] 
console.log(number.slice(2,4)); //[ 30, 40 ]................2,4 means 2nd  index theke 4 er aage porjontw mane 3rd  index porjontw.
console.log(number);

//-----------------------------------------splice()--------------------------------------



/*
js-array-tasks-01

1. Declare an array
Declare an array with 5 elements containing fruits
console log the 3rd index element
change the value of the 2nd index element to jambura
console log the final array
*/
const fruits=['Apple', 'Orange', 'Banana', 'Pine-Apple', 'Mango'];
console.log( '3rd index:',fruits[3]);
fruits[2]='jambura';
console.log(fruits);

/*
2. Add or remove elements
Declare an array of 3 tourist destinations
Add a new tourist destination to your tourist array
Add two more to your array
Remove the last tourist destination you have added
display the final array as output
*/

const tourist=['Bandarban', 'Dhaka', 'Rangamati'];
tourist.push('Sylhet');
console.log(tourist);
tourist.push('Saint Martin Island', 'Ahsan Manzil');
console.log(tourist);
tourist.pop();
console.log(tourist);

/*
3. Checking Array Membership with ‘includes’
Instructions:

Create an array of books containing different book.

Use the includes method to check if the array contains a javascript book.

Print a message to the console indicating whether the element is present in the array or not.
*/
const books=['English', 'Mathmetics', 'Physics', 'Java'];
console.log(books.includes('Java')); //true
console.log(books.includes('javascript')); //false

/*
4. Checking if it's an Array
Instructions:

Create different variables, each containing either an array or a non-array value.

Now use isArray to check if each variable is an array.

Print a message to the console indicating whether each variable is an array or not.
*/

const nums=[];
const food='r i c e';
const age=12;
const num='[]'; //string
console.log(Array.isArray(nums)); //true
console.log(Array.isArray(food)); //false
console.log(Array.isArray(age)); //false
console.log(Array.isArray(num)); //false

/*
5. Combining Arrays
Instructions:

Create two arrays of your choice.
Use the concat method to combine the two arrays into a new array.
Print both the original arrays and the combined array using console.log().
*/

const friends=['Sawon','Sarmin', 'Toya', 'Choya', 'Momota'] 
const numbers=[10, 20, 30, 40, 50, 60]
console.log(friends.concat(numbers)); 

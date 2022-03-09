//SECTION Nested Arrays
const vehicles = ["Ford",["Fiesta", "Taurus", "Explorer"],
"Honda", ["Pilot", "Civic", "Accord"],
"Toyota", ["Corolla", "Camry","Prius"]];
//NOTE This allows you to select what array and what object in the array you want to call
console.log(vehicles[0]);
//SECTION Variables
//NOTE This creates a variable "x" and assign it assign string
var x = ""
//NOTE This cretes a variable called "cheese" and assigns it the value "yummy"
var cheese = "yummy"
//NOTE This creates a variable called age and assigns it the value of 25
var age = 25
//NOTE You cant use variables with numbers infront, characters infront, words like "for-example", words with a space, or keywords
//var 1cat = ""
//var $cat = ""
//var my-cat = ""
//var my cat = ""
//var new = ""
//SECTION VARIABLES PRACTICE
//NOTE This will print the numbers in regular integer format
var myNu = 1
var myNu1 = 2
console.log(myNu + myNu1)
console.log(myNu * myNu1)
//NOTE This will concatonate the string to the back of the integer because as a string the integer will print first and attach the string to the back
var myNu2 = 1
var myNu3 = "2"
console.log(myNu2 + myNu3)
//NOTE You can use typeof to see what type of data type an integer is
console.log(typeof(myNu2))
console.log(typeof(myNu3))
//NOTE If using typeof on a variable with no value it will return "undefined"
var undefinedashell
console.log(undefinedashell)
//NOTE If using typeof on a variable with the value "null" it will return just as an object
var nullasab = null
console.log(typeof(nullasab))
//SECTION Arrays
//NOTE An array is a container with sub containers
//ES6
var colors = new Array("red", "green", "blue")
//ES5
var colors = ["red", "green", "blue"]
//You can call objects out of the arrays by calling the variable and defining what number index youre calling
//IN PROGRAMMING YOU START WITH "0" INSTEAD OF "1"
console.log(colors[0])
// You can use .length to find how many objects are indexed in the array
console.log(colors.length)
//NOTE A string can also be treated like an array
var joke = "Going to College"
console.log(joke[0])
//Then use .length to see how many characters are within the string
console.log(joke.length)
//SECTION Array Practice
var animals = ["cat", "dog", "chicken", "fox", "bear"]
//NOTE You can use the .push to add an object to an array
animals.push("llama")
console.log(animals)
//NOTE You can use the .splice to remove an object out of the array
//splice(start, deleteCount, item1, item2, itemN)
//This starts at the second index item and has you delete one object 
animals.splice(2,1)
console.log(animals)
//This starts at the second index item and has you delete one object and replace it with "sloth"
animals.splice(2,1, 'sloth', 'bat', 'gopher')
console.log(animals)
//NOTE You can use the .sort to order objects alphabetically
animals.sort()
console.log(animals)
//SECTION ARRAY CHALLENGE!
//Write code that will always give you the last object in an array
console.log(animals[animals.length-1])
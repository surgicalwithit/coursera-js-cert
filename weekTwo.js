//SECTION JS Operators are similar to what you would find in other languages based on C 
//NOTE JS Operators are "+", "=", "-", "*", "/"
//SECTION Booleans and IF ELSE
//NOTE Booleans in JS are used to define sonmething as true or false
var happy = true;
var sad = false;
//NOTE You can checl to see if something is true or not by using a selection statement
var red = true;
var blue = false;
if(red){
    console.log("This statement is true")
} else {
    console.log("This statement is false")
}
//SECTION Try this!
//NOTE Assigning a variable to the value "0" makes the statement false
var green = 0
if(green){
    console.log("This statement is true")
} else {
    console.log("This statement is false")
}
//NOTE Any integer or string leaves a value of true
var purple = "lmfao"
if(purple){
    console.log("This statement is true")
} else {
    console.log("This statement is false")
}
//SECTION Comparison operators
//NOTE Using "==" compares two values and returns either true if they are the same or flase if they are different
var myNum = 5
var otherNum = 5
if(myNum == otherNum){
    console.log("This statement is true")
} else {
    console.log("This statement is false")
}
//NOTE You can also use ">" and "<" to compare integers
var yourNum = 5
var yourOtherNum = 6
if(yourNum <= yourOtherNum){
    console.log("This statement is true")
} else {
    console.log("This statement is false")
}
//NOTE You can use strings with comparing integers as long as its a number
//NOTE WARNING this can cause problems becasue of "truish" and "falsey" statements
var notNum = 3
var notOtherNum = "4"
if(notNum > notOtherNum){
    console.log("This statement is true")
} else {
    console.log("This statement is false")
}
//NOTE You use "===" to avoid type coercion(the conversion of one type of object to a another object of a different type with similar content)
var yesNum = 4
var yesOtherNum = "4"
if(yesNum === yesOtherNum){
    console.log("This statement is true")
} else {
    console.log("This statement is false")
}
//NOTE You CANNOT use words as strings with math operators
//NOTE The value NaN(Not a Number) is a JS falsy situation
var skirtNum = 4
var skirtOtherNum = "palace"
var myValue = skirtOtherNum - skirtNum
if(myValue){
    console.log("This statement is true")
} else {
    console.log("This statement is false")
    console.log(myValue)
}
//SECTION Else If
var cars = ["audi", "bmw", "mercedes", "lucid"]
var selectedCars = cars[2]
if (selectedCars == "audi"){
    console.log("the car is an audi")
}
else if(selectedCars == "bmw"){
    console.log("the car is an bmw")
}
else if(selectedCars == "mercedes"){
    console.log("the car is an mercedes")
}
else{
    console.log("the car is a lucid")
}
//SECTION Switch Statements
//Switch statements do the same thing as else if statements but are a bit more compact, sytactically
var foods = ["apples", "oranges", "pears", "kiwis"]
var selectedFoods = [2]
switch(selectedFoods){
    case "apples": console.log("the food selected is: apples")
        break
    case "oranges": console.log("the food selected is: oranges")
        break
    case "pears": console.log("the food selected is: pears")
     break
    default: console.log("the food selected is: kiwis")
}
//SECTION Using && 
//NOTE For the condition to come back true, BOTH the variables goodMood and gotSleep have to be true
var goodMood = true
var gotSleep = true
if(goodMood && gotSleep){
    console.log("today is a good day")
}
else{
    console.log("I am angry")
}
//SECTION Using ||
//NOTE You use this to check to see if any of the statements in the selector are true
//NOTE If any of them are, the whole statement is true
var gotHoes = false
var gotBros = true
var canCook = false

if(gotHoes || gotBros || canCook){
    console.log("shaba-laba ding-dong")
}
else{
    console.log("yee heeeeee")
}
//SECTION Loops 
//NOTE Used to itirate through a number of values to do something
//NOTE For 
//NOTE var i = initializer, i < 10 = condition, i++ = incrementor
for (var i = 0; i < 10; i++){
    console.log(i)
}
//SECTION Working with Arrays
//NOTE Zero is the most common initial value because you will be frequently working with arrays, which are zero indexed
var chips = ["bbq", "flaminhots", "cheddar", "ranch"]
for(var j = 0; j < 4; j++){
    console.log(chips[j])
}
//NOTE You can do the condition as a .length for the condition becasue it is looping through an array of strings
var homes = ["apartments", "condos", "townhomes", "duplexes"]
for(var k = 0; k < homes.length; k++){
    console.log(homes[k])
}
//SECTION The For..Of Loop
//NOTE The for .. of is specifically for looping through arrays
var countries = ["usa", "russia", "poland", "germany"]
for ( var eachCountry of countries){
    console.log(eachCountry)
}
//SECTION  Strings as arrays
//NOTE In JS a string can be treates like an array
var statement = "I like to listen to music and look at mountains"
for( var l = 0; l < statement.length; l++){
    console.log(statement[l] + '\n')
}
//NOTE You can also loop through strings with a for of loop
var videogames = "The best videogames of all-time are the OG call of duty's "
for ( var eachVideogame of videogames){
    console.log(eachVideogame)
}
//SECTION While loops
//NOTE Repeat  a section of code an unknown number of times until a specific condition is met
var incrementor = 0;
var incrementortext = ""
while(incrementor <= 10){
    incrementortext += " The incrementor has gone up to " + incrementor + "\n"
    incrementor++
}
console.log(incrementortext)
//SECTION Template Literals
//NOTE "${}" around your expressions allows you to embed them in your strings
var incrementorBro = 0;
var incrementorBrotext = ""
while(incrementorBro <= 10){
    incrementorBrotext += `The incrementor has gone up to ${incrementorBro} \n`
    incrementorBro++
}
console.log(incrementorBrotext)
//NOTE You can use operators within template literals
var m = 1
var mtext = "";
while( m < 11){
    mtext += `The incrementor is ${m}, the incrementor squared is ${m * m} \n`
    m++
}
console.log(mtext)
//SECTION Structured Programming
//NOTE Consist of the three structures that we have already worked with
//NOTE Sequence - First you do this, then you do that, and then finally you do this over here
//NOTE Selection - If some condition is met do this otherwise do that
//NOTE Loop - WHile this condition is true, do this
//NOTE PRACTICE - Create a variable called my String and assign the following string "I am really hungry for some"
    //Print it to console
        //Create a variable called myupperstring and use a string methof yo capitalize all the text in the first strinf then print it
var myPractice = "I am really hungry for some"
console.log(myPractice)
var myUpperPractice = myPractice.toUpperCase()
console.log(myUpperPractice)
//NOTE PRACTICE CNTD... pull really from the first string and put it as its own variable
    //Then convert it to uppercase
        //Then make a new string and replace the lowercase really with the uppercase one and print
var reallyLocation = myPractice.search('really')
var specialWord = myPractice.substr(reallyLocation, 6)
specialWord = specialWord.toUpperCase()
var newPractice = myPractice.replace('really', specialWord)
console.log(specialWord)
//NOTE Practice Pt. 2 - MAke an array called breakfast and put four foods in the array
    // Then use string literal syntax to print a sentence to the console variable "myPractice  and the breaksfast in array
var poptart = ["smores", "strawberry", "blueberry", "raspberry"]
for ( var eachPoptart of poptart){
    console.log(`${myPractice} ${eachPoptart} `)
}
//NOTE Loop + Selection
//NOTE Practice Pt.3 - Modify the script so that if the food is an even number convert it to uppercase otherwise dont convert it
for(var n=0; n<poptart.length; n++){
    var remainder = n % 2;
    if(remainder === 0){
        var poptartUpper = poptart[n].toUpperCase()
        console.log(`${myPractice} ${poptartUpper} `)
    }
    else{
        console.log(`${myPractice} ${poptart[n]} `)
    }
}
//SECTION Refactoring Code
//NOTE The process of making code more concise and more readable
//NOTE Code from Practice Pt. 3 Refactored
for(var n=0; n<poptart.length; n++){
    if(n % 2 === 0){
        console.log(`${myPractice} ${poptart[n].toUpperCase()} `)
    }
    else{
        console.log(`${myPractice} ${poptart[n]} `)
    }
}
//SECTION Functions
//NOTE Reusable Sets of Instructions - A fucntion lets you combine a group of instructions together and give them a name
/*NOTE FUNCTION SETUP:
function name(){
    do something;
    do something else;
    do another thing;
}
name();
*/
function doStuff(){
    var myTest = "here is my test lil dawg"
    var upperText = myTest.toUpperCase();
    console.log(myTest)
    console.log(upperText)
    }
    doStuff()
//SECTION Passing in Data
//NOTE Fucntions can take data through parameters that are passed into the function
/*NOTE FUNCTION SETUP:
function name(param1, param2, param3){
    do something with param1;
    do something with param2;
    do something with param3;
}
name('stuff1', 'stuff2', 'stuff3');
*/
function upperStory(story){
    var upper = story.toUpperCase()
    console.log(upper)
}
upperStory("an important message!")
//NOTE You can pass in integers and use math operators within fucntions
function addNumz( num1, num2){
    var sum = num1 + num2
    console.log(sum)
}
addNumz(24,42)
//SECTION Returning Data
//NOTE Fucntions can return data after having performed whatever operations that fucntion does on that data
/*NOTE FUNCTION SETUP:
function returnData(param1, param2){
    do something with params;
    return result;
}
*/
function returnSumz(num1, num2){
    var sumz = num1 + num2
    return sumz
}
console.log(returnSumz(5, 3))
//SECTION Useful Function examlpes
//NOTE Generating Random Numbers
//NOTE Math.random will give you a decimal equal to "0" and less than "1"( its not truely random, it uses an algorith, random enough for this purpose )
console.log(Math.random())
//NOTE STEP1
function randomInt(min, max){
    var numOfValues = max - min + 1
    console.log(numOfValues)
}
randomInt(5,10)
//NOTE STEP2 - Generate a random number between 0 and 1, then multiply that with the number of possible values
function randomInt(min, max){
    var numOfValues = max - min + 1
    var randomNum = Math.random()
    var randomVal = randomNum * numOfValues
    console.log(randomVal)
}
randomInt(5,10)
//NOTE STEP3 - round down this random number so that it becomes a whole number with math.floor
//NOTE .floor is round down numbers to a whole number
function randomInt(min, max){
    var numOfValues = max - min + 1
    var randomNum = Math.random()
    var randomVal = randomNum * numOfValues
    var roundedRandomVal = Math.floor(randomVal)
    console.log(roundedRandomVal)
}
randomInt(5,10)
//NOTE STEP4 - take the random number we generated and add the minimum number from our range, in this case it is a 5
function randomInt(min, max){
    var numOfValues = max - min + 1
    var randomNum = Math.random()
    var randomVal = randomNum * numOfValues
    var roundedRandomVal = Math.floor(randomVal)
    var finalNum = min + roundedRandomVal
    console.log(finalNum)
}
randomInt(5,10)
//NOTE STEP5 - Applying it to a function
var phones = ["iphone", "galaxy", "blackbberry", "nokia"]
function randomInt(min, max){
    var numOfValues = max - min + 1
    var randomNum = Math.random()
    var randomVal = randomNum * numOfValues
    var roundedRandomVal = Math.floor(randomVal)
    var finalNum = min + roundedRandomVal
    return finalNum
}
console.log(phones [randomInt(0, 3)])
//NOTE REFACTORING EXAMPLE^^^
var phones = ["iphone", "galaxy", "blackbberry", "nokia"]
function randomInt(min, max){
    return Math.floor((max - min + 1) * Math.random()) + min
}
console.log(phones [randomInt(0, 3)])
//SECTION Functions can be anonymous
//NOTE Functions are first class citizens in JS, meaning you can assign a fucntion to a variable the same way you can assign a string to a variable
var greeting =  function(){
    var name = prompt("Please tell me your name", "")
    console.log(`Hello ${name}, how are you today`)
}
greeting()
//SECTION Arrow Functions
//NOTE ES6  brought new syntax for defining fucntions
var topOfThaMorning = "Top of the morning to you my good sir"
//Regular Function syntax
function capitalizeFunction(anyString){
    anyString = anyString.toUpperCase
    return anyString
}
console.log(capitalizeFunction)
//Anonymous Function syntax
var capitalizeExpression = function(anyString){
    anyString = anyString.toUpperCase
    return anyString
}
console.log(capitalizeExpression)
//Arrow Function syntax
var capitalizeArrow = anyString => anyString.toUpperCase()
console.log(capitalizeArrow)
//SECTION Functions and Methods
//NOTE  Sometimes you will hear the term "function" and other times you will hear the term "method". These two terms are technically interchangeable in JS
function doStuff(){
    var myTest = "here is my test lil dawg"
    var upperText = myTest.toUpperCase();
    console.log(myTest)
    console.log(upperText)
    }
    window.doStuff()
    
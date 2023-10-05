// you can run js codes on js engine of web browsers or node js 
// it`s a good way to write scripts in the end of head or body of html 


// Variables : 
// var(old) / let (es6) keywords
// default value of variables are undefined / can`t use hyphen in declaring variable name
let name; 
console.log(name) ; 


// const keyword :
// you can not change it's value
const constant = 3 ; 
//constant = 5 ;
console.log(constant)


// primitive types --> string , numbers , boolean , undefined , null
// js is a dynamic language because you can assign a string , number or ... to a specific variable
// type of a variable which is assigned to a UNDEFINED is undefined but if it is assigned to null is a object


// reference variables --> object , function , array 
// object :
let person = {
    name : 'Aras' , 
    age : 30 
};
console.log(person)
// accessing to properties of an object 
// 1.dot notation 
person.name = 'Mosh';
// 2.bracket notation
person['name'] = 'Mary';
let section = 'age';
person[section] = 21;


// array :
let selectedColors = ['Red' , 'Blue'];
console.log(selectedColors);
// console.log(typeof selectedColors) --> object

//function :
function greet (){
    console.log('Greeting');
}
// at the end of declaring of a function we do not need semi colone
greet();


// Operators :


// Arithmetic operators :
let x = 10 , y = 3 ;
// console.log(x%y); --> 1
// console.log(x ** y) --> 1000


// equality :
// district equality (check both type and value): === , !==
// lose equality (if both types are not equal it tries to convert right type to left type) 
// true == 1 ---> true = true , 1 == '1' --> 1 == 1

// ternary :
let point = 100 ;
let type = point > 50 ? 'gold' : 'silver' ;
console.log(type);


// control flow 

// if conditions :
let hour = 9 ;
if (hour <= 12 && hour >= 6) {
    console.log('Good morning')
}
else if (hour > 12 && hour <= 18){
    console.log('Good evening')
}
else{
    console.log('Good Evening')
}

let user = 'guest' ;
switch (user){
    case 'guest' : {
        console.log('hi guest')
    }
    case 'admin' : {
        console.log('hi admin')
    }
}

// loops :
for (let i = 0 ; i < 5 ; i++){
    console.log('lob lob');
}


let i = 0 ; 
while (i < 5){
    console.log('lob lob');
    i++;
}


// for - in
// access to property of object or index of array
for (let key in person) {
    console.log(person[key] , key)
}
colors = ['red', 'blue']
for (let element in colors){
    console.log(colors[element] , element)
}

// for - of
// direct access to element of array
for (let element of colors){
    console.log(element)
}

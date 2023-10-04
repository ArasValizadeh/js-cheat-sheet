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
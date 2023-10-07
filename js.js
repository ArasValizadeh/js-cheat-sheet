// you can run js codes on js engine of web browsers or node js 
// it's a good way to write scripts in the end of head or body of html 


// Variables : 
// var(old) / let (es6) keywords
// default value of variables are undefined
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
// true == 1 ---> true == true , 1 == '1' --> 1 == 1

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
// direct access to element of array . it used for iterables like map and array
// if you use it for object you will get error
for (let element of colors){
    console.log(element)
}


// Object 
let circle = {
    radius:3,
    location : {
        x : 1 , 
        y : 2 
    },
    draw :function (){
        console.log(`draw in ${this.location.x } , ${this.location.y}`)
    }
}

// object factory
function createCircle(radius){
    return{
        radius,
        draw (){
            console.log(`drawing ${this.radius}`);
        }
    }
}

let circle1 = createCircle(3);
circle1.draw()

// objects are dynamic in js , you can add and delete properties
circle1.color = 'yellow'
delete circle1['color']
circle1.radius = 5

//Constructors
function Circle (radius){
    this.radius = radius ,
    this.draw = () => {
        console.log('i was made by constructor')
    }
}

// make an instance using a constructor
let circle2 = new Circle(3);
let circle3 = Circle.call({} , 5)
let circle4 = Circle.apply({} , [4])

// objects are not iterable so you can not use for-of Objects.keys(instance) --> it returns an array which is iterable
// or you can use Objects.entries() --> it return an key value in a array that has property and their value\
for (let key of Object.keys(circle2)){
    console.log(key)
}

// copy an object to another object 
let another = {}
for (let key in circle2) {
    another[key] = circle2[key]
}
let another2 = Object.assign({
    color : 'Red' , 
},circle2)
console.log(another2)

//spread 
let another3 = {...circle2}

let friend = 'john'
//template literal
let myString = `my
first
string to my friend ${friend} he has
${1+1} babies`;
console.log(myString)


// Date 
const now = new Date();
let birthDay = new Date(2004 , 3 , 11)
console.log(now.toDateString() , now.toISOString())
console.log(`you are ${now.getFullYear() - birthDay.getFullYear()} years old`)


// Array 


// adding items
const numbers = [2,3,8,2]
//add to end of array
numbers.push(7 , 8)
//add to beginning of array
numbers.unshift(1,2)
// add to middle of array --> numbers.splice()


// search for an element , these methods has 2 argument which represent the start index
console.log(numbers.includes(2))

console.log(numbers.indexOf(2) ,numbers.lastIndexOf(2))


// to search a non primitive type in array we have to use find and findindex method

const users = [
    {id : 1 , name :'Aras'} ,
    {id : 2 , name :'Amanj'}
]

const findUser = users.find(function (element) {
    return element.name == 'Amanj'
})

// removing item

// end 
numbers.pop()

// beginning
numbers.shift()

//middle --> numbers.splice(start , howMany)


// empty an array

numbers.splice(0 , numbers.length);
numbers.length = 0 

// combine 2 arrays

let array1 = [{id : 1},2,3,4]
let array2 = [5,3,2,1]
//let concat = array1.concat(array2)
let concat = [...array1 ,'add element' ,...array2]
array1[0].id = 2;

console.log(concat)



// iterate an array
for (let number of numbers) console.log(number)

concat.forEach(function (number , index) {
    console.log(index , number)
})

// join function
const joined = concat.join('*__*')
console.log(joined)  

// sorting an array
// sorting primitive types are easy 
let numbers2 = [3,4,1,4,2,9 ,4, 6]
numbers2.sort(); // ascending order by default
console.log(numbers2)

let courses = [
    { name: "HTML", id: 3 },
    {name:"CSS" , id:  2}, 
    {name :"JS" , id:   1}
];

courses.sort(function (a , b){
    // a > b 1
    // a < b -1
    // a = b 0
    // it compare by their ascii code
    // it`s safer to convert both of them to lowercase 
    if (a.name > b.name) return 1
    else if (a.name < b.name) return -1 
    return 0
})
console.log(courses)


// test all elements of array
let arr=[0,1,2,3,4,5,6]
const allBiggerThanZero = arr.every(function (element){
    return element > 0
})
console.log(allBiggerThanZero)
const existAnElementBiggerZero = arr.some(function () {

})


// filtering array
const filtered = arr.filter((value) => {
    return value > 0 
})
console.log(filtered)

// mapping an array
let mapped = filtered.map( (value) => {
    return value * 2
})

console.log(mapped)

// sum all elements of array 
const sum = arr.reduce(function (accumulator , currentValue){
    return accumulator + currentValue;
})
console.log(sum)
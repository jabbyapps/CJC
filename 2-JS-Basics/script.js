/*
var name = 'Erebon';
console.log(name);

var lastName = 'Inbrain';
console.log(lastName);

var age = 42;
console.log('I am ' + age);

var fullAge = true;
console.log(fullAge);


newName = prompt('What is the last name? ');
console.log('The last name is ' + newName);

alert('Later gator');
*/
/*var birthYear = 2018 - 46;
console.log(birthYear);

var ageGlen = 2018 - 1972;
ageGlen++;
console.log(ageGlen);
*/
////////////////////////////////////////////////////////////////////
// Lecture: if/else statements
/*
var name = 'John';
var age = 92;
var isMarried = 'yes';

if (isMarried === 'yes') {
    console.log(name + ' is married!');
} else {
    console.log(name + ' is not married.');
}

isMarried = true;

if ( isMarried ){
    console.log('Yes');
} else {
    console.log('No');
}
*/
/////////////////////////////////////////////////////////////////////
// Lecture: Boolean logic and Switch
//
/*
var age = 15;

if ( age < 20) {
    console.log('John is a teenager');
} else if (age >= 20 && age < 30) {
    console.log('John is a young man');
} else {
    console.log('John is a man.');
}

var job = 'teacher';

job = prompt('What does john do? ');

switch (job) {
    case 'teacher':
        console.log('John teaches kids.');
        break;
    case 'driver':
        console.log('John drives a cab');
        break;
    case 'cop':
        console.log('John is a copper');
        break;
    default:
        console.log('John does something else');
}
*/
var johnHeight = 183;
var johnAge = 47;
var billHeight = 183;
var billAge = 47;
var glenHeight = 345;
var glenAge = 122;

var johnValue = johnHeight + johnAge * 5;
var billValue = billHeight + billAge * 5;
var glenValue = glenHeight + glenAge * 5;

if (johnValue > billValue && johnValue > glenValue) {
    console.log('Johns value ' + johnValue + ' is higher');
    
} else if (billValue > johnValue && billValue > glenValue) {
    console.log('Bills value of ' + billValue + ' is higher');

} else if (glenValue > johnValue && glenValue > billValue) {
    console.log("Glen's value of " + glenValue + " is the highest ever.");
} else {
    console.log('They are both equally high');
}
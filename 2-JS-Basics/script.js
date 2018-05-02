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
/*
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
*/

///////////////////////////////////////////////////////////////////
// Lecture: Functions
/*
function calculateAge(yearOfBirth) {
    var age = 2018 - yearOfBirth;
    return age;
}
var ageGlen = calculateAge(1972);
//console.log(ageGlen);

function yearsUntilRetirement(name, year) {
    var age = calculateAge(year);
    var retirement = 65 - age;

    if (retirement >= 0) {
        console.log(name + ' will retire in ' + retirement + ' years.');
    } else {
        console.log(name + ' is already retired.');
    }
}

yearsUntilRetirement('Glen', 1972);
*/

///////////////////////////////////////////////////////////////////
// Lecture: Statements and expressions
/*
//statement:
function someFun(par) {
    //code
}

//expression:
var someFun = function(par) {
    //code
}

// expressions are meant to produce a value:
3 + 4;
var x = 3;

//statement do some action
if ( x == 5) {
    //do something
}
*/

////////////////////////////////////////////////////////////////////
//Lecture: Arrays
/*
var myName = ['Cara', 'Catie', 'Carrie'];
var years = new Array(2016, 2018, 1976);

console.log(myName);
myName[3] = 'Glen';
console.log(myName);

var cara = ['Cara', 'Barnett', 2016, 'toddler', 'blue'];

// add Max to the end
cara.push('Max');

// add Front to the beginning of the Array
cara.unshift('Front');

// removes last element
cara.pop();

// removes first element
cara.shift();
console.log(cara);

//alert(cara.indexOf('something'));

if (cara.indexOf(2016) === -1) {
    console.log('Cara is a toddler');
}
*/
//////////////////////////////////////////////////////////////////////////
//Lecture: Objects
/*
var cara = {
    name: 'Cara',
    lastName: 'Barnett',
    yearOfBirth: 2016,
    job: 'Software Programmer',
    isMarried: false
};

console.log(cara.lastName);

var xyz = 'job';
console.log(cara[xyz]);
//console.log(xyz);

var catie = new Object();
catie.name = 'Catie';
catie.lastName = 'Barnett';
catie['yearOfBirth'] = 2018;
catie['job'] = 'Software Architect';

console.log(catie);
*/
////////////////////////////////////////////////////////////////////////////
// Lecture: Objects and methods
// v1.0
/*
var cara = {
    name: 'Cara',
    lastName: 'Barnett',
    yearOfBirth: 2016,
    job: 'Software Programmer',
    inSchool: false,
    family: ['Catie', 'Carrie', 'Glen'],
    calculateAge: function() {
       return 2018 - this.yearOfBirth;
    }
};



console.log(cara.calculateAge());
var age = cara.calculateAge();
cara.age = age;
console.log(cara);
*/

// v2.0
/*
var cara = {
    name: 'Cara',
    lastName: 'Barnett',
    yearOfBirth: 2016,
    job: 'Software Programmer',
    inSchool: false,
    family: ['Catie', 'Carrie', 'Glen'],
    calculateAge: function() {
       this.age = 2018 - this.yearOfBirth;
    }
};

console.log(cara);
cara.calculateAge();
//console.log('Two ' + cara);

var catie = {
    name: 'Catie',
    lastName: 'Barnett',
    yearOfBirth: 2018,
    job: 'Software Architect',
    inSchool: false,
    calculateAge: function() {
        this.age = 2018 - this.yearOfBirth;
    }
};

catie.calculateAge();
console.log(catie);
*/
///////////////////////////////////////////////////////////////////
// Lecture: Loops
/*
for (var i = 1; i < 11; i++) {
    console.log(i);
}
*/
//var names = ['Catie', 'Cara', 'Carrie', 'Max', 'Glen'];
/*
for (var i = names.length - 1; i >= 0; i--) {
    console.log(names[i]);
}
*/

//While loop
/*
var i = 0
while ( i < names.length){
    console.log(names[i]);
    i++;
}

for (var i = 1; i <=5; i++) {
    if ( i === 3 ){
        continue;
    }
    console.log(i);
}
*/
//////////////////////////////////////////////////////////////////////
// Coding Challenge 2

var years = [2018, 2016, 2002, 1976, 1972];
var years2 = [1950, 1955, 1976, 1972, 2015];
var empty = [];
/*
for ( var i = 0; i < years.length; i++) {
    empty[i] = 2018 - years[i];
}
//console.log(empty);
for ( var i = 0; i < empty.length; i++) {
    if (empty[i] >= 18) {
        console.log('full age ' + empty[i]);
    } else {
        console.log('Not full age ' + empty[i] );
    }
}
*/
function printFullAge(years) {
   var empty = [];
   for ( var i = 0; i < years.length; i++) {
       empty[i] = 2018 - years[i];
   }
   for ( var i = 0; i < empty.length; i++){
       if ( empty[i] >= 18){
           empty[i] = true;
       } else {
           empty[i] = false;
       }
   }console.log(empty);
}
//var full_1 = printFullAge(years);
printFullAge(years);
var full_2 = printFullAge(years2);
//console.log(full_1);
//console.log(full_2);
///////////////////////////////////////
// Lecture: Hoisting

















///////////////////////////////////////
// Lecture: Scoping


// First scoping example

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}
*/



// Example to show the differece between execution stack and scope chain

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
   // console.log(a + b + c + d);
}
*/



///////////////////////////////////////
// Lecture: The this keyword


//console.log(this);
/*
calculateAge(1973);

function calculateAge(year) {
    console.log(2018 - year);
    console.log(this);
};
*/

var cara = {
    name: "Cara",
    yearOfBirth: 2016,
    calculateAge: function() {
        console.log(this);
        console.log(2018 - this.yearOfBirth);
        /*
        function innerFunction() {
            console.log(this);
        }
        innerFunction();
        */
    }   
}

cara.calculateAge();

var catie = {
    name: 'Catie',
    yearOfBirth: 2018,
};

catie.calculateAge = cara.calculateAge;
catie.calculateAge();
const studentName={
  name:"tufan Ali",
  job:"softer Engineer"
}

// console.log(studentName);

const person=new Object();
person.name="rocky hosson";
// console.log(person);

const person1= Object.create(null);
person1.name="Toli Ma";
// console.log(person1);

const bottole = {

  color : "green",
  hold : "CocaCola",
  price : 50,
  clened : true
}
const bValue = Object.values(bottole);
console.log(bValue);



// 111111111111
  class people {
    constructor(name,age){
      this.name=name;
      this.age=age;
    }
  }


  const people1 =new people("tufan ali",24);
  console.log(people1);

  //2222222




 const peopleOne = {

    name : "Tufan Ali",
    age : 24,
    haveMoney : 1000,
    Lang : [
        "Bangla",
        "English"
        
    ],
    nameDetails : {
        people1 : "Tufan",
        people2 : "Rocky",
        people3 : "Islam",
        people4 : "Milon",
        people4 : "Toli",
        people4 : "Katija"
    },

    takeExam : function(){

        // console.log(this);
    },

    giveTreat : function(exp, tips){

        this.haveMoney = this.haveMoney - exp - tips;
        return this.haveMoney;
    }
}
const result = student.giveTreat(2000, 500);
const resul5 = student.giveTreat(1000, 100);
// console.log(result);
// console.log(resul5);


var numbers = [10,20,30]

//for loops
for(let x=0; x<numbers.length; x++){
    console.log(numbers[x])
}

// using for each loop
numbers.forEach(myFunction);
function myFunction(item){
    // console.log(item)
}


numbers.forEach(function(item){
    // console.log(item)
});


var sqaureNumbers = []
numbers.forEach(function(item){
    sqaureNumbers.push(item * item)
})
// console.log(sqaureNumbers);


numbers.forEach(function(item, index, arr){
    arr[index] = item + 5;
});
// console.log(numbers)

// forEach, map and filter


// forEach
const numbers = [1,2,3,4,5]
let sqaureNumbers = []
numbers.forEach(function(x){
    sqaureNumbers.push(x*x);
})
// console.log("sqaureNumbers: "+sqaureNumbers)


// map function, it does not change the source array
let newSqaureArray = numbers.map(function(x){
    return x * x;
})
// console.log("newSqaureArray : "+ newSqaureArray)


// filter function, it does not change the source array
let numbers3 = [2,25,9,78,10]
var filteredArray = numbers3.filter(function(x){
    return x > 10;
})
// console.log("filteredArray : "+filteredArray)

/* Program for Task 4*/
// Letter Grade Program. Happy coding

var marks = parseInt(prompt("Enter Marks : "))

// checking the conditions
if (marks >= 80)
    document.write("A+")
else if (marks >= 70)
    document.write("A")
else if (marks >= 60)
    document.write("A-")
else if (marks >= 50)
    document.write("B")
else if (marks >= 40)
    document.write("C")
else if (marks >= 33)
    document.write("D")
else

// document.write("Sorry. You are Failed")

// A program that will find a letter is vowel or consonant
var letter = prompt("Enter a letter : ");

// convert any uppercase input into lower cause we set only lowercase letter in condition
letter = letter.toLowerCase();

if (letter == 'a' || letter == 'e' || letter == 'i' || letter == 'o' || letter == 'u') {
    // console.log("Vowel");
} else {
    // console.log("Consonant");
}



var digit = parseInt(prompt("Enter a digit : "));
switch (digit) {
    case 0:
        document.write("Zero");
        break;

    case 1:
        document.write("One");
        break;

    case 2:
        document.write("Two");
        break;

    case 3:
        document.write("Three");
        break;

    case 4:
        document.write("Four");
        break;

    case 5:
        document.write("Five");
        break;

    case 6:
        document.write("Six");
        break;

    case 7:
        document.write("Seven");
        break;

    case 8:
        document.write("Eight");
        break;

    case 9:
        document.write("Nine");
        break;

    default:
        document.write("Not a digit");
}
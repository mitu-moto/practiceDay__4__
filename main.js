
function compareNumber(firstNumber, secondNumber) {

    if (firstNumber > secondNumber){
        console.log( firstNumber + " is greater than " + secondNumber);
    } else if (firstNumber < secondNumber){
        console.log( firstNumber + " is less than " + secondNumber);
    } else {
        console.log( "Both numbers are equal");
        console.log("This is another statement");
    }
}

compareNumber(5,10)
compareNumber(10,5)
compareNumber(10,10)

function print(){
    console.log("This is printed text");
}
print()

// function expressdion 
const add = function addNumbers(firstNumber, secondNumber) {
    return  firstNumber + secondNumber;
}
console.log(add(5,7))

//anonymous function
const subs = function(firstNumber, secondNumber){
    return firstNumber - secondNumber
}
console.log(subs(5,7))

const person = {
    firstName: "John",
    lastName: "Doe",
    print: function(){
        console.log(" This function is a property of an object");
    }
}

person.print();







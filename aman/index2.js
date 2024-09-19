function checkCharacter(char) {
   
    var asciiCode = char.charCodeAt(0);

    
    if (asciiCode >= 48 && asciiCode <= 57) {
        console.log(`${char} is a number.`);
    }
    
    else if (asciiCode >= 65 && asciiCode <= 90) {
        console.log(`${char} is an uppercase letter.`);
    }
    
    else if (asciiCode >= 97 && asciiCode <= 122) {
        console.log(`${char} is a lowercase letter.`);
    }
    
    else {
        console.log(`${char} is not a number or letter.`);
    }
}

checkCharacter('A');  
checkCharacter('a');  
checkCharacter('5');  
checkCharacter('#');  


function compareNumbers(num1, num2) {
    if (num1 > num2) {
        console.log(`${num1} is larger than ${num2}.`);
    } else if (num2 > num1) {
        console.log(`${num2} is larger than ${num1}.`);
    } else {
        console.log(`${num1} and ${num2} are equal.`);
    }
}


compareNumbers(5, 10); 
compareNumbers(20, 5);  
compareNumbers(7, 7);   

function checkNumber(num) {
    if (num > 0) {
        console.log(`${num} is a positive number.`);
    } else if (num < 0) {
        console.log(`${num} is a negative number.`);
    } else {
        console.log(`${num} is zero.`);
    }
}


checkNumber(10);    
checkNumber(-5);    
checkNumber(0);   




function isVowel(char) {
    
    char = char.toLowerCase();

    
    if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
        return true;
    } else {
        return false;
    }
}


console.log(isVowel('A'));  
console.log(isVowel('e'));  
console.log(isVowel('z'));  
console.log(isVowel('O')); 
console.log(isVowel('b'));  


var correctPassword = "appleStore";


function validatePassword(userPassword) {

    if (userPassword === "") {
        console.log("Please enter your password.");
    } 

    else if (userPassword === correctPassword) {
        console.log("Correct! The password you entered matches the original password.");
    } 

    else {
        console.log("Incorrect password.");
    }
}


var userPassword = prompt("Enter your password:");
validatePassword(userPassword);



var greeting;
var hour = 13;

if (hour < 18) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}

console.log(greeting);  



function convertTime(time) {

    if (time < 0 || time > 2359 || isNaN(time)) {
        console.log("Invalid time format. Please enter a valid time between 0000 and 2359.");
    } else if (time >= 0 && time < 1200) {
        if (time === 0) {
            console.log("12:00 AM");  
        } else {
           var hours = Math.floor(time / 100);
            var minutes = time % 100;
            console.log(`${hours}:${minutes < 10 ? "0" + minutes : minutes} AM`);
        }
    } else if (time >= 1200 && time < 1300) {
        if (time === 1200) {
            console.log("12:00 PM"); 
        } else {
            var minutes = time % 100;
            console.log(`12:${minutes < 10 ? "0" + minutes : minutes} PM`);
        }
    } else if (time >= 1300 && time <= 2359) {
      varhours = Math.floor(time / 100) - 12;
        var minutes = time % 100;
        console.log(`${hours}:${minutes < 10 ? "0" + minutes : minutes} PM`);
    } 
}

var timeInput = prompt("Enter time in 24-hour format (e.g., 1900 for 7 PM): ");
convertTime(parseInt(timeInput)); 








var studentNames = [];

var studentNames = new Array();

var stringsArray = ["apple", "banana", "cherry"];

var numbersArray = [10, 20, 30, 40, 50];
var booleanArray = [true, false, true, false];

var mixedArray = ["apple", 42, true, null, "banana"];

var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];


document.write("<h2>Available Education Qualifications in Pakistan:</h2>");
document.write("<ol>");
for (var i = 0; i < qualifications.length; i++) {
    document.write("<li>" + qualifications[i] + "</li>");
}
document.write("</ol>");

var studentNames = ["Ali", "Sara", "John"];

var studentScores = [450, 400, 470];

var totalMarks = 500;

for (var i = 0; i < studentNames.length; i++) {
    var percentage = (studentScores[i] / totalMarks) * 100;
    console.log(`Score of ${studentNames[i]} is ${studentScores[i]}. Percentage: ${percentage}%`);
    document.write(`Score of ${studentNames[i]} is ${studentScores[i]}. Percentage: ${percentage}%<br>`);
}




var colors = ["Red", "Green", "Blue", "Yellow", "Purple"];

function displayColors(arr) {
    document.write("<h3>Colors in the Array:</h3>");
    document.write(arr.join(", ") + "<br><br>");
}

 displayColors(colors);

var colorToAddAtBeginning = prompt("What color do you want to add to the beginning?");
colors.unshift(colorToAddAtBeginning); 
displayColors(colors);


var colorToAddAtEnd = prompt("What color do you want to add to the end?");
colors.push(colorToAddAtEnd); 
displayColors(colors); 


colors.unshift("Orange", "Pink"); 
displayColors(colors); 


colors.shift(); 
displayColors(colors); 


colors.pop(); 
displayColors(colors); 


indexToAdd = prompt("At which index do you want to add a color?");
colorToAdd = prompt("Enter the color name you want to add:");
colors.splice(indexToAdd, 0, colorToAdd);
displayColors(colors);


var indexToDelete = prompt("At which index do you want to delete color(s)?");
var numberOfColorsToDelete = prompt("How many colors do you want to delete?");
colors.splice(indexToDelete, numberOfColorsToDelete);
displayColors(colors); 


var studentScores = [78, 95, 62, 89, 55, 99, 71];


document.write("<h3>Original Student Scores:</h3>");
document.write(studentScores.join(", ") + "<br><br>");


studentScores.sort(function(a, b) {
    return a - b;
});


document.write("<h3>Sorted Student Scores in Ascending Order:</h3>");
document.write(studentScores.join(", ") + "<br>");


var cities = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix"];

var selectedCities = [];

selectedCities = cities.slice(0, 4); 

console.log("Selected Cities: ", selectedCities);



var arr = ["This", " is", " my", " cat"];
var sentence = arr.join("");
console.log(sentence);


var queue = [];

queue.push("pakistan");
queue.push("canada");
queue.push("usa");

console.log(queue.shift()); 
console.log(queue.shift()); 
console.log(queue.shift()); 
console.log(queue); 


var citiesName = [];


citiesName.push("First");
citiesName.push("Second");
citiesName.push("Third");


console.log(citiesName.shift());
console.log(citiesName.shift()); 
console.log(citiesName.shift());

console.log(citiesName); 



var stack = [];


stack.push("First");
stack.push("Second");
stack.push("Third");

console.log(stack.pop()); 
console.log(stack.pop()); 
console.log(stack.pop()); 

console.log(stack); 


       
        var manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
        var dropdownHTML = '<select name="manufacturers" id="manufacturers">';
      
        for (var i = 0; i < manufacturers.length; i++) {
            dropdownHTML += '<option value="' + manufacturers[i] + '">' + manufacturers[i] + '</option>';
        }

        dropdownHTML += '</select>';

        document.write(dropdownHTML);
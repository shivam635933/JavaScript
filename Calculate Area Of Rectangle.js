//To Write a JavaScript function called "calculateArea" that takes two parameters: "length" and "width". 
//The function should calculate and return the area of a rectangle using the given length and width.

//Function Declaration
function calculateArea(length,width){
      
      return length*width; //To Calculate Area of Rectangle
      
      //or we can use
      //Area = length*width;
      //return Area;
}

var length = parseInt(prompt("Enter Length of the Rectangle: ")); //prompt is used to take input(in string form) and parseInt is used to convert string into int
var width = parseInt(prompt("Enter Width of the Rectangle: "));

//Invoking Function
var Area = calculateArea(length,width);//Area to store the value of the return value of the function
console.log("Area of Rectangle is: "+Area); //To Print the Area of Rectangle


//Function to Calculate Perimeter of the Rectangle
//function calculatePerimeter(length,width) {
   //return 2*(length+width);
//}

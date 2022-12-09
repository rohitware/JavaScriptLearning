var my_number = 100; // 200
var your_number = 200;  // 100
console.log("Before swap");
console.log( my_number, your_number);

var temp = my_number;
my_number=your_number;
your_number = temp;
console.log("After swap");
console.log( my_number, your_number);

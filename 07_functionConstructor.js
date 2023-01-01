function Student(name, rollNo, age){
    this.name = name;
    this.rollNo = rollNo;
    this.age = age;
 }
 let s1 = new Student("Vinny", 111, 23);
 console.log(s1.rollNo);
 let s2 = new Student("Jenny", 22, 35);
 console.log(s1);
console.log(`------------------------------------------------`);

 function Student(name, rollNo, age){
    this.name = name;
    this.rollNo = rollNo;
    this.age = age;
 }
 Student.prototype.country = "India";
 let vinny = new Student("Vinny", 111, 23);
 let jenny = new Student("Jenny", 44, 45);
 let minny = new Student("Minny", 55, 23);
 let tommy = new Student("Tommy", 66, 35);
 console.log(vinny);
 console.log(jenny);
 console.log(minny);
 console.log(tommy);
 console.log(vinny.country);
 console.log(minny.country);
 console.log(jenny.country);
 console.log(tommy.country);



 // Array
const arrayOfNum = [3, 5, 6, 8, 9];
let arrayLen = arrayOfNum.length;
arrayOfNum.push(10);
arrayOfNum.pop();
arrayOfNum.unshift()

let date = new Date("1996-12-22");
let month = date.getMonth();
let year = date.getFullYear();
let day = date.getDay();
console.log(month, year, day);

let sqrt =  Math.sqrt(25);
let pow = Math.pow(2, 3);//2*2*2
let pi =  Math.PI;
console.log(sqrt, pow, pi);
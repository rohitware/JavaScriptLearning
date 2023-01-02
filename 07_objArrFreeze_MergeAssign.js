console.log(`1]. Creating object of personal Details...`);
const personalDetails = {
    name: "Rohit",
    education: "MCM",
    location: "PUNE",
    age: 30,
    gender: "Male",
}
console.log(`Personal Details are:-->`, personalDetails);

console.log(`----------------------------------------------------------------------------------------------------------------------`);

console.log(`2]. Creating object of College Details...`);
const collegeDetails = {
    clgName: "Wadia College",
    location: "Pune",
    university: "Pune University",
    departments: function () {
        console.log(`There are total 6 Departments: 1]. Computer Science Engineering, 2]. Electronics Enineering, 3]. Civil Engg, 4]. Mechanical Engg, 5]. Production Engg, 6]. IT Engg`);
    }
}
console.log(`College Details are:-->`, collegeDetails);

console.log(`----------------------------------------------------------------------------------------------------------------------`);

console.log(`3]. After Merging above 2 Objects and logging details...`);
let mergeObjects = Object.assign(personalDetails, collegeDetails);
console.log(mergeObjects);

console.log(`----------------------------------------------------------------------------------------------------------------------`);
console.log(`4]. Creating an array of friends & freezing it`);
const arrayOfFriendsName = ["Raja", "Harshal", "DK", "Rahul", "Sandeep"]
let freezeArray = Object.freeze(arrayOfFriendsName);
console.log(freezeArray);

console.log(`----------------------------------------------------------------------------------------------------------------------`);
console.log(`5]. Iterating step 4 using for of loop & log friend names...`);
for (const friendNames of freezeArray) {
    console.log(friendNames);
}

console.log(`----------------------------------------------------------------------------------------------------------------------`);
console.log(`6]. Given String is--> "Codemind Technology" from which Reversing only "Technology" word...`);
var myString = "Codemind Technology";
var EmptyString = "";
for (let index = myString.length - 1; index >= 9; index--) {
    var myString1 = myString.charAt(index);
    EmptyString = EmptyString + myString1;
    // console.log(myString[index]);      
}
var newString = "Codemind";
var concatString = newString + " " + EmptyString;
console.log(concatString);

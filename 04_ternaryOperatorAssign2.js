function maleMarriageEligibility(gender, age, boyName) {
    var result = (gender == "Male" && age >= 21) ? `Hey "${boyName}" you are eligible for marriage.` : `Hey "${boyName}" you are not eligible for marriege.`;
    return result;
}
var result = maleMarriageEligibility("Male", 25, "Billgates");
console.log(result);
var result = maleMarriageEligibility("Male", 17, "Stew Jobs");
console.log(result);

console.log(`====================================================`);

function femaleMarriageEligibility(gender, age, girlName) {
    var result = (gender == "Female" && age >= 18) ? `Hey "${girlName}" you are eligible for marriage.` : `Hey "${girlName}" you are not eligible for marriege.`;
    return result;

}
var result3 = femaleMarriageEligibility("Female", 16, "Jenifer");
console.log(result3);
var result1 = femaleMarriageEligibility("Female", 27, "Malinda Gates");
console.log(result1);
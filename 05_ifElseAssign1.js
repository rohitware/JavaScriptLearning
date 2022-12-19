var voterEligibility = function (age) {
    if (age >= 18 && age <= 120) {
        console.log(`you are ${age} years old and you are eligible for voting`);
    } else if (age > 0 && age < 18) {
        console.log(`you age ${age} years old and you are not eligible for voting`);
    } else {
        console.log(`Invalid Age: ${age}`);
    }
}
voterEligibility(45);
voterEligibility(17);
voterEligibility(8);
voterEligibility(20);
voterEligibility(-10);
voterEligibility(200);
voterEligibility(0);

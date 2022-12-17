var isVoterEligible = function (age) {
    if (age >= 18 && age <= 120) {
        console.log(`you are ${age} years old and you are eligible for voting`);
    }
    if (age > 0 && age < 18) {
        console.log(`you age ${age} years old and you are not eligible for voting`);
    }
    if (age <= 0 || age > 120) {
        console.log(`Invalid Data`);
    }
}
isVoterEligible(45);
isVoterEligible(17);
isVoterEligible(8);
isVoterEligible(20);
isVoterEligible(-10);
isVoterEligible(200);
isVoterEligible(0);



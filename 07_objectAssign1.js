console.log(`------------------------------------------------------------------------------------`);

const professor = {

}
professor.firstName = "John";
professor.lastName = "Doe"
professor.age = 50;
professor.gender = "male";
professor.eyeColor = "blue";
console.log(`1: Properties added to professor object:`);
console.log(professor);
console.log(`------------------------------------------------------------------------------------`);


professor.degrees = {
    engineering: ` CSC`,
    phd: " Adv Computing",
    management: " MBA",
    computer: " MCA",
    totalDegrees: function () {
        return this.engineering + this.phd + this.management + this.computer;
    }
}
console.log(`2: Include nested object degrees:`);
console.log(professor.degrees);
console.log(`------------------------------------------------------------------------------------`);


professor.certificates = {
    certificate1: "Hacker Rank Participation",
    certificate2: "Certificate in IFE course",
    certificate3: "Certificate in Adv Programming",
}
console.log(`3: Include nested object certificate:`);
console.log(professor.certificates);
console.log(`------------------------------------------------------------------------------------`);


console.log(`4: professor's degrees are: ${professor.degrees.totalDegrees()} Total degrees are: ${Object.keys(professor.degrees).length} `);
console.log(`------------------------------------------------------------------------------------`);


console.log(`5: Adding new property city to professor`);
professor.city = "Pune";
console.log(professor.city);
console.log(`------------------------------------------------------------------------------------`);


console.log(`6: Modifing Exixting property age from 50 to 53`);
professor.age = 53;
console.log(professor);
console.log(`------------------------------------------------------------------------------------`);


console.log(`7: Deleting certificate1 from nested object certificates:`);
delete professor.certificates.certificate1;
console.log(professor.certificates);
console.log(`------------------------------------------------------------------------------------`);


console.log(`8: Add new certificate in nested object certificates:`);
professor.certificates.certificate4 = "certificate in Angular";
console.log(professor.certificates);
console.log(`------------------------------------------------------------------------------------`);

console.log(`9: Log nested object certificates:`);
console.log(professor.certificates);



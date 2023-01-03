class Bank {
    constructor(bank_name, location, account_no, ifsc, interest_rate) {
        this.bankName = bank_name;
        this.location = location;
        this.account_no = account_no;
        this.IFSC = ifsc;
        this.Interest = interest_rate
    }
}
let axis_bank = new Bank("Axis Bank", "Pune", 85748394065, "AXIS001118877", "11%");
let sbi_bank = new Bank("SBI", "Bhoom", 08833557744, "SBIN0013500", "8%");
let icici_bank = new Bank("ICICI", "Mumbai", 90487623485, "ICIC994433", "10%");
let kotak_bank = new Bank("Kotak Bank", "Guwahati", 9345678432, "KOT237609", "11%");
let hdfc_bank = new Bank("HDFC Bank", "Panaji", 11223344556, "HDFC09234587", "12%");
let panjab_bank = new Bank("Panjab Bank", "Mumbai", 99887766553, "PAN555433", "10.5%");


console.log(`c:`);
const arrayOfObject = [axis_bank, sbi_bank, icici_bank, kotak_bank, hdfc_bank, panjab_bank]

for (const element of arrayOfObject) {
    console.log(`Bank Name and location: ${element.bankName},  ${element.location}`);
}

console.log(`------------------------------------------------------------------------------------------------------------------`);
console.log(`D:`);
for (const element of arrayOfObject)  {
    if (element === kotak_bank) {
        console.log(element);
    }
}
console.log(`------------------------------------------------------------------------------------------------------------------`);

console.log(`E:`);
for (let index = 0; index < arrayOfObject.length; index++) {
    const element = arrayOfObject[index];
    console.log(element);
}
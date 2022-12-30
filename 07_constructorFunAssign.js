function Bank(bankname, location, ifseCode, branchCode) {
    this.bankName = bankname,
        this.location = location,
        this.ifseCode = ifseCode,
        this.branchCode = branchCode
}

let yesBank = new Bank("YES Bank", "katraj", "YES948500", "CYES001199");
let sbiBank = new Bank("SBI Bank", "Hadapsar", "SSBIN0013500", "CSBI097655");
let mahBank = new Bank("Maharashtra Bank", "kothrud", "MAH9838432342", "CMAH9984503");
let axisBank = new Bank("Axis Bank", "Karve Nagar", "AXIS0965789723", "CAXIS7645987622");

console.log(yesBank);
console.log(sbiBank);
console.log(mahBank);
console.log(axisBank);

Bank.prototype.openTime = "9 AM IST";
Bank.prototype.closeTime = "6 PM IST";

console.log(`${sbiBank.bankName} open time is: ${sbiBank.openTime} and close time is: ${sbiBank.closeTime}`);

console.log(`${axisBank.bankName}  close time is: ${axisBank.closeTime}`);

console.log(`${yesBank.bankName} branch code is: ${yesBank.branchCode} and it's open time is: ${yesBank.openTime}`);



console.log(`===============================================`);
const sbiBank = {
    bankName: "SBI",
    location: "Bhoom",
    accountNo: 08833557744,
    ifsc: "SBIN0013500",
    interestRate: "8%",
    showDetails: function () {
        return this.bankName + " " + this.location + " " + this.accountNo + " " + this.ifsc + " " + this.interestRate;
    }
}
console.log(sbiBank.showDetails());
console.log(`===============================================`);

const axisBank = {
    bankName: "Axis Bank",
    location: "Pune",
    accountNo: 85748394065,
    ifsc: "AXIS001118877",
    interestRate: "11%",
    showDetails: function () {
        return this.bankName + " " + this.location + " " + this.accountNo + " " + this.ifsc + " " + this.interestRate;
    }
}
console.log(axisBank.showDetails());
console.log(`===============================================`);

const hdfcBank = {
    bankName: "HDFC Bank",
    location: "Mumbai",
    accountNo: 98401408472,
    ifsc: "HDFC75774433",
    interestRate: "10%",
    showDetails: function () {
        return this.bankName + " " + this.location + " " + this.accountNo + " " + this.ifsc + " " + this.interestRate;
    }
}
console.log(hdfcBank.showDetails());
console.log(`===============================================`);

const yesBank = {
    bankName: "YES Bank",
    location: "Chinchwad",
    accountNo: 93750163852,
    ifsc: "YESBA00998877",
    interestRate: "9%",
    showDetails: function () {
        return this.bankName + " " + this.location + " " + this.accountNo + " " + this.ifsc + " " + this.interestRate;
    }
}
console.log(yesBank.showDetails());
console.log(`===============================================`);

const interestRate = 7.5;
// interestRate = 8.5;

const billgates = {
    height: 6,
    weight: 70,
    age: 23,
    name: "Billgates",
    company: "Microsoft",
    valuation: "130B $"
}
Object.freeze(billgates);
billgates.city = "Pune";
billgates.valuation = "140B $";
console.log(billgates);

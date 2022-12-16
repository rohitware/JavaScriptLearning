var interviewEligibility = function (gradScore, hscScore, sscScore, candidateName) {
    // Syntax: condition ? <expression if true> : <expression if false>
    var result = gradScore >= 70 || hscScore >= 80 || sscScore >= 90 ? `Congrates ${candidateName} you are eligible for TCS interview` : `Unfortunately ${candidateName} you are not eligible for interview `
    console.log(result);
}
interviewEligibility(80, 86, 90, "Rohit Ware");
interviewEligibility(70, 65, 55, "Sumit");
interviewEligibility(60, 79, 88, "Amar");
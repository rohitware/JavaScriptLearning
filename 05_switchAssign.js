function monthOfYear(monthNumber) {
    switch (monthNumber) {
        case 1:
            console.log(`Given month is January`);
            break;

        case 2:
            console.log(`Given month is February`);
            break;
        case 3:
            console.log(`Given month is March`);
            break;

        case 4:
            console.log(`Given month is April`);
            break;

        case 5:
            console.log(`Given month is May`);
            break;

        case 6:
            console.log(`Given month is June`);
            break;

        case 7:
            console.log(`Given month is July`);
            break;

        case 8:
            console.log(`Given month is August`);
            break;

        case 9:
            console.log(`Given month is September`);
            break;

        case 10:
            console.log(`Given month is Octember`);
            break;

        case 11:
            console.log(`Given month is November`);
            break;

        case 12:
            console.log(`Given month is December`);

            break;

        default:
            console.log(`Please Provide valid input`);
            break;
    }

}
monthOfYear(2);
monthOfYear(5);
monthOfYear(12);
monthOfYear(15);
monthOfYear(100);
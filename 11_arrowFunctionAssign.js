let hello = () => {
    console.log(`1a: Good Morning, Today is Monday`);
}
hello();
console.log(`----------------------------------------`);


let mul = (n1, n2, n3 = 1) => {
    console.log(`multiplication of ${n1}, ${n2}, ${n3} is:`, n1 * n2 * n3);
}
mul(5, 5, 2);
console.log(`----------------------------------------`);
mul(10, 4)
console.log(`----------------------------------------`);


let sum = (n1, n2, n3, n4, n5) => {
    let add = n1 + n2 + n3 + n4 + n5;
    return add;
}
let addResult = sum(100, 100, 200, 349, 756);
console.log(`3.a: Addition of given number is:`, addResult);
console.log(`----------------------------------------`);

let conCat = sum("i am", "learning", "ES6", 'features', " in depth");
console.log(`3.c: `, conCat);
console.log(`----------------------------------------`);

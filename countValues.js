const response = {
    maran: {
        count: 1,
    },
    gas: {
        count: 2,
    },
    prelude: {
        count: 5,
    },
    keys: ['maran', 'gas', 'prelude'],
};

let sum = 0;
for (let key of response.keys) {
    sum = response[key].count + sum;
}
console.log(`Addition of all count values is:`, sum);


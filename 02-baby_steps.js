const sum = process.argv.slice(2).reduce((accumulator, value) => {
    return accumulator + Number(value);
}, 0);

console.log(sum);
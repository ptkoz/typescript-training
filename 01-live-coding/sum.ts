
function sum(data) {
    return data.reduce(
        (carry, item) => carry + item,
        0
    )
}

console.log(
    sum([1, 5, 10, 21, 10])
);
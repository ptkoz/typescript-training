function sortPeople(people, callback) {
    const peopleSorted = people.slice();
    peopleSorted.sort(
        (a, b) => {
            if (a[0] === b[0]) {
                return a[1].localCompare(b[1]);
            } else {
                return a[0] < b[0] ? -1 : 1;
            }
        }
    )
    
    if (callback.bind(this, peopleSorted).call()) {
        return peopleSorted;
    }
}

const people: Array<[number, string]> = [
    [8, "Ringo"],
    [9, "Eugene"],
    [4, "Paul"],
    [5, "John"],
    [3, "Billy"],
    [null, "Gerard"],
];

sortPeople(people, console.log);
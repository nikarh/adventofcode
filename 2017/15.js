function part1() {
    let next = (prev, factor) => (prev*factor) % 2147483647
    let r = 0;

    let a = 722;
    let b = 354;

    for (let i=0; i < 40000000; i++) {
        a = next(a, 16807);
        b = next(b, 48271);

        if (a & 65535 === b & 65535) r++
    }

    return r;
}

function part2() {
    let next = (prev, factor, div) => {
        while ((prev = (prev*factor) % 2147483647) % div != 0) {}
        return prev;
		}
    let r = 0;

    let a = 722;
    let b = 354;

    for (let i=0; i < 5000000; i++) {
        a = next(a, 16807, 4);
        b = next(b, 48271, 8);

        if (a & 65535 === b & 65535) r++
    }

    return r;
}

console.log(part1());
console.log(part2());

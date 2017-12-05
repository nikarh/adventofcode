function part1() {
    document.body.innerText.split('\n').filter(x => x)
        .map(pwd => pwd.split(' '))
        .filter(words => words.length >= 2)
        .filter(words => words.length === new Set(words).size)
        .length;
}

function part2() {
    document.body.innerText.split('\n').filter(x => x)
        .map(pwd => pwd.split(' ').map(x => x.split('').sort().join('')))
        .filter(words => words.length >= 2)
        .filter(words => words.length === new Set(words).size)
        .length
}

console.log(part1());
console.log(part2());

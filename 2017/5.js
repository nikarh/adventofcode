function part1(map) {
    let p = 0;
    let steps = 0;
    while (p >= 0 && p < map.length) {
        const pp = p;
        p+=map[p];
        map[pp]++;
        steps++
    }

    return steps;
}

function part2(map) {
    let p = 0;
    let steps = 0;
    while (p >= 0 && p < map.length) {
        const pp = p;
        p+=map[p];
        map[pp] += map[pp] >= 3 ? -1 : +1;
        steps++
    }

    return steps;
}


const input = document.body.innerText.split('\n').filter(x => x!=='').map(x => +x);
console.log(part1([...input]));
console.log(part2([...input]));

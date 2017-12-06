const input = document.body.innerText.split('\t').map(n => +n);

function solution(input) {
    const seen = [];
    input = [...input];

    while (!seen.includes(String(input))) {
        seen.push(String(input));
        let ptr = input.indexOf(Math.max(...input));
        let v = input[ptr];
        input[ptr] = 0;
        for (; v > 0; v--) input[(++ptr) % input.length]++
    }
    console.log(seen.indexOf(String(input)), seen.length);
    return [seen.length+1, seen.length - seen.indexOf(String(input))];
}

console.log(solution(input));

const input = `0: 3
1: 2
2: 4
4: 8
6: 5
8: 6
10: 6
12: 4
14: 6
16: 6
18: 17
20: 8
22: 8
24: 8
26: 9
28: 8
30: 12
32: 12
34: 10
36: 12
38: 12
40: 8
42: 12
44: 12
46: 10
48: 12
50: 12
52: 14
54: 14
56: 12
58: 14
60: 14
62: 14
64: 14
66: 14
68: 12
70: 14
72: 14
74: 14
76: 14
80: 18
82: 14
90: 18
`;

const parse = inp => inp.trim().split('\n').map(n => n.split('\:').map(n => +n));
const triangleWave = (t, a) => Math.abs(a - (Math.abs(t-a)) % (a*2));

function part1(input, delay = 0) {
    return input.filter(([t, a]) => triangleWave(t+delay, a-1) === 0)
        .map(([t, a]) => t*a)
        .reduce((a, n) => a+n, 0)
}

function part2(input) {
    for (let i=0; ; i++) {
        if (!input.find(([t, a]) => triangleWave(t+i, a-1) === 0)) return i;
    }
}

console.log(part1(parse(input)));
console.log(part2(parse(input)));


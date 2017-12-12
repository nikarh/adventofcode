const input = '106,16,254,226,55,2,1,166,177,247,93,0,255,228,60,36';

function sparseHash(seq) {
    const data = Array(256).fill(0).map((n, i) => i);
    let ptr = 0;
    let skip = 0;

    for (let len of seq) {
        for (let i = 0; i < len / 2; i++) {
            const v = (ptr + i) % data.length;
            const w = (ptr + len - i - 1) % data.length;
            data[v] = [data[w], data[w] = data[v]][0];
        }

        ptr = (ptr + skip + len) % data.length;
        skip ++;
    }

    return data;
}

const hash = sparseHash(input.split(',').map(n => +n));
console.log(hash[0]*hash[1]);

const part2 = [...input.split('').map(n => n.charCodeAt(0)), 17, 31, 73, 47, 23];
const part2full = Array(64).fill(0).map(_ => part2).reduce((acc, n) => [...acc, ...n], []);
const sparse = sparseHash(part2full);
const dense = sparse.reduce((acc, n, i) => [
    ...(acc.slice(0, Math.floor(i / 16))),
    (i % 16 === 0) ? n : acc[acc.length - 1] ^ n
],[]);

console.log(dense.map(d => (d < 16 ?  '0' : '') + d.toString(16)).join(''));

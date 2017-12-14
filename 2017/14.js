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
        skip++;
    }

    return data;
}

function knotHash(input) {
    const bytesToHash = [...input.split('').map(n => n.charCodeAt(0)), 17, 31, 73, 47, 23];
    const bytes64Times = Array(64).fill(0).map(_ => bytesToHash).reduce((acc, n) => [...acc, ...n], []);
    const sparse = sparseHash(bytes64Times);
    const dense = sparse.reduce((acc, n, i) => [
        ...(acc.slice(0, Math.floor(i / 16))),
        (i % 16 === 0) ? n : acc[acc.length - 1] ^ n
    ], []);

    return dense.map(d => ('0000000' + d.toString(2)).slice(-8)).join('');
}

const input = 'ljoxqyyw';
const hashes = Array(128).fill(0)
    .map((n, i) => `${input}-${i}`)
    .map(knotHash);

function part1() {
    return hashes
        .map(hash => hash.split('')
            .filter(c => c === '1')
            .length)
        .reduce((a, s) => a + s, 0)
}

function part2() {
    const map = hashes.map(row => row.split('').map(c => +c));
    let islands = 0;
    for (let x=0; x<map.length; x++) {
        for (let y=0; y< map[0].length; y++) {
            if (map[x][y] !== 1) continue;
            islands++;
            (function traverse(i, j) {
                if (i < 0 || j < 0 || i >= map.length || j >= map[0].length) return;
                if (map[i][j] !== 1) return;
                map[i][j] = 2;
                traverse(i-1, j);
                traverse(i+1, j);
                traverse(i, j-1);
                traverse(i, j+1);
            })(x, y)
        }
    }

    return islands;
}

console.log(part1());
console.log(part2());
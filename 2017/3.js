function part1(ls) {
    const lnsq = Math.floor(Math.ceil(Math.sqrt(ls))/2)*2+1;
    const circle = (lnsq - 1) / 2;
    const mnum   = lnsq**2;
    return Math.abs(circle - (mnum-ls) % (circle*2))+circle;
}



function toSpatial(ls) {
    const side = Math.floor(Math.ceil(Math.sqrt(ls))/2)*2+1;
    const circle = Math.ceil((side - 1) / 2);
    const mnum   = side**2;
    const dist = mnum-ls;

    let coord = [circle, Math.abs(circle - dist % (circle*2))];
    if (dist < side || (dist > (side-1)*2 && dist < (side-1)*3))
        coord = [coord[1], coord[0]];
    if (dist < (side-1)*1.5 || dist > (side-1)*3.5)
        coord = [coord[0], -coord[1]];
    if (dist > (side-1)*0.5 && dist < (side-1)*2.5)
        coord = [-coord[0], coord[1]];

    return coord;
}

function toIndex([x, y]) {
    const circle = Math.max(Math.abs(x), Math.abs(y));
    const side = circle*2+1;
    const mnum = side ** 2;
    if (y === -circle) return mnum + (x-circle);
    if (x === -circle) return mnum - side+1 + (-y-circle);
    if (y === circle) return mnum - (side-1)*2 - (x+circle);
    if (x === circle) return mnum - (side-1)*3 + (y-circle);
}

const indices = Array(3).fill(0).map((_, i) => i - 1);
const directions = indices
    .map(i => indices.map(j => [i, j]))
    .reduce((a, n) => [...a, ...n], [])
    .filter(([x, y]) => !(x === y && x === 0));

function part2(num) {
    const arr = [1];
    while (arr[arr.length-1] < num) {
        const index = toSpatial(arr.length+1);
        arr.push(directions
            .map(([x, y]) => [index[0]+x, index[1]+y])
            .map(toIndex)
            .filter(i => i <= arr.length)
            .map(i => arr[i-1])
            .reduce((a, n) => a+n, 0));
    }

    return arr[arr.length-1];
}

console.log(part1(277678));
console.log(part2(277678));


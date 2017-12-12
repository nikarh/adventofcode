
function hexCoord(path, coord = [0, 0, 0]) {
    return path.reduce(([x, y, z], direction) => {
        switch (direction) {
        case 'n':
            return [x, y+1, z-1];
        case 's':
            return [x, y-1, z+1];
        case 'nw':
            return [x-1, y+1, z];
        case 'ne':
            return [x+1, y, z-1];
        case 'sw':
            return [x-1, y, z+1];
        case 'se':
            return [x+1, y-1, z];
        default:
            return [x, y, z];
        }
    }, coord);
}

function distance([x, y, z]) {
    return (Math.abs(x) + Math.abs(y) + Math.abs(z)) / 2;
}

const input = document.body.innerText.trim().split(',');

console.log(distance(hexCoord(input, [0, 0, 0])));

console.log(Math.max(...input
    .reduce(([vals, coord], n) => [
        [...vals, distance(hexCoord([n], coord))],
        hexCoord([n], coord)
    ], [[], [0, 0, 0]])[0]));
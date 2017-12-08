const cmp = {
    '==': (a, b) => a == b,
    '!=': (a, b) => a != b,
    '>=': (a, b) => a >= b,
    '<=': (a, b) => a <= b,
    '>': (a, b) => a > b,
    '<': (a, b) => a < b
};

function doexec(input) {
    const [state, history] = input.split('\n').filter(n => n).map(n => n.split(' '))
        .reduce(([a, h], [reg, op, amt,, cmpreg, cmpop, cmpval]) => [
            {
                ...a, 
                [reg]: (a[reg] || 0) + 
                    (cmp[cmpop](+(a[cmpreg] || 0), +cmpval)
                        ? (op == 'inc' ? 1 : -1) * +amt
                        : 0)
            },
            [...h, a]
        ], [{}, []]);

    return [
        Math.max(...Object.values(state)),
        Math.max(...[...history, state].map(s => Math.max(...Object.values(s))))
    ];
}

doexec(document.body.innerText);

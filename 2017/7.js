const graph = document.body.innerText
    .split('\n')
    .filter(n => n)
    .map(n => n.split(' -> '))
    .map(([name, children]) => [
        name.slice(0, name.indexOf(' ')),
        +name.slice(name.indexOf('(') + 1, name.indexOf(')')),
        (children || '').split(', ').filter(n => n)
    ]);

function part1(graph) {
    const points = new Set(graph.map(([name]) => name));
        graph
        .map(([,, c]) => c)
        .reduce((a, n) => [...a, ...n], [])
        .forEach(n => points.delete(n));

    return points.values().next().value;
}

function part2(graph) {
    const links = graph.reduce((a, [name, weight, children]) => 
        ({...a, [name]: {name, weight, ownWeight: weight, children}}), {});
    Object.values(links)
        .forEach(c => {
            c.c = c.children.map(ch => links[ch]);
            c.p = Object.values(links).find(l => l.children.includes(c.name));
        });
    Object.values(links)
        .forEach(e => {
            for (let p = e.p; p != null; p = p.p) p.weight += e.ownWeight;
        });

    return Math.min(...graph
        .filter(([,,children]) => children.length > 1)
        .map(([name,,children]) => children.map(child => links[child]))
        .map(children => [children, [...new Set(children.map(c => c.weight))]])
        .filter(([, weights]) => weights.length === 2)
        .map(([children, weights]) => {
            const w = children.map(c => c.weight);
            const bad = w.filter(w => w === weights[0]).length === 1 ? 0 : 1;
            const badChild = children.find(c => c.weight === weights[bad]);

            return weights[bad?0:1]-weights[bad]+badChild.ownWeight;
    }));
}

console.log(part1(graph));
console.log(part2(graph));

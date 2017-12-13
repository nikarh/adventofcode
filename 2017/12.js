const parse = input => input.trim().split('\n')
    .map(line => line.split(' <-> '))
    .map(([from, to]) => [from, to.split(', ')]);

function solution(input) {
    const groups = input.reduce((acc, [from, to]) => {
        const nums = [from, ...to];
        const found = acc.filter(set => nums.find(n => set.includes(n)));
        const others = acc.filter(set => !found.includes(set));

        return [
            ...others,
            (found.length > 0 ?
                [...new Set([...found.reduce((a, n) => [...a, ...n], []), ...nums])] :
                [...new Set(nums)])
        ];
    }, []);

    return [groups.find(group => group.includes('0')).length, groups.length];
}

console.log(solution(parse(document.body.innerText)));
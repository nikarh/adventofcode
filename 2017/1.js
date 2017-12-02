const toArr = i => i.trim().split('').map(n => parseInt(n));

console.log(toArr(document.body.innerText)
    .reduce((s, n, i, a) => a[(i+1)%a.length]==n?s+n:s, 0));

console.log(toArr(document.body.innerText)
    .reduce((s, n, i, a) => a[(i+a.length/2)%a.length]==n?s+n:s, 0));

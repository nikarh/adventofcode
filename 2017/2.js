document.body.innerText
    .split('\n')
    .map(row => row.split('\t'))
    .map(row => Math.max(...row)-Math.min(...row))
    .reduce((a,n)=>a+n,0);

document.body.innerText.split('\n')
  .map(row => row.split('\t'))
  .map(row => row
    .map((l, i) => row
      .filter((_, j) => i !== j)
      .map(r => Math.max(r,l)/Math.min(r,l))
      .filter(n => n === ~~n)
    )
    .reduce((a,v) => [...a, ...v], [])
    .find(() => true)
  )
  .filter(n => n != null)
  .reduce((a,n) => a+n, 0)

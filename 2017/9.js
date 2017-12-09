function solution(input) {
	let skip = false;
	let junk = false;
	let h = 0;
	let sum = 0;
	let garbageCount = 0;
	for (let char of input) {
		if (skip) {
			skip = false;
			continue;
		}
		if (char === '!') {
			skip = true;
			continue;
		}
		if (char === '>') {
			junk = false;
			continue;
		}
		if (junk) {
			garbageCount++;
			continue;
		} else if (char === '<') {
			junk = true;
			continue;
		}

		if (char === '{') {
		 	h++;
		 	sum+=h;
		}

		if (char === '}') {
		 	h--;
		}
	}
	
	return [sum, garbageCount];
}

console.log(solution(document.body.innerText));

function isBadVersionGenerator(bad: number) {
	return (n: number): boolean => n >= bad;
}

export function solution(n: number, bad: number) {
	const nums = [...Array(n).keys()].map(n => n+1);
	const isBadVersion = isBadVersionGenerator(bad);

	const f = (arr: number[]) => {
		if(arr.length === 1) return arr[0];

		const midIndex = Math.floor((arr.length - 1) / 2);
		const midValue = arr[midIndex];

		const left = arr.slice(0, midIndex+1);
		const right = arr.slice(midIndex+1);
		const next = isBadVersion(midValue) ? left : right;

		return f(next);
	}

	return f(nums);
};

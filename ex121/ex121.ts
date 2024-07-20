export function maxProfit(prices: number[]): number {
	let max = -Infinity;

	for(let i=0; i<prices.length; i++) {
		for(let j=i; j<prices.length; j++) {
			const profit = prices[j] - prices[i];
			if (profit > max) {
				max = profit;
			}
		};
	};

	return max;
};
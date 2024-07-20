import { maxProfit } from "./ex121";

type TestCase = { prices: number[], result: number }
const TEST_CASES: TestCase[] = [
	{ prices: [7, 1, 5, 3, 6, 4], result: 5 },
	{ prices: [7, 6, 4, 3, 1], result: 0 },
];


it.each(TEST_CASES)('prices = $prices, result = $result', ({ prices, result }) => {
	expect(maxProfit(prices)).toBe(result);
});
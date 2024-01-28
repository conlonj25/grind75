import { ListNode, arrayToListNode, listNodeToArray, mergeTwoLists } from "./ex21";

describe('arrayToListNode', () => {

	it('should correctly convert an array to a list', () => {
		const inputArray = [1, 2, 3, 4];
		const result: number[] = [];

		let li = arrayToListNode(inputArray);

		while (li.next) {
			result.push(li.val);
			li = li.next;
		}

		expect(result).toStrictEqual(inputArray);
	});

	it('should correctly convert a list into an array', () => {
		const inputArray = [1, 2, 3, 4];
		const arr = arrayToListNode(inputArray);

		expect(listNodeToArray(arr)).toStrictEqual(inputArray);
	});

	fit('should correctly merge two lists', () => {
		const l1 = arrayToListNode([1, 2, 3, 5]);
		const l2 = arrayToListNode([2, 3, 4]);
		const expectedResult = arrayToListNode([1, 2, 2, 3, 3, 4, 5]);

		expect(mergeTwoLists(l1, l2)).toStrictEqual(expectedResult);
	});
});

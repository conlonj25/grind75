
export class ListNode {
	val: number
	next: ListNode | null
	constructor(val?: number, next?: ListNode | null) {
		this.val = (val === undefined ? 0 : val)
		this.next = (next === undefined ? null : next)
	}
}

export const arrayToListNode = (input: number[]): ListNode => {
	if (input.length === 0) return new ListNode();

	const head = new ListNode(input[0]);
	let tail = head;

	for (let i = 1; i < input.length; i++) {
		tail.next = new ListNode(input[i], null);
		tail = tail.next;
	}

	return head;
};

export const listNodeToArray = (input: ListNode): number[] => {
	const result: number[] = [];
	let tail: ListNode | null = input;

	while (tail.next) {
		result.push(tail.val);
		tail && (tail = tail.next);
	}

	return result;
}

export const mergeTwoLists = (l1: ListNode | null, l2: ListNode | null): ListNode => {
	if (l1 === null) return l2 ?? new ListNode();
	if (l2 === null) return l1 ?? new ListNode();

	let tail = new ListNode();
	let head = tail;

	while (l1 && l2) {
		if (l1.val <= l2.val) {
			tail.val = l1.val;
			tail.next = new ListNode();
			l1 = l1.next;
			tail = tail.next;
		}

		if (l2.val <= l1.val) {
			tail.val = l2.val;
			tail.next = new ListNode();
			l2 = l2.next;
			tail = tail.next;
		}
	}

	if (l1) {
		tail.val = l1.val;
		tail.next = l1.next;
	}

	if (l2) {
		tail.val = l2.val;
		tail.next = l2.next;
	}

	console.log(JSON.stringify(head));

	return head;
};

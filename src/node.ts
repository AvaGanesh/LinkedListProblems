export class Node<T> {
    next: Node<T> | null;
    val: T;
    constructor(val: T) {
        this.val = val;
        this.next = null;
    }
}

export function printRecursively<T>(head: Node<T>): void  {
    if (head === null) return;
    console.log(head.val);
    printRecursively(head.next);
};

export function printIteratively<T>(head: Node<T>): void {
    let current = head;

    while (current !== null) {
        console.log(current.val);
        current = current.next;
    }
};
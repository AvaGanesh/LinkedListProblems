// Problem: {@link: https://structy.net/problems/sum-list}

import { Node } from '../node';

export function iSumLinkedList(head: Node<number>) : number {
    let sum = 0;
    let current = head;
    while (current !== null) {
        sum  += current.val;
        current = current.next;
    }
    return sum;
}

export function rSumLinkedList(head: Node<number>) : number {
    if (head === null) return 0;
    return head.val + rSumLinkedList(head.next);
}


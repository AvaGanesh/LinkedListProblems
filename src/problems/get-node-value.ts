// Problem {@link: https://structy.net/problems/get-node-value}

import { Node } from '../node';

export function iGetNodeValue<T>(head: Node<T>, index: number): T {
    let current = head;
    let count = 0;
    while (current !== null) {
        if (count === index) return current.val;
        current = current.next;
        count++;
    }
    return null;
}


export function rGetNodeValue<T>(head: Node<T>, index: number): T {
    if (head === null) return null;
    if (index === 0) return head.val;
    return rGetNodeValue(head.next, index - 1);
}
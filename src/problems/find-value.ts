// Problem: {@link: https://structy.net/problems/linked-list-find}

import { Node } from '../node';

export function iFindValue<T>(head: Node<T>, target: T) : boolean {
    let current = head;
    while (current !== null) {
        if (current.val === target) return true;
        current = current.next;
    }
    return false;
}


export function rFindValue<T>(head: Node<T>, target: T): boolean {
    if (head === null) return false;
    if (head.val === target) return true;
    return rFindValue(head.next, target);
} 
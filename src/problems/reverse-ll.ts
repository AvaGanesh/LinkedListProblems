// Problem: {@link: https://structy.net/problems/reverse-list}

import { Node } from '../node';

export function iReverseLL<T>(head: Node<T>): Node<T> {
    let current = head;
    let prev = null;
    while (current !== null) {
        prev = current;
        current = current.next;
    }
    return prev;
}


export function rReverseLL<T>(head: Node<T>, prev: Node<T> = null): Node<T> {
    if (head === null) return prev;
    prev = head;
    return rReverseLL(head.next, prev);
}
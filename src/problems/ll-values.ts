// Problem : {@link: https://structy.net/problems/linked-list-values}

import { Node } from '../node';

export function iLinkedListValues<T>(head: Node<T>) : Array<T> {
    let values = [];
    let current = head;
    while (current !== null) {
        values.push(current.val);
        current = current.next;
    }
    return values;
}


export function rLinkedListValues<T>(head: Node<T>): Array<T> {
    let values = [];
    fillValues(head, values);
    return values;
}



export function fillValues<T>(head: Node<T>, values: Array<T>) {
    if (head === null) return;
    values.push(head.val);
    fillValues(head.next, values);
}


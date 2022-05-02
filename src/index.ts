import { iLinkedListValues, rLinkedListValues } from './problems/ll-values';
import { Node, printIteratively, printRecursively } from './node';
import { iSumLinkedList, rSumLinkedList } from './problems/sum-list';
import { iFindValue, rFindValue } from './problems/find-value';
import { iGetNodeValue, rGetNodeValue } from './problems/get-node-value';
import { iReverseLL, rReverseLL } from './problems/reverse-ll';


const a = new Node('A');
const b = new Node('B');
const c = new Node('C');
const d = new Node('D');

// A -> B -> C -> D

a.next = b;
b.next = c;
c.next = d;
 

// 2 -> 3 -> 5 -> 9
const n2 = new Node(2);
const n3 = new Node(3);
const n5 = new Node(5);
const n9 = new Node(9);


n2.next = n3;
n3.next = n5;
n5.next = n9;



printRecursively(a);
printIteratively(n2);

console.log('------- RECURSIVE-------');
console.log(rLinkedListValues(a));

console.log('------- ITERATIVE-------');
console.log(iLinkedListValues(a));







console.log('------- RECURSIVE-------');
console.log(rSumLinkedList(n2));

console.log('------- ITERATIVE-------');
console.log(iSumLinkedList(n2));


console.log('----RECURSIVE--------');
console.log(rFindValue(a, 'C'));
console.log(rFindValue(n2, 44));

console.log('------- ITERATIVE-------');
console.log(iFindValue(a, 'C'));
console.log(iFindValue(n2, 44));


console.log('----RECURSIVE--------');
console.log(rGetNodeValue(a, 0));
console.log(rGetNodeValue(n2, 4455));

console.log('------- ITERATIVE-------');
console.log(iGetNodeValue(a, 1));
console.log(iGetNodeValue(n2, 4455));


console.log('----RECURSIVE--------');
console.log(rReverseLL(a));
console.log(rReverseLL(n2));

console.log('------- ITERATIVE-------');
console.log(iReverseLL(a));
console.log(iReverseLL(n2));
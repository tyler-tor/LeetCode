/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue = function(head) {
    let curr = head
    let binary = '';
    
    while(curr) {
        let val = curr.val;
        binary += val.toString();
        curr = curr.next;
    };
    
    return parseInt(binary, 2);
};
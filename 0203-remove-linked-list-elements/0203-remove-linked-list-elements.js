/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    let current = head;
    let prev;
    
    while(head) {
        if(head.val === val) {
            if(!prev) {
                current = head.next;
            }else {
                prev.next = head.next;
            }
        }else {
            prev = head;
        }
        head = head.next;
    };
    return current
};
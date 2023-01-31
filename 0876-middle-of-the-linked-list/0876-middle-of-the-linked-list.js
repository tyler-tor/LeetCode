/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    let current = head;
    let count = 0;
    
    while(current !== null) {
        count += 1;
        current = current.next
    };
    
    let middle = Math.floor(count/2) + 1;
    // if(middle !== Math.floor(middle)){
    //     middle = Math.floor(middle) + 1;
    // };
    let secondCount = 0;
    let secondCurr = head;
    
    while(secondCurr !== null) {
        if((secondCount + 1) === middle) {
            return secondCurr
        };
        secondCount += 1;
        secondCurr = secondCurr.next
    }
};
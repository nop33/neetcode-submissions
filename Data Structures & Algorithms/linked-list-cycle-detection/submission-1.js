/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {boolean}
     */
    hasCycle(head) {
        let tail = head
        while(tail && tail.next) {
            if(tail.next.visitted) return true
            tail.visitted = true
            tail = tail.next
        }
        return false
    }
}

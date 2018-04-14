/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
function ListNode(val) {
    this.val = val;
    this.next = null;
}
const toArray = function (list, array) {
    if (list) {
        array.push(list.val);
        toArray(list.next, array);
    }
}
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
    const mergeTwoLists = function (l1, l2) {
        let ptr1 = l1,
            ptr2 = l2,
            list = null,
            ptr = null;
        if (l1 && l2) {
            if (ptr1.val <= ptr2.val) {
                list = new ListNode(ptr1.val);
                ptr = list;
                ptr1 = ptr1.next;
            } else {
                list = new ListNode(ptr2.val);
                ptr = list;
                ptr2 = ptr2.next;
            }
            while (ptr1 && ptr2) {
                if (ptr1.val < ptr2.val) {
                    ptr.next = new ListNode(ptr1.val);
                    ptr1 = ptr1.next;
                } else if (ptr1.val > ptr2.val) {
                    ptr.next = new ListNode(ptr2.val);
                    ptr2 = ptr2.next;
                } else {
                    ptr.next = new ListNode(ptr1.val);
                    ptr = ptr.next;
                    ptr.next = new ListNode(ptr2.val);
                    ptr1 = ptr1.next;
                    ptr2 = ptr2.next;
                }
                ptr = ptr.next;
            }
            let leftPtr = ptr1 || ptr2 || null;
            while(leftPtr) {
                ptr.next = new ListNode(leftPtr.val);
                ptr = ptr.next;
                leftPtr = leftPtr.next;
            }
        } else {
            let leftPtr = l1 || l2 || null;
            if(leftPtr) {
                ptr = list = new ListNode(leftPtr.val);
                leftPtr = leftPtr.next;
            }
            while(leftPtr) {
                ptr.next = new ListNode(leftPtr.val);
                ptr = ptr.next;
                leftPtr = leftPtr.next;
            }
        }
        return list;
    }
    let result = lists[0] || null;
    for (let i = 1; i < lists.length; i++) {
        result = mergeTwoLists(result, lists[i]);
    }
    return result;
};

const res = [];
const lists = 
// [{
//     val: 1,
//     next: {
//         val: 2,
//         next: {
//             val: 2,
//             next: null
//         }
//     }
// }, {
//     val: 1,
//     next: {
//         val: 1,
//         next: {
//             val: 2,
//             next: null
//         }
//     }
// }];
[{
    val: 1,
    next: {
        val: 2,
        next: {
            val: 3,
            next: null
        }
    }
}, {
    val: 4,
    next: {
        val: 5,
        next: {
            val: 6,
            next: {
                val: 7,
                next: null
            }
        }
    }
}];

toArray(mergeKLists(lists), res)
console.log(res);
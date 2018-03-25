// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Example

// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 0 -> 8
// Explanation: 342 + 465 = 807.
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
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = function (l1, l2) {
    // const toArray = function (list, array) {
    //     if (list) {
    //         array.push(list.val);
    //         toArray(list.next, array);
    //     }
    // }
    // const toList = function (arr) {
    //     if (arr.length) {
    //         let list = new ListNode(arr[0]);
    //         for (let i = 1; i < arr.length; i++) {
    //             list.next = new ListNode(arr[i]);
    //         }
    //         return list;
    //     }
    //     return null;
    // }
    // const addTwoArray = function (arr1, arr2) {
    //     let ansArr = [0];
    //     for (let i = 0, j = 0; i < arr1.length && j < arr2.length; i++, j++) {
    //         let sum = arr1[i] + arr2[j],
    //             units = sum % 10,
    //             tens = parseInt(sum / 10, 10);
    //         ansArr[i] += units;
    //         ansArr.push(tens);
    //     }
    //     while (i++ < arr1.length) {
    //         ansArr[i] += arr1[i];
    //         ansArr.push(0);
    //     }
    //     while (j++ < arr2.length) {
    //         ansArr[j] += arr2[j];
    //         ansArr.push(0);
    //     }
    //     if (ansArr.length && ansArr[ansArr.length - 1] === 0) {
    //         ansArr.splice(ansArr.length - 1, 1);
    //     }
    //     return ansArr;
    // }
    // return toList(addTwoArray(toArray(l1), toArray(l2)));
    let ptr1 = l1,
        ptr2 = l2,
        ansList = new ListNode(0),
        ansPtr = ansList,
        sum = ptr1.val + ptr2.val,
        units = sum % 10,
        tens = Math.floor(sum / 10);
    ansList.val = units;
    if (tens) {
        ansPtr.next = new ListNode(tens);
    }
    ptr1 = ptr1.next;
    ptr2 = ptr2.next;
    while (ptr1 && ptr2) {
        sum = ptr1.val + ptr2.val;
        if (ansPtr.next) {
            sum += ansPtr.next.val;
        }
        units = sum % 10;
        tens = Math.floor(sum / 10);
        ansPtr.next = new ListNode(units);
        ansPtr = ansPtr.next;
        if (tens) {
            ansPtr.next = new ListNode(tens);
        }
        ptr1 = ptr1.next;
        ptr2 = ptr2.next;
    }
    let ptr = ptr1 || ptr2 || null;
    while (ptr) {
        sum = 0 + ptr.val;
        if (ansPtr.next) {
            sum += ansPtr.next.val;
        }
        units = sum % 10;
        tens = Math.floor(sum / 10);
        ansPtr.next = new ListNode(units);
        ansPtr = ansPtr.next;
        if (tens) {
            ansPtr.next = new ListNode(tens);
        }
        ptr = ptr.next;
    }
    return ansList;
};
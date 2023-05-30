var mergeTwoLists = function (list1, list2) {
  let headNode = new ListNode(0);
  let currentNode = headNode;
  while (list1 !== null && list2 !== null) {
    if (list1.val < list2.val) {
      currentNode.next = list1;
      list1 = list1.next;
    } else {
      currentNode.next = list2;
      list2 = list2.next;
    }
    currentNode = currentNode.next;
  }

  if (list1 === null) {
    currentNode.next = list2;
  } else if (list2 === null) {
    currentNode.next = list1;
  }
  console.log(headNode.next);
  return headNode.next;
};

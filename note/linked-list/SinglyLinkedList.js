// 节点类
class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = new Node("head");
  }
  // 往链表添加元素
  append(newElement) {
    const newNode = new Node(newElement);
    let currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    currentNode.next = newNode;
  }
  // 打印链表元素
  display() {
    let currentNode = this.head.next;
    while (currentNode !== null) {
      console.log(currentNode.element);
      currentNode = currentNode.next;
    }
  }
  // 根据value查找节点
  findByValue(item) {
    let currentNode = this.head.next;
    while (currentNode !== null && currentNode.element !== item) {
      currentNode = currentNode.next;
    }
    return currentNode === null ? -1 : currentNode;
  }
  // 根据index查找节点，下标从0开始
  findByIndex(index) {
    let currentNode = this.head.next;
    let pos = 0;
    while (currentNode !== null && pos !== index) {
      currentNode = currentNode.next;
      pos++;
    }
    return currentNode === null ? -1 : currentNode;
  }
}

// 测试
const l = new LinkedList();
l.append(1);
l.append(2);
l.append(3);
l.display();
// console.log(l.findByValue(5));
console.log(l.findByIndex(2));

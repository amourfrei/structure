/**
 * LinkedList.js
 * 链表是一种链式的数据结构，链上的每个节点包含两种信息：节点本身的信息指向下一个节点的指针。链表和传统的数组
 * 都是线性数据结构，存储的都是一个序列的数据，区别如下：
 *
 *
 * 一个单向链表通常具有以下方法：
 * 1. size：返回链表中节点的个数
 * 2. head：返回链表中的头部元素
 * 3. add：向链表尾部增加一个节点
 * 4. remove： 删除某个节点
 * 5. indexOf：返回某个节点的index
 * 6. elementAt：返回某个index处的节点
 * 7. addAt：在某个index处插入一个节点
 * 8. removeAt：删除某个index处的节点
 */

//单向链表的实现

/**
 * 链表中的节点
 */

function Node(element) {
  this.element = element
  this.next = null
}

function LinkedList() {
  var length = 0
  var head = null

  this.size = function() {
    return length
  }

  this.head = function() {
    return head
  }

  this.add = function(element) {
    var node = new Node(element)
    if (head == null) {
      head = node
    } else {
      var currentNode = head
      while (currentNode.next) {
        currentNode = currentNode.next
      }

      currentNode.next = node
    }
    length++
  }

  this.remove = function(element) {
    var currentNode = head
    var previousNode
    if (currentNode.element === element) {
      head = currentNode.next
    } else {
      while (currentNode.element !== element) {
        previousNode = currentNode
        currentNode = currentNode.next
      }
      previousNode.next = currentNode.next
    }
    length--
  }

  this.isEmpty = function() {
    return length === 0
  }

  this.indexOf = function(element) {
    var currentNode = head
    var index = -1
    while (currentNode) {
      index++
      if (currentNode.element === element) {
        return index
      }
      currentNode = currentNode.next
    }
    return -1
  }

  this.elementAt = function(index) {
    var currentNode = head
    var count = 0
    while (count < index) {
      count++
      currentNode = currentNode.next
    }
    return currentNode.element
  }

  this.addAt = function(index, element) {
    var node = new Node(element)
    var currentNode = head
    var previousNode
    var currentIndex = 0
    if (index > length) {
      return false
    }

    if (index === 0) {
      node.next = currentNode
      head = node
    } else {
      while (currentIndex < index) {
        currentIndex++
        previousNode = currentNode
        currentNode = currentNode.next
      }
      node.next = currentNode
      previousNode.next = node
    }
    length++
  }

  this.removeAt = function(index) {
    var currentNode = head
    var previousNode
    var currentIndex = 0
    if (index < 0 || index >= length) {
      return null
    }
    if (index === 0) {
      head = currentIndex.next
    } else {
      while (currentIndex < index) {
        currentIndex++
        previousNode = currentNode
        currentNode = currentNode.next
      }
      previousNode.next = currentNode.next
    }
    length--
    return currentNode.element
  }
}

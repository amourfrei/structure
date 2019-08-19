/**
 * Queue.js
 * Queue 和 Stack有一些类似，不同的是Stack是先进后出，而Queue是先进先出
 * Queue一般具有以下常见方法：
 * 1. enqueue：入列，向列尾部增加一个元素
 * 2. dequeue：出列，移除列头部的一个元素并返回被移除的元素
 * 3. front：获取队列的第一个元素
 * 4. isEmpty： 判断队列是否为空
 * 5. size：获取队列中元素的个数
 **/

function Queue() {
  var collection = []
  this.print = function() {
    console.log(collection)
  }

  this.enqueue = function(element) {
    collection.push(element)
  }

  this.dequeue = function() {
    return collection.shift()
  }

  this.front = function() {
    return collection[0]
  }

  this.isEmpty = function() {
    return collection.length === 0
  }

  this.size = function() {
    return collection.length
  }
}

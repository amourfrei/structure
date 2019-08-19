/**
 * Stack.js
 * Stack先进后出「last in first out」
 * Stack具备以下方法：
 * 1. push: 将一个元素推入栈顶
 * 2. pop: 删除栈顶元素，并返回被删除的元素
 * 3. peek: 返回栈顶元素
 * 4. length: 返回栈中元素的个数
 *  **/

function Stack() {
  this.count = 0
  this.storage = {}
  this.push = function(value) {
    this.storage[this.count] = value
    this.count++
  }
  this.pop = function() {
    if (this.count === 0) {
      return undefined
    }
    this.count--
    var result = this.storage[this.count]
    delete this.storage[this.count]
    return result
  }
  this.peek = function() {
    return this.storage[this.count - 1]
  }
  this.size = function() {
    return this.count
  }
}

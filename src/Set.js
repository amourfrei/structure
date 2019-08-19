/**
 * Set.js
 * Set 和 Array有一定程度相似，但Set中不允许有重复的元素且是无序的。
 * 一个Set应具备以下方法：
 * 1. values: 返回集合中的所有元素
 * 2. size： 返回集合中元素的个数
 * 3. has： 判断集合中是否存在某个元素
 * 4. add： 向集合中添加元素
 * 5. remove： 从集合中移除某个元素
 * 6. union： 返回两个集合的并集
 * 7. intersection： 返回两个集合的交集
 * 8. difference： 返回两个集合的差集
 * 9. subset： 判断一个集合是否为另一个集合的子集
 *
 */

//命名区别es6 Set
function _Set() {
  var collection = []
  this.has = function(element) {
    return collection.indexOf(element) !== -1
  }

  this.values = function() {
    return collection
  }

  this.size = function() {
    return collection.length
  }

  this.add = function(element) {
    if (!this.has(element)) {
      collection.push(element)
      return true
    }
    return false
  }

  this.remove = function() {
    if (this.has(element)) {
      index = collection.indexOf(element)
      collection.splice(index, 1)
      return true
    }
    return false
  }

  this.union = function(otherSet) {
    var unionSet = new _Set()
    var firstSet = this.values()
    var secondSet = otherSet.values()
    firstSet.forEach(function(e) {
      unionSet.add(e)
    })
    return unionSet
  }

  this.intersection = function(otherSet) {
    var intersectionSet = new _Set()
    var firstSet = this.values()
    firstSet.forEach(function(e) {
      if (otherSet.has(e)) {
        intersectionSet.add(e)
      }
    })
    return intersectionSet
  }

  this.difference = function(otherSet) {
    var differenceSet = new _Set()
    var firstSet = this.values()
    firstSet.forEach(function(e) {
      if (!otherSet.has(e)) {
        differenceSet.add(e)
      }
    })
    return differenceSet
  }

  this.subset = function(otherSet) {
    var firstSet = this.values()
    return firstSet.every(function(value) {
      return otherSet.has(value)
    })
  }
}

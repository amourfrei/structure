/**
 * HashTable.js
 * HashTable是一种用于存储键值对的数据结构（key value pair）, hash table根据key查询value的速度很快，所以它常用于实现Map，Dictionary，Object等数据结构。
 * 一个Hash Table通常具有以下方法：
 * 1. add： 增加一组键值对
 * 2. remove： 删除一组键值对
 * 3. lookup： 查找一个键对应的值
 */

function hash(string, max) {
  var hash = 0
  for (var i = 0; i < string.length; i++) {
    hash += string.charCodeAt(i)
  }
  return hash % max
}

function HashTable() {
  var storage = []
  var storageLimit = 4
  this.add = function(key, value) {
    var index = hash(key, storageLimit)
    if (storage[index] === undefined) {
      storage[index] = [[key, value]]
    } else {
      var inserted = false
      for (var i = 0; i < storage[index].length; i++) {
        if (storage[index][i][0] === key) {
          storage[index][i][1] = value
          inserted = true
        }
      }

      if (inserted === false) {
        storage[index].push([key, value])
      }
    }
  }

  this.remove = function(key) {
    var index = hash(key, storageLimit)
    if (storage[index].length === 1 && storage[index][0][0] === key) {
      delete storage[index]
    } else {
      for (var i = 0; i < storage[index]; i++) {
        if (storage[index][i][0] === key) {
          delete storage[index][i]
        }
      }
    }
  }

  this.lookup = function(key) {
    var index = hash(key, storageLimit)
    if (storage[index] === undefined) {
      return undefined
    } else {
      for (var i = 0; i < storage[index].length; i++) {
        if (storage[index][i][0] === key) {
          return storage[index][i][1]
        }
      }
    }
  }
}

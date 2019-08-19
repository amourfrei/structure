/**
 * Trie.js
 * Trie是一种搜索树。Trie分步骤存储数据，树中的每个节点代表一个步骤，Trie常用于存储单词以便快速查找，
 * 比如实现单词的自动完成功能。Trie中的每个节点都包含一个单词的字母，跟着树的分支可以拼写出一个完整的单词，
 * 每个节点还包含一个布尔值表示该节点是否是单词的最后一个字母。
 * Trie一般有以下方法：
 * 1. add: 向字典树中增加一个单词
 * 2. isWord: 判断字典树中是否包含某个单词
 * 3. print: 返回字典树中的所有单词
 */

function Node() {
  this.keys = new Map()
  this.end = false
  this.setEnd = function() {
    this.end = true
  }
  this.isEnd = function() {
    return this.end
  }
}

function Trie() {
  this.root = new Node()
  this.add = function(input, node = this.root) {
    if (input.length === 0) {
      node.setEnd()
      return
    } else if (!node.keys.has(input[0])) {
      node.keys.set(input[0], new Node())
      return this.add(input.substr(1), node.keys.get(input[0]))
    } else {
      return this.add(input.substr(1), node.keys.get(input[0]))
    }
  }

  this.isWord = function(word) {
    let node = this.root
    while (word.length > 1) {
      if (!node.keys.has(word[0])) {
        return false
      } else {
        node = node.keys.get(word[0])
        word = word.substr(1)
      }
    }
    return node.keys.has(word) && node.keys.get(word).isEnd() ? true : false
  }

  this.print = function() {
    let words = new Array()
    let search = function(node = this.root, string) {
      if (node.keys.size != 0) {
        for (let letter of node.keys.keys()) {
          search(node.keys.get(letter), string.concat(letter))
        }
        if (node.isEnd()) {
          words.push(string)
        }
      } else {
        string.length > 0 ? words.push(string) : undefined
        return
      }
    }
    search(this.root, new String())
    return words.length > 0 ? words : null
  }
}

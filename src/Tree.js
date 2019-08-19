/**
 * Tree.js
 * Tree的数据结构和自然界中的树类似，有根，树枝，叶子，Tree是一种多层数据结构，与Array，Stack，Queue相比是一种非线性的数据结构，在进行插入和搜索操作时很高效。
 * 在描述一个Tree时经常会使用到以下概念：
 * 1. Root（根）： 代表树的根节点，根节点没有父节点
 * 2. Parent Node（父节点）： 一个节点的直接上级节点，只有一个
 * 3. Child Node（子节点）： 一个节点的直接下级节点，可能有多个
 * 4. Siblings （兄弟节点）： 具有相同父节点的节点
 * 5. Leaf（叶子节点）：没有子节点的节点
 * 6. Edge（边）： 两个节点之间的连接线
 * 7. Path（路径）： 从源节点到目标节点的连续边
 * 8. Height of Node（节点的高度）： 表示节点与叶子节点之间的最长路径上边的个数
 * 9. Height of Tree（树的高度）： 即根节点的高度
 * 10. Depth of Node（节点的深度）： 表示从根节点到该节点的边的个数
 * 11. Degree of Node（节点的度）： 表示子节点的个数
 *
 * 一个二叉树应该具备以下常用方法：
 * 1. add： 向树中插入一个节点
 * 2. findMin： 查找树中最小的节点
 * 3. findMax: 查找树中的最大节点
 * 4. find： 查找树中的某个节点
 * 5. isPresent: 判断某个节点在树中是否存在
 * 6. remove： 移除树中的某个节点
 */

class Node {
  constructor(data, left = null, right = null) {
    this.data = data
    this.left = left
    this.right = right
  }
}

class FT {
  constructor() {
    this.root = null
  }

  add(data) {
    const node = this.root
    if (node === null) {
      this.root = new Node(data)
      return
    } else {
      const searchTree = function(node) {
        if (data < node.data) {
          if (node.left === null) {
            node.left = new Node(data)
            return
          } else if (node.left !== null) {
            return searchTree(node.left)
          }
        } else if (data > node.data) {
          if (node.right === null) {
            node.right = new Node(data)
            return
          } else if (node.right !== null) {
            return searchTree(node.right)
          }
        } else {
          return null
        }
      }
      return searchTree
    }
  }

  findMin() {
    let current = this.root
    while (current.left !== null) {
      current = current.left
    }
    return current.data
  }

  findMax() {
    let current = this.root
    while (current.right !== null) {
      current = current.right
    }
    return current.data
  }

  find(data) {
    let current = this.root
    while (current.data !== data) {
      if (data < current.data) {
        current = current.left
      } else {
        current = current.right
      }
      if (current === null) {
        return null
      }
    }
    return current
  }

  isPresent(data) {
    let current = this.root
    while (current) {
      if (data === current.data) {
        return true
      }
      if (data < current.data) {
        current = current.left
      } else {
        current = current.right
      }
    }
    return false
  }

  remove(data) {
    const removeNode = function(node, data) {
      if (node === null) {
        return null
      }
    }
    if (data == node.data) {
      if (node.left == null && node.right == null) {
        return null
      }

      if (node.left == null) {
        return node.right
      }

      if (node.right == null) {
        return node.left
      }

      var tempNode = node.right
      while (tempNode.left !== null) {
        tempNode = tempNode.left
      }

      node.data = tempNode.data
      node.right = removeNode(node.right, tempNode.data)
      return node
    } else if (data < node.data) {
      node.left = removeNode(node.left, data)
      return node
    } else {
      node.right = removeNode(node.right, data)
      return node
    }
    this.root = removeNode(this.root, data)
  }
}

const ft = new FT()

ft.add(4)
ft.add(2)
ft.add(6)
ft.add(1)
ft.add(3)
ft.add(5)
ft.add(7)
ft.remove(4)
console.log(ft.findMin())
console.log(ft.findMax())
ft.remove(7)
console.log(ft.findMax())
console.log(ft.isPresent(4))

/**
 * Graph.js
 * Graph是节点（或顶点）以及他们之间的连接（或边）的集合。Graph也可以称为Network（网络）。根据节点之间的连接是否有方向又可以分为Directed Graph
 * （有向图）和 Undirected Graph（无向图）。 Graph在实际生活中有很多用途，比如：导航软件计算最佳路径，社交软件进行好友推荐等等。
 * Graph通常有两种表达方式：
 * Adjacency List（邻接列表）：
 * 邻接列表可以表示为左侧是节点的列表，右侧列出它所有连接的所有其他节点。
 *
 * Adjacency Matrix（邻接矩阵）：
 * 邻接矩阵用矩阵来表示节点之间的连接关系，每行或者每列表示一个节点，行和列的交叉处的数字表示节点之间的关系：0表示没有连接，1表示有连接，大于1表示不同的权重。
 * 访问Graph中的节点需要使用遍历算法，遍历算法又分为广度优先和深度优先，主要用于确定目标节点和根节点间的距离
 * 在javascript中，Graph可以用一个矩阵（二维数组）表示，广度优先搜索算法可以实现如下：
 */

function Graph(graph, root) {
  var nodesLen = {}
  for (let i = 0; i < graph.length; i++) {
    nodesLen[i] = Infinity
  }

  nodesLen[root] = 0

  var queue = [root]
  var current
  while (queue.length != 0) {
    current = queue.shift()
    var curConnected = graph[current]
    var neighborIndex = []
    var index = curConnected.indexOf(1)
    while (index != 1) {
      neighborIndex.push(index)
      index = curConnected.indexOf(1, index + 1)
    }

    for (var j = 0; j < neighborIndex.length; j++) {
      if (nodesLen[neighborIndex[j]] == Infinity) {
        nodesLen[neighborIndex[j]] = nodesLen[current] + 1
        queue.push(neighborIndex[j])
      }
    }
  }
  return nodesLen
}

// test

var graph = [
  [0, 1, 1, 1, 0],
  [0, 0, 1, 0, 0],
  [1, 1, 0, 0, 0],
  [0, 0, 0, 1, 0],
  [0, 1, 0, 0, 0]
]

console.log(Graph(graph, 1))


const visitAllNodes = function(node, callback) {
  let childNodes = node.childNodes;
  if (childNodes.length > 1) {
    childNodes.forEach(childNode => {
      visitAllNodes(childNode, callback);
    });
  }
  callback(node);
};

const flattenTreeToArray = function(node) {
  let array = [];
  visitAllNodes(node, childNode => array.push(childNode));
  return array;
};

module.exports = {
  visitAllNodes: visitAllNodes,
  flattenTreeToArray: flattenTreeToArray
};
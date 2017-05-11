const { flattenTreeToArray } = require('./dom-util');
const _ = require('underscore');

const getElementById = function(root, id) {
  let domArray = flattenTreeToArray(root);
  let resultNode;
  domArray.forEach(node => {
    if (resultNode === undefined && node.id === id) {
      resultNode = node;
    }
  });
  return resultNode;
};

const getElementsByClassName = function(root, className) {
  // Your code here
};

const getElementsByTagName = function(root, tagName) {
  // Your code here
};

module.exports = {
  getElementById: getElementById,
  getElementsByClassName: getElementsByClassName,
  getElementsByTagName: getElementsByTagName
};

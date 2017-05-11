const { flattenTreeToArray } = require('./dom-util');
const _ = require('underscore');

const getElementById = function(root, id) {
  let domArray = flattenTreeToArray(root);
  let resultNode;
  _.each(domArray, node => {
    if (resultNode === undefined && node.id === id) {
      resultNode = node;
    }
  });
  return resultNode;
};

const getElementsByClassName = function(root, className) {
  let domArray = flattenTreeToArray(root);
  let result = [];
  _.each(domArray, node => {
    let classNames = node.classList;
    if (classNames !== undefined) {
      for (var key in classNames) {
        if (classNames[key] === className) {
          result.push(node);
        }
      }
    }
  });
  return result;
};

const getElementsByTagName = function(root, tagName) {
  // Your code here
};

module.exports = {
  getElementById: getElementById,
  getElementsByClassName: getElementsByClassName,
  getElementsByTagName: getElementsByTagName
};

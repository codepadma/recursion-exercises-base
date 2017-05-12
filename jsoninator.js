const _ = require('underscore'); // the real one! :)

// This is what you would do if you liked things to be easy:
// const stringify = JSON.stringify;
// But you don't. So you're going to write it from scratch...

function encloseWithQuotes(obj) {
  return '"' + obj + '"';
}

function encloseWithSquareBraces(obj) {
  return '[' + obj + ']';
}

function encloseWithParanthesis() {
  return '{' + obj + '}';
}

function stringifyArray(obj) {
  let array = [];
  _.each(obj, element => {
  	array.push(stringify(element));
  });
  return encloseWithSquareBraces(array.join(','));
}

function stringifyObject(obj) {
  let object = [];
  for (let key in obj) {
    let keyValPair = [];
    keyValPair.push(encloseWithQuotes(key));
    keyValPair.push(stringify(obj));
    object.push(keyValPair.join(':'));
  }
  return encloseWithParanthesis(object);
}
const stringify = function(obj) {
  let type = typeof(obj);
  if (type === 'undefined' || type === 'function') {
    return '';
  } else if (type === 'number' || type === 'boolean' || obj === null) {
    return '' + obj;
  } else if (type === 'string') {
    return encloseWithQuotes(obj);
  } else if (type === 'object') {
  	if (Array.isArray(obj)) {
      return stringifyArray(obj);
  	} else {
      return stringifyObject(obj);
  	}
  }
};

module.exports = {
  stringify: stringify
};
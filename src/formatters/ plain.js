import _ from 'lodash';

const stringify = (value) => {
  if (_.isObject(value)) {
    return `${'[complex value]'}`;
  }
  return _.isString(value) ? `'${value}'` : value;
};

const fullName = (ancestry, node) => {
  const name = `${ancestry}${node.key}`;
  return name;
};

const makeLines = (node, ancestry = '') => {
  switch (node.type) {
    case 'nested': {
      return node.children.map((child) => makeLines(child, `${fullName(ancestry, node)}.`));
    }
    case 'added': {
      return `Property '${fullName(ancestry, node)}' was removed`;
    }
    case 'deleted': {
      return `Property '${fullName(ancestry, node)}' was added with value: ${stringify(node.value)}`;
    }
    case 'changed': {
      return `Property '${fullName(ancestry, node)}' was updated. From ${stringify(node.removedValue)} to ${stringify(node.addedValue)}`;
    }
    default:
      return null;
  }
};

const plain = (diff) => {
  const result = diff.map((node) => makeLines(node));
  return result.flat(Infinity).filter(Boolean).join('\n');
};

export default plain;

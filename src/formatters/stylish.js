import _ from 'lodash';

const indent = (depth, replacer = ' ', spacesCount = 4) => replacer.repeat(spacesCount * depth - 2);

const stringify = (node, depth = 1) => {
  if (!_.isObject(node)) {
    return `${node}`;
  }

  const lines = Object.entries(node).map(([key, value]) => `${indent(depth)}  ${key}: ${stringify(value, depth + 1)}`);

  return [
    '{',
    ...lines,
    `${indent(depth - 1)}  }`,
  ].join('\n');
};

const makeTree = (nodes) => {
  const iter = (node, depth = 1) => {
    const {
      key, type, value, children, removedValue, addedValue,
    } = node;
    switch (type) {
      case 'nested': {
        return `\n${indent(depth)}  ${key}: {${children.map((child) => iter(child, depth + 1)).join('')}\n${indent(depth)}  }`;
      }
      case 'added': {
        return `\n${indent(depth)}- ${key}: ${stringify(value, depth + 1)}`;
      }
      case 'deleted': {
        return `\n${indent(depth)}+ ${key}: ${stringify(value, depth + 1)}`;
      }
      case 'unchanged': {
        return `\n${indent(depth)}  ${key}: ${stringify(value, depth + 1)}`;
      }
      case 'changed': {
        const removed = `\n${indent(depth)}- ${key}: ${stringify(removedValue, depth + 1)}`;
        const added = `\n${indent(depth)}+ ${key}: ${stringify(addedValue, depth + 1)}`;
        return `${removed}${added}`;
      }
      default:
        return null;
    }
  };
  return iter(nodes);
};

const stylish = (tree) => {
  const result = tree.map((node) => makeTree(node));
  return `{${result.join('')}\n}`;
};

export default stylish;

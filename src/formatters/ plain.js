import _ from 'lodash';

const stringify = (value) => {
  if (_.isObject(value)) {
    return `${'[complex value]'}`;
  }
  return _.isString(value) ? `'${value}'` : value;
};

const plain = (diff, ancestry = '') => {
  const lines = diff.map((node) => {
    const fullName = `${ancestry}${node.key}`;

    switch (node.type) {
      case 'nested': {
        return plain(node.children, `${fullName}.`);
      }
      case 'added': {
        return `Property '${fullName}' was removed`;
      }
      case 'deleted': {
        return `Property '${fullName}' was added with value: ${stringify(node.value)}`;
      }
      case 'changed': {
        return `Property '${fullName}' was updated. From ${stringify(node.removedValue)} to ${stringify(node.addedValue)}`;
      }
      default:
        return null;
    }
  });
  return [...lines]
    .filter(Boolean)
    .join('\n');
};

export default plain;

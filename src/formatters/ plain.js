import _ from 'lodash';

const stringify = (value) => {
  if (_.isObject(value)) {
    return `${'[complex value]'}`;
  }
  return _.isString(value) ? `'${value}'` : value;
};

const plain = (diff) => {
  const iter = (nodes, ancestry) => {
    const lines = nodes
      .map((node) => {
        const fullName = (ancestry === '' ? `${node.key}` : `${ancestry}.${node.key}`);

        switch (node.type) {
          case 'nested': {
            return iter(node.children, `${fullName}`);
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
  return iter(diff, '');
};

export default plain;

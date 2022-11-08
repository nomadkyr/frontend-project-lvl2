import _ from 'lodash';

const stringify = (value) => {
  if (_.isObject(value)) {
    return `${['complex value']}`;
  }
  return _.isString(value) ? `${value}` : value;
};

const plain = (diff) => {
  const iter = (nodes, ancestry) => {
    const lines = nodes
      .map((node) => {
        const fullName = (ancestry === '' ? `${diff.key}` : `${ancestry}${diff.key}`);

        switch (node.type) {
          case 'nested': {
            return iter(node.children, `${ancestry}${node.name}`);
          }
          case 'added': {
            return `Property '${fullName}' was added with value '${stringify(node.value)}'`;
          }
          case 'deleted': {
            return `Property '${fullName}' was removed`;
          }
          case 'changed': {
            return `Property '${fullName}' was updated. From ${stringify(diff.removedValue)} to ${stringify(diff.addedValue)}`;
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

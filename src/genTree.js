import _ from 'lodash';

const genTree = (data1, data2) => {
  const keys1 = Object.keys(data1);
  const keys2 = Object.keys(data2);
  const sortedKeys = _.sortBy(_.union(keys1, keys2));

  const diff = sortedKeys.map((key) => {
    const value1 = data1[key];
    const value2 = data2[key];

    if (_.isObject(value1) && _.isObject(value2)) {
      return {
        key,
        type: 'nested',
        children: genTree(value1, value2),
      };
    }
    if (!_.has(data2, key)) {
      return {
        key,
        type: 'added',
        value: value1,
      };
    }
    if (!_.has(data1, key)) {
      return {
        key,
        type: 'deleted',
        value: value2,
      };
    }
    if (value1 !== value2) {
      return {
        key,
        type: 'changed',
        removedValue: value1,
        addedValue: value2,
      };
    }
    return {
      key,
      type: 'unchanged',
      value: value1,
    };
  });

  return diff;
};

export default genTree;

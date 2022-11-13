import { load } from 'js-yaml';

const parse = (data, formatName) => {
  switch (formatName) {
    case '.json':
      return JSON.parse(data);
    case '.yml':
    case '.yaml':
      return load(data);
    default:
      throw new Error('Unknown format. You can use only JSON or YAML/YML formats.');
  }
};

export default parse;

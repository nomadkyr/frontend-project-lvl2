import _ from 'lodash';
import path from 'path';
import readFile from './readFile.js';
import parse from './parse.js';

const genDiff = (filepath1, filepath2) => {
  const readfile1 = readFile(filepath1);
  const readfile2 = readFile(filepath2);

  const file1 = parse(readfile1, path.extname(filepath1));
  const file2 = parse(readfile2, path.extname(filepath2));

  const keys1 = Object.keys(file1);
  const keys2 = Object.keys(file2);

  const sortedKeys = _.union(keys1, keys2).sort();

  const newArray = [];
  sortedKeys.map((key) => {
    if (!Object.hasOwn(file1, key)) {
      newArray.push(`  + ${key}: ${file2[key]}`);
    } else if (!Object.hasOwn(file2, key)) {
      newArray.push(`  - ${key}: ${file1[key]}`);
    } else if (file1[key] !== file2[key]) {
      newArray.push(`  - ${key}: ${file1[key]}`);
      newArray.push(`  + ${key}: ${file2[key]}`);
    } else {
      newArray.push(`    ${key}: ${file1[key]}`);
    }
    return null;
  });
  return ['{', ...newArray, '}'].join('\n');
};

export default genDiff;

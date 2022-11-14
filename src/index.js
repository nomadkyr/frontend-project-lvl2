import path from 'path';
import readFile from './readFile.js';
import parse from './parse.js';
import genTree from './genTree.js';
import format from './formatters/index.js';

const genDiff = (filepath1, filepath2, formatterName = 'stylish') => {
  const readfile1 = readFile(filepath1);
  const readfile2 = readFile(filepath2);

  const file1 = parse(readfile1, path.extname(filepath1));
  const file2 = parse(readfile2, path.extname(filepath2));

  const tree = genTree(file1, file2);
  return format(tree, formatterName);
};

export default genDiff;

import readFile from '../src/readFile.js';
import genDiff from '../src/index.js';

const expectedOutput = readFile('output.txt');

test('main test', () => {
  expect(genDiff('file1.json', 'file2.json')).toEqual(expectedOutput);
});

import { expect, test } from '@jest/globals';
import readFile from '../src/readFile.js';
import genDiff from '../src/index.js';

const expectedOutput = readFile('output.txt');

test('json test', () => {
  expect(genDiff('file1.json', 'file2.json')).toEqual(expectedOutput);
});

test('yaml test', () => {
  expect(genDiff('file1.yml', 'file2.yaml')).toEqual(expectedOutput);
});

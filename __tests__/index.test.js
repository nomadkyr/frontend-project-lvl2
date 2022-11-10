import { expect, test } from '@jest/globals';
import readFile from '../src/readFile.js';
import genDiff from '../src/index.js';

const expectedOutput = readFile('output.txt');
const plainExpectedOutput = readFile('plain_output.txt');
const jsonExpectedOutput = readFile('json_output.txt');

test('json test', () => {
  expect(genDiff('file1.json', 'file2.json')).toEqual(expectedOutput);
});

test('yaml test', () => {
  expect(genDiff('file1.yml', 'file2.yaml')).toEqual(expectedOutput);
});

test('plainFormat test', () => {
  expect(genDiff('file1.json', 'file2.json')).toEqual(plainExpectedOutput);
});

test('jsonFormat test', () => {
  expect(genDiff('file1.json, file2.json')).toEqual(jsonExpectedOutput);
});

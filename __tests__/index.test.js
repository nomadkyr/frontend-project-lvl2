import { expect, test } from '@jest/globals';
import readFile from '../src/readFile.js';
import genDiff from '../src/index.js';

const plainExpectedOutput = readFile('plain_output.txt');
const jsonExpectedOutput = readFile('json_output.txt');
const stylishExpectedOutput = readFile('stylish_output.txt');

test('plainFormat test1', () => {
  expect(genDiff('file1.json', 'file2.json', 'plain')).toEqual(plainExpectedOutput);
});

test('plainFormat test2', () => {
  expect(genDiff('file1.yml', 'file2.yaml', 'plain')).toEqual(plainExpectedOutput);
});

test('stylishFormat test1', () => {
  expect(genDiff('file1.json', 'file2.json', 'stylish')).toEqual(stylishExpectedOutput);
});

test('stylishFormat test2', () => {
  expect(genDiff('file1.yml', 'file2.yaml', 'stylish')).toEqual(stylishExpectedOutput);
});

test('jsonFormat test1', () => {
  expect(genDiff('file1.json', 'file2.json', 'json')).toEqual(jsonExpectedOutput);
});

test('jsonFormat test2', () => {
  expect(genDiff('file1.yml', 'file2.yaml', 'json')).toEqual(jsonExpectedOutput);
});

test('default option', () => {
  expect(genDiff('file1.json', 'file2.json')).toEqual(stylishExpectedOutput);
});

test('default option2', () => {
  expect(genDiff('file1.yml', 'file2.yaml')).toEqual(stylishExpectedOutput);
});

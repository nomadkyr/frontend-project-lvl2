#!/usr/bin/env node
import { Command } from 'commander';
import genDiff from '../src/index.js';

const program = new Command();

program
  .name('gendiff')
  .usage('[options] <filepath1> <filepath2>')
  .option('-f, --format <type>', 'output format')
  .arguments('<filepath1> <filepath2>')
  .version('3.4.4')
  .description('Compares two configuration files and shows a difference.')
  .action((filepath1, filepath2) => {
    console.log(genDiff(filepath1, filepath2));
  });
program.parse();

#!/usr/bin/env node
import { Command } from 'commander';

const program = new Command();

program 
  .name('gendiff')
  .option('-f, --format <type>', 'output format')
  .arguments('<filepath1> <filepath2>')
  .version('3.4.4')  
  .description('Compares two configuration files and shows a difference.');
  
 
program.parse();
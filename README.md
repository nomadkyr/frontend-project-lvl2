### Hexlet tests and linter status:
[![Actions Status](https://github.com/nomadkyr/frontend-project-lvl2/workflows/hexlet-check/badge.svg)](https://github.com/nomadkyr/frontend-project-lvl2/actions) <a href="https://codeclimate.com/github/nomadkyr/frontend-project-lvl2/maintainability"><img src="https://api.codeclimate.com/v1/badges/f8451b8914791d6491dd/maintainability" /></a> <a href="https://codeclimate.com/github/nomadkyr/frontend-project-lvl2/test_coverage"><img src="https://api.codeclimate.com/v1/badges/f8451b8914791d6491dd/test_coverage" /></a>

## Gendiff

Gendiff programm compares two configuration of files and shows a difference. Function works with .json, .yaml, .yml formats.

## Install

1. Make sure you have installed Node.js no lower version 12: `node -v`
2. Clone this repo: `https://github.com/nomadkyr/frontend-project-lvl2.git`
3. Get root folder of project, run the commands `make install` and `make link`

## Usage

```gendiff -h

  Usage: gendiff [options] <filepath1> <filepath2>

  Compares two configuration files and shows a difference.

  Options:
    -V, --version        output the version number
    -h, --help           output usage information
    -f, --format <type>  output format
 ```
    
## Formats
Gendiff can show the difference in three ways: stylish (default), plain and json.

## Example of using
`gendiff --format plain __fixtures__/file1.json __fixtures__/file2.json`

## Test
`make test`
`make test-coverage`

## Asciinemas:
1. Comparing flat files in .json format:

<a href="https://asciinema.org/a/5zIpK3u4R38WXAKORSpoZBL8n" target="_blank"><img src="https://asciinema.org/a/5zIpK3u4R38WXAKORSpoZBL8n.svg" /></a>

2. Comparing flat files in .yaml/yml format:

<a href="https://asciinema.org/a/3DREC4u0UY8ohfQDWpPpxbLpk" target="_blank"><img src="https://asciinema.org/a/3DREC4u0UY8ohfQDWpPpxbLpk.svg" /></a>

3. Comparing nested files in .json format:

<a href="https://asciinema.org/a/epvLFiscGJYSf11RaNAzhrhTD" target="_blank"><img src="https://asciinema.org/a/epvLFiscGJYSf11RaNAzhrhTD.svg" /></a>

4. Showing work of `-h` option, comparing nested files using `--format` option:

<a href="https://asciinema.org/a/QYwtHGhew5zFD1mfZqh5KnsIv" target="_blank"><img src="https://asciinema.org/a/QYwtHGhew5zFD1mfZqh5KnsIv.svg" /></a>








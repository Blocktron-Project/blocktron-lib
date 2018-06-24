![logo](blocktron.png)
# blocktron-lib
[![GitHub license](https://img.shields.io/github/license/Blocktron-Project/blocktron-lib.svg)](https://github.com/Blocktron-Project/blocktron-lib/blob/master/LICENSE) ![Dependencies](https://david-dm.org/Blocktron-Project/blocktron-lib.svg) ![Maintained](https://img.shields.io/badge/Maintained%3F-yes-green.svg) ![status](https://img.shields.io/badge/status-stable-brightgreen.svg) ![Travis-build](https://travis-ci.org/Blocktron-Project/blocktron-lib.svg?branch=master) [![GitHub issues](https://img.shields.io/github/issues/Blocktron-Project/blocktron-lib.svg)](https://github.com/Blocktron-Project/blocktron-lib/issues) [![GitHub forks](https://img.shields.io/github/forks/Blocktron-Project/blocktron-lib.svg)](https://github.com/Blocktron-Project/blocktron-lib/network) [![GitHub stars](https://img.shields.io/github/stars/Blocktron-Project/blocktron-lib.svg)](https://github.com/Blocktron-Project/blocktron-lib/stargazers) [![Twitter](https://img.shields.io/twitter/url/https/github.com/Blocktron-Project/blocktron-lib.svg?style=social)](https://twitter.com/intent/tweet?text=Wow:&url=https%3A%2F%2Fgithub.com%2FBlocktron-Project%2Fblocktron-lib)

**blocktron-lib** module is a member of the Blocktron Project. blocktron-lib is a javascript library housing a blockchain class, and the core blockchain data structures with various blockchain methods and functionalities. This library is fully extensible to accommodate any blockchain applications. Its completely independent and follows a class constructor design pattern.

**Blocktron** is a simple yet elegant and efficient blockchain framework written in **Javascript** for **Node.js** environment. Blocktron is aimed at developing generic, multipurpose blockchain platforms and softwares for various application use-cases, and also for educational and awareness purposes. blocktron-lib is completely tested using Jest framework. This library is built from the ground up using only opensource technologies.

## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. 

**Prerequisites**

The following programs/libraries/languages/compilers/editors/tools etc are required to use the blocktron-lib.
- Node.js >= [Node.js 4.x](https://nodejs.org/dist/latest-v4.x/)
- [git](https://git-scm.com/)
- Terminal / cmd
- Code Editor (```VSCode preferably```)

## Installation
**NPM**

You can install **blocktron-lib** from npm using:
```sh
npm install blocktron-lib --save
```
**GitHub**

You can download a zip of the project repo or clone the repo from your terminal using the command:
```sh
git clone https://github.com/Blocktron-Project/blocktron-lib.git
```
**Sample usage**

```js
//In your app.js
const Blocktron = require('blocktron-lib');
const blockchain = new Blocktron;

console.log(blockchain);
```
then run your app.js by
```sh
node app.js
```
Your blockchain with the default genesis block will be displayed as:
```sh
Blocktron {
	chain: [{
		index: 1,
		timeStamp: 1529827768993,
		transactions: [],
		nonce: 1,
		hash: '0',
		previousHash: '0'
	}],
	pendingTransactions: []
}
```
## Dependency

The blocktron-lib library is dependent only on the ***`sha256`*** npm module to run on production. Its a JavaScript component to compute the `SHA256` of strings or bytes.
For a development setup this library depends on the following npm modules:
- [**babel-core**](https://www.npmjs.com/package/babel-core)
    The babel compiler core
- [**babel-eslint**](https://www.npmjs.com/package/babel-eslint)
    babel-eslint allows you to lint ALL valid Babel code with the fantastic ESLint.
- [**babel-loader**](https://www.npmjs.com/package/babel-loader)
    This package allows transpiling JavaScript files using Babel and webpack.
- [**babel-preset-stage-0**](https://www.npmjs.com/package/babel-preset-stage-0)
    Babel preset for stage 0 plugins.
- [**babel-preset-es2015**](https://www.npmjs.com/package/babel-preset-es2015)
    Babel preset for all es2015 plugins.
- [**eslint**](https://www.npmjs.com/package/eslint)
    ESLint is a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code.
- [**jest**](https://www.npmjs.com/package/jest)
    A javascript test framework developed by Facebook.
- [**prettier**](https://www.npmjs.com/package/prettier)
    Prettier is an opinionated code formatter. It enforces a consistent style by parsing your code and re-printing it with its own rules that take the maximum line length into account, wrapping code when necessary.
- [**prettier-webpack-plugin**](https://www.npmjs.com/package/prettier-webpack-plugin)
    Automatically process your source files with Prettier when bundling via Webpack.
- [**webpack**](https://www.npmjs.com/package/webpack)
    webpack is a module bundler. Its main purpose is to bundle JavaScript files for usage in a browser, yet it is also capable of transforming, bundling, or packaging just about any resource or asset.
- [**webpack-cli**](https://www.npmjs.com/package/webpack-cli)
    Webpack CLI encapsulates all code related to CLI handling. It captures options and sends them to webpack compiler. You can also find functionality for initializing a project and migrating between versions.

## Changelog

**v 0.0.1**
- Complete blockchain implementation in javascript
- Code optimizations
- Continuous integration using Travis-CI
- Complete code test coverage
- Unit tests added using Jest

## API Documentation

## Continuous Integration (CI)
Continuous Integration services monitor repositories for changes, then automatically run unit tests on your behalf, typically in a containerized environment. To test this setup works in a continuous integration environment, an integration was done with [Travis CI](https://travis-ci.org/). According to the [Travis Node.js Documentation](http://docs.travis-ci.com/user/languages/javascript-with-nodejs/), Travis automatically runs `npm install` and `npm test`. The only additional thing I had to add to the Travis configuration was to run `npm run build` before running the tests. The working Travis config looks like this:

```yml
language: node_js

node_js:
  - stable

install:
  - npm install

script:
  - npm run build
  - npm test
```
Here's the [Travis build page for this project](https://travis-ci.org/Blocktron-Project/blocktron-lib), which shows the tests passing.

## Tests
This project uses Jest framework for unit testing. All unit tests are available in the test folder. Tests can be run by the command:
```sh
npm run test
```
## Built with
## Contributing
## Versioning
## Authors

## License
The MIT License

Copyright (c) 2018- Sandeep Vattapparambil, http://www.sandeepv.in

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

## Acknowledgements
Made with ❤️ by [Sandeep Vattapparambil](https://github.com/SandeepVattapparambil).
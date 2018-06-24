![logo](blocktron.png)
# blocktron-lib
[![GitHub license](https://img.shields.io/github/license/Blocktron-Project/blocktron-lib.svg)](https://github.com/Blocktron-Project/blocktron-lib/blob/master/LICENSE) ![Dependencies](https://david-dm.org/Blocktron-Project/blocktron-lib.svg) ![Maintained](https://img.shields.io/badge/Maintained%3F-yes-green.svg) ![status](https://img.shields.io/badge/status-stable-brightgreen.svg) ![Travis-build](https://travis-ci.org/Blocktron-Project/blocktron-lib.svg?branch=master) [![GitHub issues](https://img.shields.io/github/issues/Blocktron-Project/blocktron-lib.svg)](https://github.com/Blocktron-Project/blocktron-lib/issues) [![GitHub forks](https://img.shields.io/github/forks/Blocktron-Project/blocktron-lib.svg)](https://github.com/Blocktron-Project/blocktron-lib/network) [![GitHub stars](https://img.shields.io/github/stars/Blocktron-Project/blocktron-lib.svg)](https://github.com/Blocktron-Project/blocktron-lib/stargazers) [![Twitter](https://img.shields.io/twitter/url/https/github.com/Blocktron-Project/blocktron-lib.svg?style=social)](https://twitter.com/intent/tweet?text=Wow:&url=https%3A%2F%2Fgithub.com%2FBlocktron-Project%2Fblocktron-lib)

**blocktron-lib** module is a member of the Blocktron Project. blocktron-lib is a javascript library housing a blockchain class, and the core blockchain data structures with various blockchain methods and functionalities. This library is fully extensible to accommodate any blockchain applications. Its completely independent and follows a class constructor design pattern.

**Blocktron** is a simple yet elegant and efficient blockchain framework written in **Javascript** for **Node.js** environment. Blocktron is aimed at developing generic, multipurpose blockchain platforms and softwares for various application use-cases, and also for educational and awareness purposes. blocktron-lib is completely tested using Jest framework. This library is built from the ground up using only opensource technologies.

## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. 

**NPM**

You can install **blocktron-lib** from npm using:
```sh
npm install blocktron-lib --save
```
and then in your app.js file you can use it by:
```js
const Blocktron = require('blocktron-lib');
const blockchain = new Blocktron;
```
**GitHub**

You can download a zip of the project repo or clone the repo from your terminsl using the command:
```sh
git clone https://github.com/Blocktron-Project/blocktron-lib.git
```
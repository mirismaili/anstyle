# Anstyle

> A very simple utility to change colors and styles of command line outputs (logs)

[![npm (scoped)](https://img.shields.io/npm/v/anstyle.svg)](https://npmjs.com/package/anstyle)
[![install size](https://packagephobia.now.sh/badge?p=anstyle)](https://packagephobia.now.sh/result?p=anstyle)
[![downloads](https://img.shields.io/npm/dt/anstyle.svg)](https://npmjs.com/package/anstyle) <br>
[![license](https://img.shields.io/github/license/mirismaili/anstyle.svg)](https://github.com/mirismaili/anstyle/blob/master/LICENSE)
[![Forks](https://img.shields.io/github/forks/mirismaili/anstyle.svg?style=social)](https://github.com/mirismaili/anstyle/fork)
[![Stars](https://img.shields.io/github/stars/mirismaili/anstyle.svg?style=social)](https://github.com/mirismaili/anstyle)

```bash
npm i anstyle
```

or:

```bash
yarn add anstyle
```

## Sample

```javascript
import {BOLD, BLUE, GREEN, RED, NORMAL, RESET} from 'anstyle'
console.log(`This ${BOLD}is a ${BLUE}rich${NORMAL} and ${RED}colorful ${GREEN}text${RESET}.`)
```

*Prints:*

![sample-output.png](https://raw.githubusercontent.com/mirismaili/anstyle/main/sample-output.png)

You can summarize the above:

```javascript
import {D, B, G, N, R, T} from 'anstyle'
console.log(`This ${D}is a ${B}rich${N} and ${R}colorful ${G}text${T}.`)
```

## API reference

The source is very simple and illustrative. It's your document:

[main.js](https://github.com/mirismaili/anstyle/blob/main/src/main.js)

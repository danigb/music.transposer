# music.transposer

[![Build Status](https://travis-ci.org/danigb/music.transposer.svg?branch=master)](https://travis-ci.org/danigb/music.transposer)
[![Code Climate](https://codeclimate.com/github/danigb/music.transposer/badges/gpa.svg)](https://codeclimate.com/github/danigb/music.transposer)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)
[![npm version](https://img.shields.io/npm/v/music.transposer.svg)](https://www.npmjs.com/package/music.transposer)
[![license](https://img.shields.io/npm/l/music.transposer.svg)](https://www.npmjs.com/package/music.transposer)
[![distribution](https://img.shields.io/badge/dist-5.4kb-yellow.svg)](https://github.com/danigb/music.transposer)
[![music.kit](https://img.shields.io/badge/music-kit-yellow.svg)](https://github.com/danigb/music.kit)

A transposer is a function that transposes a list of notes or intervals:

```js
var majorSecond = transposer('2M')
majorSecond(['F3', 'B5']) // => ['G3', 'C#6']
majorSecond('C D E F G') // => ['D', 'E', 'F#', 'G', 'A']
```

## Install

Cooming soon.

## Usage

You can create a transposer from a interval:

```js
var ninth = transposer('9M')
ninth('C4') // => 'D5'
```


Or you can apply the transposition in one call:

```js
var maj7drop2 = transposer('C2 E2 G1 B2')
maj7drop2('A2') // => ['A2', 'C#3', 'E2', 'G#3']
```

You can transpose intervals:

```js
transposer('M2', '1P 2M 3M')
```

Take a look to [music.notation]() to see the intervals format.

Read the [generated documentation here](https://github.com/danigb/music.transposer/blob/master/API.md)

## License

MIT License

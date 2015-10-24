var vows = require('vows')
var assert = require('assert')
var transposer = require('../')

vows.describe('transposer').addBatch({
  'transpose note list': function () {
    assert.deepEqual(transposer('3m', 'c d e f g a'), ['Eb', 'F', 'G', 'Ab', 'Bb', 'C'])
  },
  'transpose a interval list': function () {
    assert.deepEqual(transposer('3M', '1 2 3'), [ '3M', '4A', '5A' ])
  },
  'partial applied': function () {
    var second = transposer('2')
    assert.deepEqual(second('b1 c1 d1'), [ 'C#2', 'D1', 'E1' ])
  },
  'params not valid': function () {
    assert.deepEqual(transposer('blah', '1 2 3'), [ null, null, null ])
    assert.deepEqual(transposer(null, '1 2 3'), [ null, null, null ])
    assert.deepEqual(transposer('2', 't r m'), [ null, null, null ])
  }
}).export(module)

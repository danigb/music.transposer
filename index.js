'use strict'

var gamut = require('music.gamut')
var notation = require('music.notation')
var operator = require('music.operator')

/**
 * Transpose a list of notes or intervals by an interval
 *
 * This function is currified, so it can be partially applied
 *
 * @name transposer
 * @function
 * @param {String|Array} interval - the interval to transpose
 * @param {String|Array} notes - the note or notes to transpose
 */
function transposer (interval, notes) {
  if (arguments.length === 1) return function (s) { return transposer(interval, s) }
  return gamut.apply(function (g) {
    var i = notation.arr(interval)
    return g.map(function (n) {
      return operator.add(i, n)
    })
  }, notes)
}

module.exports = transposer

(function (global) {
  'use strict';
  var palindromes = global.palindromes;

  /*
    For example, the output for string, "sqrrqabccbatudefggfedvwhijkllkjihxymnnmzpop" should be:

    Text: hijkllkjih, Index: 23, Length: 10
    Text: defggfed, Index: 13, Length: 8
    Text: abccba, Index: 5, Length: 6
  */

  if (typeof (palindromes) === 'function') {
    palindromes.mockResult = {
      str: 'sqrrqabccbatudefggfedvwhijkllkjihxymnnmzpop',
      count: 3,
      result: [{
        'text': 'hijkllkjih',
        'length': 10,
        'index': 23
      }, {
        'text': 'defggfed',
        'length': 8,
        'index': 13
      }, {
        'text': 'abccba',
        'length': 6,
        'index': 5
      }]
    };
  }
}(this));
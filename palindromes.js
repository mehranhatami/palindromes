/*! palindromes v0.0.1 - MIT license */

(function (global) {
  'use strict';

  //Polyfill
  if (!String.prototype.trim) {
    String.prototype.trim = function () {
      return this.replace(/^\s+|\s+$/g, '');
    };
  }

  function moduleDefinition() {

    function Palindrome(text, index) {
      this.text = text;
      this.length = text.length;
      this.index = index;
    }

    function find(baseStr, maxlen) {

      if (typeof baseStr !== 'string' || baseStr === '' || maxlen < 2) {
        return null;
      }

      if (typeof maxlen !== 'number') {
        maxlen = baseStr.length;
      }

      if (maxlen < 2) {
        return null;
      }

      var
        arr,
        arrlen,
        bufferArray = [],
        cachedIndex = 0,
        cachedLen = 0,
        startIndex = 0,
        endIndex = 0,
        i = 1,
        bufferIndex,
        index,
        resultArray,
        result,
        resultLen = 0;

      arr = (' ' + baseStr + ' ').split('').join().trim().split('');
      arrlen = arr.length;

      maxlen = maxlen || baseStr.length;

      for (; i < arrlen; i++) {
        if (i > cachedIndex) {
          bufferArray[i] = 0;
          startIndex = i - 1;
          endIndex = i + 1;
        } else {
          bufferIndex = cachedLen * 2 - i;
          if (bufferArray[bufferIndex] < (cachedIndex - i)) {
            bufferArray[i] = bufferArray[bufferIndex];
            startIndex = -1;
          } else {
            bufferArray[i] = cachedIndex - i;
            endIndex = cachedIndex + 1;
            startIndex = i * 2 - endIndex;
          }
        }
        while (startIndex >= 0 && endIndex < arr.length && arr[startIndex] === arr[endIndex]) {
          bufferArray[i]++;
          startIndex--;
          endIndex++;
        }
        if ((i + bufferArray[i]) > cachedIndex) {
          cachedLen = i;
          cachedIndex = i + bufferArray[i];
        }
      }

      cachedLen = 0;
      i = 1;
      arrlen = arr.length;

      for (; i < arrlen; i++) {
        if (resultLen < bufferArray[i] &&
          bufferArray[i] <= maxlen &&
          bufferArray[i] > 1) {
          resultLen = bufferArray[i];
          cachedLen = i;
        }
      }

      if (cachedLen === 0) {
        return null;
      }

      index = cachedLen - resultLen;

      resultArray = arr.slice(index, cachedLen + resultLen + 1);

      result = resultArray.join('').replace(/(\,)/g, '');

      index = index / 2;

      return new Palindrome(result, index);
    }

    /**
     * @param {String} baseStr
     * @param {Number} count
     * @return {Array}
     * @api public
     */
    function palindromes(baseStr, count) {

      var result = [],
        i = 0,
        palindrome,
        maxlen = baseStr.length;

      for (; i < count; i++) {
        palindrome = find(baseStr, maxlen);

        if (palindrome && palindrome.text) {
          result.push(palindrome);
          maxlen = palindrome.text.length - 1;
        } else {
          break;
        }
      }

      return result;
    }

    palindromes.find = find;
    palindromes.Palindrome = Palindrome;
    /**
     * Expose palindromes
     */
    return palindromes;

  }

  if (typeof exports === 'object') {
    // node export
    module.exports = moduleDefinition();
  } else if (typeof define === 'function' && define.amd) {
    // amd anonymous module registration
    define([], moduleDefinition);
  } else {
    // browser global
    global.palindromes = moduleDefinition();
  }
}(this));
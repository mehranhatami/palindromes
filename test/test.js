(function () {

  'use strict';

  var expect = chai.expect,
    mockResult;

  describe('palindromes()', function () {
    it('Check if palindromes function exists!', function () {
      expect(palindromes).to.be.a('function');
    });

    mockResult = palindromes.mockResult;

    it('Check if palindromes.Palindrome is a class-like function!', function () {
      var sampleStr = '123321';

      expect(palindromes.Palindrome).to.be.a('function');

      expect(new palindromes.Palindrome(sampleStr, 30)).to.satisfy(function (palindrome) {
        return (palindrome.text === sampleStr &&
          palindrome.length === sampleStr.length &&
          palindrome.index === 30);
      });

    });

    if (mockResult) {
      describe('Check if palindromes function is working as it should be!', function () {
        var Palindrome = palindromes.Palindrome,
          result = palindromes(mockResult.str, mockResult.count),
          len = result.length;

        it('Check if the test result passes the functionality test-cases!', function () {

          var i = 0;

          expect(result).is.an('array');

          expect(result).to.have.length.below(mockResult.count + 1);

          for (; i < len; i += 1) {
            expect(result[i]).to.be.an.instanceof(Palindrome);
          }

        });

        it('Compare the output with the predicted result defined in mock/result.js', function () {

          expect(result).to.deep.equal(mockResult.result);

        });

      });
    }
  });

}());
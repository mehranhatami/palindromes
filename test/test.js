(function () {

  'use strict';

  var expect = chai.expect,
    mockResult,
    sampleStr = '123321',
    sampleResult;

  describe('palindromes()', function () {
    it('Check if palindromes function exists!', function () {
      expect(palindromes).to.be.a('function');
    });

    mockResult = palindromes.mockResult;

    it('Check if palindromes.Palindrome is a class-like function!', function () {

      expect(palindromes.Palindrome).to.be.a('function');

      expect(new palindromes.Palindrome(sampleStr, 30)).to.satisfy(function (palindrome) {
        return (palindrome.text === sampleStr &&
          palindrome.length === sampleStr.length &&
          palindrome.index === 30);
      });

    });

    it('Check if palindromes.find works as it should be!', function () {

      expect(palindromes.find).to.be.a('function');

      sampleResult = palindromes.find(sampleStr);

      expect(sampleResult).to.be.an.instanceof(palindromes.Palindrome);
      expect(sampleResult.text).to.be.equal(sampleStr);
      expect(sampleResult.index).to.equal(0);

      sampleResult = palindromes.find(sampleStr, 1);

      expect(sampleResult).to.be.null;

      sampleResult = palindromes.find(null);

      expect(sampleResult).to.be.null;

      sampleResult = palindromes.find('');

      expect(sampleResult).to.be.null;

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
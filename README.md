# palindromes

[![Build Status](https://secure.travis-ci.org/mehranhatami/palindromes.png?branch=master)](http://travis-ci.org/mehranhatami/palindromes)
[![Code Climate](https://codeclimate.com/github/mehranhatami/palindromes/badges/gpa.svg)](https://codeclimate.com/github/mehranhatami/palindromes)
[![Coverage Status](https://coveralls.io/repos/mehranhatami/palindromes/badge.png)](https://coveralls.io/r/mehranhatami/palindromes)

A JavaScript module to calculate string in order to find palindromes

## About palindromes

A **palindrome** is a word, phrase, number, or other sequence of symbols or elements that reads the same forward or reversed, with general allowances for adjustments to punctuation and word dividers. Famous examples include "Amor, Roma", "A man, a plan, a canal: Panama" and "No 'x' in 'Nixon'".

Composing literature in palindromes is an example of constrained writing. The word "palindrome" was coined from the Greek roots palin (πάλιν; "again") and dromos (δρóμος; "way, direction") by the English writer Ben Jonson in the 17th century. The Greek phrase to describe the phenomenon is karkinikê epigrafê (καρκινικὴ επιγραφή; "crab inscription"), or simply karkinoi (καρκίνοι; "crabs"), alluding to the movement of crabs, such as an inscription that may be read backwards.

## Installation

Install with [Bower](http://bower.io):

```
bower install --save palindromes
```

The component can be used as a Common JS module, an AMD module, or a global.


## API

### palindromes()


## Testing

Install [Node](http://nodejs.org) (comes with npm) and Bower.

From the repo root, install the project's development dependencies:

```
npm install
bower install
```

Testing relies on the Karma test-runner. If you'd like to use Karma to
automatically watch and re-run the test file during development, it's easiest
to globally install Karma and run it from the CLI.

```
npm install -g karma
karma start
```

To run the tests in Firefox, just once, as CI would:

```
npm test
```

To run the tests for your desired browser (any of Chrome, Firefox, Opera, IE):

```
karma start --browsers BrowserName --single-run
```


## Browser support

* Google Chrome (latest)
* Opera (latest)
* Firefox 4+
* Safari 5+
* Internet Explorer 8+

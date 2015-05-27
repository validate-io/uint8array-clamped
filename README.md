Uint8ClampedArray
===
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][coveralls-image]][coveralls-url] [![Dependencies][dependencies-image]][dependencies-url]

> Validates if a value is a [Uint8ClampedArray](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8ClampedArray).


## Installation

``` bash
$ npm install validate.io-uint8array-clamped
```

For use in the browser, use [browserify](https://github.com/substack/node-browserify).


## Usage

``` javascript
var isUint8ClampedArray = require( 'validate.io-uint8array-clamped' );
```

#### isUint8ClampedArray( value )

Validates if a value is an [Uint8ClampedArray](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8ClampedArray).

``` javascript
var arr = new Uint8ClampedArray( 10 );

var bool = isUint8ClampedArray( arr );
// returns true
```


## Examples

``` javascript
var isUint8ClampedArray = require( 'validate.io-uint8array-clamped' );

console.log( isUint8ClampedArray( new Uint8ClampedArray( 10 ) ) );
// returns true

console.log( isUint8ClampedArray( new Int8Array( 10 ) ) );
// returns false

console.log( isUint8Array( new Uint8ClampedArray( 10 ) ) );
// returns false

console.log( isUint8ClampedArray( new Int16Array( 10 ) ) );
// returns false

console.log( isUint8ClampedArray( new Uint16Array( 10 ) ) );
// returns false

console.log( isUint8ClampedArray( new Int32Array( 10 ) ) );
// returns false

console.log( isUint8ClampedArray( new Uint32Array( 10 ) ) );
// returns false

console.log( isUint8ClampedArray( new Float32Array( 10 ) ) );
// returns false

console.log( isUint8ClampedArray( new Float64Array( 10 ) ) );
// returns false

console.log( isUint8ClampedArray( new Array( 10 ) ) );
// returns false

console.log( isUint8ClampedArray( {} ) );
// returns false

console.log( isUint8ClampedArray( null ) );
// returns false
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


## Tests

### Unit

Unit tests use the [Mocha](http://mochajs.org) test framework with [Chai](http://chaijs.com) assertions. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul](https://github.com/gotwarlost/istanbul) as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```


---
## License

[MIT license](http://opensource.org/licenses/MIT). 


## Copyright

Copyright &copy; 2015. Athan Reines.


[npm-image]: http://img.shields.io/npm/v/validate.io-uint8array-clamped.svg
[npm-url]: https://npmjs.org/package/validate.io-uint8array-clamped

[travis-image]: http://img.shields.io/travis/validate-io/uint8array-clamped/master.svg
[travis-url]: https://travis-ci.org/validate-io/uint8array-clamped

[coveralls-image]: https://img.shields.io/coveralls/validate-io/uint8array-clamped/master.svg
[coveralls-url]: https://coveralls.io/r/validate-io/uint8array-clamped?branch=master

[dependencies-image]: http://img.shields.io/david/validate-io/uint8array-clamped.svg
[dependencies-url]: https://david-dm.org/validate-io/uint8array-clamped

[dev-dependencies-image]: http://img.shields.io/david/dev/validate-io/uint8array-clamped.svg
[dev-dependencies-url]: https://david-dm.org/dev/validate-io/uint8array-clamped

[github-issues-image]: http://img.shields.io/github/issues/validate-io/uint8array-clamped.svg
[github-issues-url]: https://github.com/validate-io/uint8array-clamped/issues

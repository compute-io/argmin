argmin
===
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][coveralls-image]][coveralls-url] [![Dependencies][dependencies-image]][dependencies-url]

> Computes the minimum value of a numeric array and returns the corresponding array indices.


## Installation

``` bash
$ npm install compute-argmin
```

For use in the browser, use [browserify](https://github.com/substack/node-browserify).


## Usage

To use the module,

``` javascript
var argmin = require( 'compute-argmin' );
```

#### argmin( arr )

Computes the minimum value of a numeric `array` and returns the corresponding `array` indices.

``` javascript
var data = [ 3, 2, 5, 2, 10 ];

var idx = argmin( data );
// returns [1,3]
```


## Examples

``` javascript
var argmin = require( 'compute-argmin' );

// Simulate some data...
var data = new Array( 100 );
for ( var i = 0; i < data.length; i++ ) {
	data[ i ] = Math.round( Math.random()*100 );
}
var idx = argmin( data );
console.log( idx );
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


## Tests

### Unit

Unit tests use the [Mocha](http://visionmedia.github.io/mocha) test framework with [Chai](http://chaijs.com) assertions. To run the tests, execute the following command in the top-level application directory:

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


## License

[MIT license](http://opensource.org/licenses/MIT). 


---
## Copyright

Copyright &copy; 2014. Athan Reines.


[npm-image]: http://img.shields.io/npm/v/compute-argmin.svg
[npm-url]: https://npmjs.org/package/compute-argmin

[travis-image]: http://img.shields.io/travis/compute-io/argmin/master.svg
[travis-url]: https://travis-ci.org/compute-io/argmin

[coveralls-image]: https://img.shields.io/coveralls/compute-io/argmin/master.svg
[coveralls-url]: https://coveralls.io/r/compute-io/argmin?branch=master

[dependencies-image]: http://img.shields.io/david/compute-io/argmin.svg
[dependencies-url]: https://david-dm.org/compute-io/argmin

[dev-dependencies-image]: http://img.shields.io/david/dev/compute-io/argmin.svg
[dev-dependencies-url]: https://david-dm.org/dev/compute-io/argmin

[github-issues-image]: http://img.shields.io/github/issues/compute-io/argmin.svg
[github-issues-url]: https://github.com/compute-io/argmin/issues

argmin
===
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][coveralls-image]][coveralls-url] [![Dependencies][dependencies-image]][dependencies-url]

> Returns the array indices corresponding to the minimum value of an input array.


## Installation

``` bash
$ npm install compute-argmin
```

For use in the browser, use [browserify](https://github.com/substack/node-browserify).


## Usage

``` javascript
var argmin = require( 'compute-argmin' );
```

#### argmin( x[, options] )

Returns the indices corresponding to the minimum value of input `x`.`x` may be either an [`array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array), [`typed array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays), or [`matrix`](https://github.com/dstructs/matrix).

``` javascript
var data, idx;

data = [ 2, 4, 8, 3, 8, 2 ];
idx = argmin( data );
// returns [ 0, 5 ]

data = new Int8Array( data );
idx = argmin( data );
// returns [ 0, 5 ]
```

For non-numeric `arrays`, provide an accessor `function` for accessing numeric values

``` javascript
var arr = [
	{'x':3},
	{'x':2},
	{'x':5},
	{'x':4},
	{'x':4},
	{'x':5}
];

function getValue( d ) {
	return d.x;
}

var val = argmax( arr, getValue );
// returns [ 1 ]
```
__Note__: if provided an empty `array`, the function returns `null`.

If provided a [`matrix`](https://github.com/dstructs/matrix), the function accepts the following `option`:

*	__dim__: dimension along which to compute the minimum. Default: `2` (along the columns).

By default, the function computes the minimum value along the columns (`dim=2`).

``` javascript
var matrix = require( 'dstructs-matrix' ),
	data,
	mat,
	idx,
	i;

data = new Int8Array( [ 1, 2, 3, 6, 5, 4, 7, 9, 8 ] );
mat = matrix( data, [3,3], 'int8' );
/*
	[  1 2 3
	   6 5 4
	   7 9 8 ]
*/

idx = argmin( mat );
/*
	[ [ 0 ],
	  [ 2 ],
	  [ 0 ] ]
*/
```

To compute the minimum along the rows, set the `dim` option to `1`.

``` javascript
idx = argmin( mat, {
	'dim': 1
});
/*
	[ [ 0 ],
	  [ 0 ],
	  [ 0 ] ]
*/
```

## Examples

``` javascript
'use strict';

var matrix = require( 'dstructs-matrix' ),
	argmin = require( 'compute-argmin' ),
	util = require( 'util' );

var data,
	mat,
	idx,
	i;

// ----
// Plain arrays...
var data = new Array( 100 );
for ( var i = 0; i < data.length; i++ ) {
	data[ i ] = Math.random() * 100;
}
idx = argmin( data );
console.log( 'Arrays: %d\n', idx );


// ----
// Object arrays (accessors)...
function getValue( d ) {
	return d.x;
}
for ( i = 0; i < data.length; i++ ) {
	data[ i ] = {
		'x': data[ i ]
	};
}
idx = argmin( data, {
	'accessor': getValue
});
console.log( 'Accessors: %d\n', idx );


// ----
// Typed arrays...
data = new Int32Array( 1000 );
for ( i = 0; i < data.length; i++ ) {
	data[ i ] = Math.round( Math.random() * 100 );
}
idx = argmin( data );
console.log( 'Typed Arrays: \n' );
console.log( util.inspect( idx ) );

// ----
// Matrices (along rows)...
mat = matrix( data, [20,50], 'int32' );
idx = argmin( mat, {
	'dim': 1
});
console.log( 'Matrix (rows): \n' );
console.log( util.inspect( idx ) );

// ----
// Matrices (along columns)...
idx = argmin( mat, {
	'dim': 2
});
console.log( 'Matrix (columns): \n');
console.log( util.inspect( idx ) );

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

Copyright &copy; 2014-2015. The Compute.io Authors.


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

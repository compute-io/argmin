'use strict';

// MODULES //

var isArrayLike = require( 'validate.io-array-like' ),
	isMatrixLike = require( 'validate.io-matrix-like' ),
	validate = require( './validate.js' );


// FUNCTIONS //

var argmin1 = require( './array.js' ),
	argmin2 = require( './accessor.js' ),
	argmin3 = require( './matrix.js' );

// ARG MIN //

/**
* FUNCTION: argmin( x[, options] )
*	Computes the minimum value of elements in x and returns the corresponding array indices.
*
* @param {Number[]|Array|Int8Array|Uint8Array|Uint8ClampedArray|Int16Array|Uint16Array|Int32Array|Uint32Array|Float32Array|Float64Array|Matrix} x - input value
* @param {Object} [opts] - function options
* @param {Function} [opts.accessor] - accessor function for accessing array values
* @param {Number} [opts.dim=2] - dimension along which to compute the minimum
* @returns {Number[]|Array|Null} minimum value indices or null
*/
function argmin( x, options ) {

	/* jshint newcap:false */
	var opts = {},
		shape,
		err,
		len,
		dim,
		idx;

	if ( arguments.length > 1 ) {
		err = validate( opts, options );
		if ( err ) {
			throw err;
		}
	}
	if ( isMatrixLike( x ) ) {

		dim = opts.dim;
		if ( dim > 2 ) {
			throw new RangeError( 'argmin()::invalid option. Dimension option exceeds number of matrix dimensions. Option: `' + dim + '`.' );
		}

		// Determine if provided a vector...
		if ( x.shape[ 0 ] === 1 || x.shape[ 1 ] === 1 ) {
			// Treat as an array-like object:
			return argmin1( x.data );
		}
		if ( dim === void 0 || dim === 2 ) {
			len = x.shape[ 0 ];
			shape = [ len, 1 ];
		} else {
			len = x.shape[ 1 ];
			shape = [ 1, len ];
		}
		idx = [];
		return argmin3( idx, x, dim );
	}

	if ( isArrayLike( x ) ) {
		if ( opts.accessor ) {
			return argmin2( x, opts.accessor );
		}
		return argmin1( x );
	}
	throw new TypeError( 'argmin()::invalid input argument. First argument must be either an array or a matrix. Value: `' + x + '`.' );
} // end FUNCTION argmin()


// EXPORTS //

module.exports = argmin;

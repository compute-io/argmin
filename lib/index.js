'use strict';

// MODULES //

var isArray = require( 'validate.io-array' ),
	isFunction = require( 'validate.io-function' );


// ARGMIN //

/**
* FUNCTION: argmin( arr[, accessor] )
*	Returns the array indices corresponding to the minimum value of an input array.
*
* @param {Number[]|Array} arr - input array
* @param {Function} [accessor] - accessor function for accessing array vaues
* @returns {Number[]|Null} minimum value indices
*/
function argmin( arr, clbk ) {
	var len,
		min,
		idx,
		v, i;
	if ( !isArray( arr ) ) {
		throw new TypeError( 'argmin()::invalid input argument. Must provide an array. Value: `' + arr + '`.' );
	}
	if ( arguments.length > 1 && !isFunction( clbk ) ) {
		throw new TypeError( 'argmin()::invalid input argument. Accessor must be a function. Value: `' + clbk + '`.' );
	}
	len = arr.length;
	if ( !len ) {
		return null;
	}
	if ( clbk ) {
		min = clbk( arr[ 0 ], 0 );
		idx = [ 0 ];
		for ( i = 1; i < len; i++ ) {
			v = clbk( arr[ i ], i );
			if ( v < min ) {
				min = v;
				idx.length = 0;
				idx.push( i );
			}
			else if ( v === min ) {
				idx.push( i );
			}
		}
	} else {
		min = arr[ 0 ];
		idx = [ 0 ];
		for ( i = 1; i < len; i++ ) {
			v = arr[ i ];
			if ( v < min ) {
				min = v;
				idx.length = 0;
				idx.push( i );
			}
			else if ( v === min ) {
				idx.push( i );
			}
		}
	}
	return idx;
} // end FUNCTION argmin()


// EXPORTS //

module.exports = argmin;

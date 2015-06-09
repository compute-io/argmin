'use strict';

/**
* FUNCTION: argmin( arr, clbk )
*	Computes the minimum value of an array using an accessor and returns the corresponding array indices.
*
* @param {Array} arr - input array
* @param {Function} [accessor] - accessor function for accessing array values
* @returns {Number[]|Null} minimum value indices
*/
function argmin( arr, clbk ) {
	var len = arr.length,
		min,
		i, v,
		idx;

	if ( !len ) {
		return null;
	}

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

	return idx;
} // end FUNCTION argmin()


// EXPORTS //

module.exports = argmin;

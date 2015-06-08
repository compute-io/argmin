'use strict';

/**
* FUNCTION: argmin( arr )
*	Computes the minimum value of an array and returns the corresponding array indices.
*
* @param {Number[]|Int8Array|Uint8Array|Uint8ClampedArray|Int16Array|Uint16Array|Int32Array|Uint32Array|Float32Array|Float64Array} arr - input array
* @returns {Number[]|Null} minimum value indices
*/
function argmin( arr ) {
	var len = arr.length,
		min,
		i, v,
		idx;

	if ( !len ) {
		return null;
	}
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
	return idx;
} // end FUNCTION argmin()


// EXPORTS //

module.exports = argmin;

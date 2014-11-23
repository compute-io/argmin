/**
*
*	COMPUTE: argmin
*
*
*	DESCRIPTION:
*		- Computes the minimum value of a numeric array and returns the corresponding array indices.
*
*
*	NOTES:
*		[1]
*
*
*	TODO:
*		[1]
*
*
*	LICENSE:
*		MIT
*
*	Copyright (c) 2014. Athan Reines.
*
*
*	AUTHOR:
*		Athan Reines. kgryte@gmail.com. 2014.
*
*/

'use strict';

/**
* FUNCTION: argmin( arr )
*	Computes the minimum value of a numeric array and returns the corresponding array indices.
*
* @param {Array} arr - array of values
* @returns {Array} array indices
*/
function argmin( arr ) {
	if ( !Array.isArray( arr ) ) {
		throw new TypeError( 'argmin()::invalid input argument. Must provide an array.' );
	}
	var len = arr.length,
		min = arr[ 0 ],
		idx = [ 0 ],
		val;

	for ( var i = 1; i < len; i++ ) {
		val = arr[ i ];
		if ( val < min ) {
			min = val;
			idx.length = 0;
			idx.push( i );
		}
		else if ( val === min ) {
			idx.push( i );
		}
	}
	return idx;
} // end FUNCTION argmin()


// EXPORTS //

module.exports = argmin;

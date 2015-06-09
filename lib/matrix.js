'use strict';

/**
* FUNCTION: argmin( out, mat[, dim] )
*	Computes the minimum value along a matrix dimension and return the corresponding indices.
*
* @param {Array} idx - output array
* @param {Matrix} mat - input matrix
* @param {Number} [dim=2] - matrix dimension along which to compute the arg min. If `dim=1`, compute along matrix rows. If `dim=2`, compute along matrix columns.
* @returns {Array|Null} arrays of minimum value indices or null
*/
function argmin( idx, mat, dim ) {
	var min,
		v,
		M, N,
		s0, s1,
		o,
		i, j, k;

	if ( dim === 1 ) {
		// Compute along the rows...
		M = mat.shape[ 1 ];
		N = mat.shape[ 0 ];
		s0 = mat.strides[ 1 ];
		s1 = mat.strides[ 0 ];
	} else {
		// Compute along the columns...
		M = mat.shape[ 0 ];
		N = mat.shape[ 1 ];
		s0 = mat.strides[ 0 ];
		s1 = mat.strides[ 1 ];
	}
	if ( M === 0 || N === 0 ) {
		return null;
	}
	o = mat.offset;
	idx = new Array( M );
	for ( i = 0; i < M; i++ ) {
		k = o + i*s0;
		min = mat.data[ k ];
		idx[ i ] = [ 0 ];
		for ( j = 1; j < N; j++ ) {
			v = mat.data[ k + j*s1 ];
			if ( v < min ) {
				min = v;
				idx[ i ].length = 0;
				idx[ i ].push( j );
			}
			else if ( v === min ) {
				idx[ i ].push( j );
			}
		}
	}
	return idx;
} // end FUNCTION argmin()


// EXPORTS //

module.exports = argmin;

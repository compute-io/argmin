'use strict';

// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Module to be tested:
	argmin = require( './../lib' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'compute-argmin', function tests() {

	it( 'should export a function', function test() {
		expect( argmin ).to.be.a( 'function' );
	});

	it( 'should throw an error if provided a non-array', function test() {
		var values = [
			'5',
			5,
			true,
			undefined,
			null,
			NaN,
			function(){},
			{}
		];

		for ( var i = 0; i < values.length; i++ ) {
			expect( badValue( values[i] ) ).to.throw( TypeError );
		}
		function badValue( value ) {
			return function() {
				argmin( value );
			};
		}
	});

	it( 'should compute the minimum value and return the corresponding indices', function test() {
		var data, expected, actual;

		data = [ 4, 2, 5, 3, 8, 2 ];
		expected = [ 1, 5 ];
		actual = argmin( data );

		assert.deepEqual( actual, expected );
	});

});

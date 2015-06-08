/* global describe, it, require */
'use strict';

// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Module to be tested:
	argmin = require( './../lib/array.js' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'array arg minimum', function tests() {

	it( 'should export a function', function test() {
		expect( argmin ).to.be.a( 'function' );
	});

	it( 'should compute the minimum and return the corresponding indices', function test() {
		var data, expected;

		data = [ 3, 2, 5, 3, 8, 2 ];
		expected = [ 1, 5 ];

		assert.deepEqual( argmin( data ), expected );
	});

	it( 'should return null if provided an empty array', function test() {
		assert.isNull( argmin( [] ) );
	});

});

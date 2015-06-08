/* global describe, it, require */
'use strict';

// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Module to be tested:
	argmin = require( './../lib/accessor.js' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'accessor arg minimum', function tests() {

	it( 'should export a function', function test() {
		expect( argmin ).to.be.a( 'function' );
	});

	it( 'should compute the minimum and return the corresponding indices using an accessor', function test() {
		var data, expected;

		data = [
			{'x':3},
			{'x':2},
			{'x':5},
			{'x':3},
			{'x':8},
			{'x':2}
		];
		expected = [ 1, 5 ];

		assert.deepEqual( argmin( data, getValue ), expected );

		function getValue( d ) {
			return d.x;
		}
	});

	it( 'should return null if provided an empty array', function test() {
		assert.isNull( argmin( [], getValue ) );

		function getValue( d ) {
			return d.x;
		}
	});

});

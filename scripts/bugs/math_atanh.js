'use strict';

if ( typeof Math.atanh !== 'function' ) {
	console.log( 'Math.atanh is not supported.' );
	return;
}

var x = 1.0e-10;
var actual = Math.atanh( x );
var expected = 1.0e-10;

// See https://bugs.chromium.org/p/v8/issues/detail?id=3511.
console.log( 'Math.atanh(%d) = %d. Expected: %d.', x, actual, expected );

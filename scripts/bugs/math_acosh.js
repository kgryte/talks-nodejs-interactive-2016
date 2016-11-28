'use strict';

if ( typeof Math.acosh !== 'function' ) {
	console.log( 'Math.acosh is not supported.' );
	return;
}

var x = 1.0 + 1.0e-10;
var actual = Math.acosh( x );
var expected = 0.000014142136208675862;

// See https://bugs.chromium.org/p/v8/issues/detail?id=3511.
console.log( 'Math.acosh(%d) = %d. Expected: %d.', x, actual, expected );

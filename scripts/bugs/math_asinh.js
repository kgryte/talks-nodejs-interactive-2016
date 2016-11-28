'use strict';

if ( typeof Math.asinh !== 'function' ) {
	console.log( 'Math.asinh is not supported.' );
	return;
}

var x = 1.0e-50;
var actual = Math.asinh( x );
var expected = 1.0e-50;

// See https://bugs.chromium.org/p/v8/issues/detail?id=3496.
console.log( 'Math.asinh(%d) = %d. Expected: %d.', x, actual, expected );

x = 1.0e200;
actual = Math.asinh( x );
expected = 461.2101657793691;

console.log( 'Math.asinh(%d) = %d. Expected: %d.', x, actual, expected );

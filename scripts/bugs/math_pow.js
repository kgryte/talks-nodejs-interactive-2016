'use strict';

var x = 10;
var y = 308;
var actual = Math.pow( x, y );
var expected = 1e308;

console.log( 'pow(%d,%d) = %d. Expected: %d.', x, y, actual, expected );

actual = pow( x, y );
console.log( 'pow(%d,%d) = %d. Expected: %d.', x, y, actual, expected );

// See https://bugs.chromium.org/p/v8/issues/detail?id=3599
function pow( x, y ) {
	var m = x;
	var n = y;
	var p = 1;
    while ( n !== 0 ) {
		if ( ( n & 1 ) !== 0 ) {
			p *= m;
		}
		m *= m;
		if ( ( n & 2 ) !== 0 ) {
			p *= m;
		}
		m *= m;
		n >>= 2;
    }
    return p;
}

'use strict';

var x = Math.pow( 2, 120 );
var actual = Math.sin( x );
var expected = 0.377820109360752;

// See also https://bugs.chromium.org/p/v8/issues/detail?id=3089.
console.log( 'Math.sin(%d) = %d. Expected: %d.', x, actual, expected );

actual = Math.cos( x );
expected = -0.9258790228548378;

// See also https://bugs.chromium.org/p/v8/issues/detail?id=3006.
console.log( 'Math.cos(%d) = %d. Expected: %d.', x, actual, expected );

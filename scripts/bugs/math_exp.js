'use strict';

var x = 100.0;
var actual = Math.exp( x );
var expected = 2.6881171418161356e+43;

// See https://bugs.chromium.org/p/v8/issues/detail?id=3468.
console.log( 'Math.exp(%d) = %d. Expected: %d.', x, actual, expected );

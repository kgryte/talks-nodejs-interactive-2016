'use strict';

var nan1 = 0.0 / 0.0;
var nan2 = Number.POSITIVE_INFINITY / Number.POSITIVE_INFINITY;

var arr = [ nan1, nan2 ];
var FLOAT64_VIEW = new Float64Array( arr );
var INT32_VIEW = new Int32Array( FLOAT64_VIEW.buffer );

var isnan1 = ( FLOAT64_VIEW[0] !== FLOAT64_VIEW[0] );
console.log( 'isNaN( 0/0 ) => %s', isnan1 );

var isnan2 = ( FLOAT64_VIEW[1] !== FLOAT64_VIEW[1] );
console.log( 'isNaN( inf/inf ) => %s', isnan2 );

var bool = ( nan1 !== nan2 );
console.log( '0/0 !== inf/inf => %s', bool );

var int11 = INT32_VIEW[ 0 ];
var int12 = INT32_VIEW[ 1 ];
var int21 = INT32_VIEW[ 2 ];
var int22 = INT32_VIEW[ 3 ];

console.log( '%d|%d and %d|%d', int11, int12, int21, int22 );

'use strict';

var isUint8ClampedArray = require( './../lib' );

console.log( isUint8ClampedArray( new Uint8ClampedArray( 10 ) ) );
// returns true

console.log( isUint8ClampedArray( new Int8Array( 10 ) ) );
// returns false

console.log( isUint8ClampedArray( new Uint8Array( 10 ) ) );
// returns false

console.log( isUint8ClampedArray( new Int16Array( 10 ) ) );
// returns false

console.log( isUint8ClampedArray( new Uint16Array( 10 ) ) );
// returns false

console.log( isUint8ClampedArray( new Int32Array( 10 ) ) );
// returns false

console.log( isUint8ClampedArray( new Uint32Array( 10 ) ) );
// returns false

console.log( isUint8ClampedArray( new Float32Array( 10 ) ) );
// returns false

console.log( isUint8ClampedArray( new Float64Array( 10 ) ) );
// returns false

console.log( isUint8ClampedArray( new Array( 10 ) ) );
// returns false

console.log( isUint8ClampedArray( {} ) );
// returns false

console.log( isUint8ClampedArray( null ) );
// returns false

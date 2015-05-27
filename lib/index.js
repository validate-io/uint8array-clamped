'use strict';

// FUNCTIONS //

var isStr = Object.prototype.toString;


// IS UINT8CLAMPED ARRAY //

/**
* FUNCTION: isUint8ClampedArray( value )
*	Validates if a value is an Uint8ClampedArray.
*
* @param {*} value - value to validate
* @returns {Boolean} boolean indicating if a value is an Uint8ClampedArray
*/
function isUint8ClampedArray( value ) {
	return isStr.call( value ) === '[object Uint8ClampedArray]';
} // end FUNCTION isUint8ClampedArray()


// EXPORTS //

module.exports = isUint8ClampedArray;

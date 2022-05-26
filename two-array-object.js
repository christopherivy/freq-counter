// add whatever parameters you deem necessary
function twoArrayObject (keys, values) {
	return keys.reduce((obj, current, index) => { // get the keys in the array
		// console.log(keys);
		obj[ current ] = index < values.length ? values[ index ] : null; // not clear on this entirely
		return obj;
	}, {});
}

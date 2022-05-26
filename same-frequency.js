// add whatever parameters you deem necessary
function sameFrequency (num1, num2) {
	// first see if the inputs are the same length
	// if not the same length return
	// take the frequency of the strings and count them
	// if the count is equal then return


	let str1 = num1.toString();
	let str2 = num2.toString();
	if(str1.length !== str2.length) return false;

	// count the frequencies
	let count1 = {};
	let count2 = {};


	for(let i = 0; i < str1.length; i++) { // loop over the count1
		count1[ str1[ i ] ] = (count1[ str1[ i ] ] || 0) + 1; // add to the object
	}

	for(let j = 0; j < str2.length; j++) { // loop over the count2
		count2[ str2[ j ] ] = (count2[ str2[ j ] ] || 0) + 1;  // add to the object
	}

	for(let key in count1) {
		if(count1[ key ] !== count2[ key ]) return false;
	}
	return true;

}

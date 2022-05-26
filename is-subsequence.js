// add whatever parameters you deem necessary
function isSubsequence (str1, str2) {
	let str1Index = 0;
	let str2Index = 0;

	if(!str1 || !str2) return true; // if there is no str provided, return true

	// as long as the index of str2 is less than the total length of str2
	// we know we are not at the end
	while(str2Index < str2.length) {
		// if the char at str2 index === to char at str1 index
		if(str2[ str2Index ] === str1[ str1Index ]) {
			// str1 index move fwd 1
			str1Index += 1;
			// if the final str1 index === to the length of str1 itself
			if(str1Index === str1.length) return true;
		}
		// otherwise move to the next str1 index
		str2Index += 1;
	}

	return false;
}

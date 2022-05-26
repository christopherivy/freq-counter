// add whatever parameters you deem necessary
function averagePair (arr, target) {
	let begin = 0;
	let end = arr.length - 1;

	while(begin < end) { // while left less than right
		let average = (arr[ begin ] + arr[ end ]) / 2; // (0+5) / 2.5
		// console.log("target:", target, arr[ begin ] + arr[ end ], '/', average);

		if(average === target) { // if average === 2.5 => true
			return true;
		} else if(average < target) { // if average less than 2.5
			begin++; //move being index 1 to the right
		} else {
			end--; // move end index 1 to the left
		}
	}
	return false;
}

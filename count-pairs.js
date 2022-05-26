// add whatever parameters you deem necessary
function countPairs (arr, num) {

	arr.sort((a, b) => a - b); // sort the array in ascending order

	let count = 0;
	let start = 0;
	let end = arr.length - 1;


	while(start < end) {
		let sum = arr[ start ] + arr[ end ]; // adding the first val in arr to the last

		// if sum === to num, increment count as a pair. 
		// start goes up 1, and end goes down 1(not sure why end goes down 1)
		if(sum === num) {
			count++;
			start++;
			end--;
		} else if(sum < num) {
			start++;
		} else {
			end--;
		}
	}

	start = arr[ start ];
	end = arr[ end ];

	// console.log(start);

	// console.log('num:', num, "x:", x, start, '+', end, '=', start + end);

	return count; //return total of the counts
}

console.log(countPairs([ 10, 4, 8, 2, 6, 0 ], 10));
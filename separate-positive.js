// add whatever parameters you deem necessary
function separatePositive (nums) {

	let start = 0;
	let end = nums.length - 1;


	while(start < end) { // loop thru the array

		if(nums[ start ] < 0 && nums[ end ] > 0) {

			let holder = nums[ start ];
			nums[ start ] = nums[ end ];
			nums[ end ] = holder;

			start += 1;
			end -= 1;
		} else {
			if(nums[ start ] > 0) start += 1;
			else end -= 1;
		}
	}
	return nums;
}

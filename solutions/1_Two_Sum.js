/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // Creating the hash map for the memoization.
    let map = {};

    // Iterating through the loop.
    for (let index = 0; index < nums.length; index++) {

        //Getting the element.
        const element = nums[index]

        // Checking whether the key is present in the hash map.
        if (target - element in map) {

            // Return if the sum adds up to the target.
            return [index, map[target - element]];
        }

        // Else store the element and key in the hash map.
        else map[element] = index;
    }
};

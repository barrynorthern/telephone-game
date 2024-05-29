/**
 * Finds the majority element in an array.
 * A majority element is an element that appears more than n / 2 times where n is the length of the array.
 *
 * @param {number[]} nums - The array of numbers.
 * @returns {number|null} - The majority element, or null if there is no majority.
 */
export default function function2(nums) {
  let count = 0;
  let candidate = null;

  for (let num of nums) {
    if (count === 0) {
      candidate = num;
    }
    count += num === candidate ? 1 : -1;
  }

  count = 0;
  for (let num of nums) {
    if (num === candidate) {
      count++;
    }
  }

  return count > Math.floor(nums.length / 2) ? candidate : null;
}

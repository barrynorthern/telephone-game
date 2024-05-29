function findMajorityElement(nums) {
  let countMap = {};
  let majorityThreshold = nums.length / 2;

  for (let num of nums) {
    if (!countMap[num]) {
      countMap[num] = 1;
    } else {
      countMap[num]++;
    }

    if (countMap[num] > majorityThreshold) {
      return num;
    }
  }

  return null;
}

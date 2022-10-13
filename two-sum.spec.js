var twoSum = function (nums, target) {
  const indeces = new Map();

  for (let index = 0; index < nums.length; index++) {
    const complement = target - nums[index];
    if (indeces.has(complement)) {
      return [indeces.get(complement), index];
    }
    indeces.set(nums[index], index);
  }
};

describe("Two Sum", () => {
  it("First two numbers achieve target", () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
  });
  it("Last two numbers achieve target", () => {
    console.log(twoSum([3, 2, 4], 6));
    expect(twoSum([3, 2, 4], 6)).toEqual([1, 2]);
  });
  it("Only two numbers first two numbers", () => {
    expect(twoSum([3, 3], 6)).toEqual([0, 1]);
    expect(twoSum([3, 3, 1], 6)).toEqual([0, 1]);
    expect(twoSum([3, 3, 3], 6)).toEqual([0, 1]);
  });
});

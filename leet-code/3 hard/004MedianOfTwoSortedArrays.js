var findMedianSortedArrays = function (nums1, nums2) {
  let nums = nums1.concat(nums2).sort((a, b) => a - b)
  let mid = Math.ceil(nums.length / 2) - 1
  if (nums.length % 2 !== 0) {
    return nums[mid]
  } else {
    return (nums[mid] + nums[mid + 1]) / 2
  }
};

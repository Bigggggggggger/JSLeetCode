/*
 * 思路：双指针法
 * 先排序，然后用双指针不断向中间收缩
 */
var threeSumClosest = function(nums, target) {
    // 如果数组长度小于3直接返回
    if(nums.length < 3) return null;
    // 先排序
    nums.sort((a,b)=>a-b);
    let ans = nums[0] + nums[1] + nums[nums.length - 1];
    for(let i=1;i<nums.length-1;i++) {
        let start = 0, end = nums.length - 1;
        while(start<i && i<end) {
            const sum = nums[i] + nums[start] + nums[end];
            if (ans === target) {
                return ans;
            } else if (sum > target) {
                while(nums[end] === nums[--end]){}
            } else {
                while(nums[start] === nums[++start]){}
            }
            // 取与target最接近的值
            if (Math.abs(target - sum) < Math.abs(target - ans)) {
                ans = sum;
            }
        }
    }
    return ans;
};


// 测试
threeSumClosest([1,2,4,8,16,32,64,128], 82); // 82
threeSumClosest([-1, 2, 1, -4], 1); // 2

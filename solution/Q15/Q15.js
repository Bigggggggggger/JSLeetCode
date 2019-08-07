/*
* 这题如果使用暴力法，则时间复杂度会达到O(n3)，效率过低
*/
var threeSum = function(nums) {
    let res = [];
    let length = nums.length;
    nums.sort((a, b) => a - b);
    if (nums[0] <= 0 && nums[length - 1] >= 0) { // 整个数组同符号，则无解
        for (let i = 0; i < length - 2;) {
            if (nums[i] > 0) break; // 最左值为正数则一定无解
            let first = i + 1;
            let last = length - 1;
            do {
                if (first >= last || nums[i] * nums[last] > 0) break; // 三个数同符号，则退出
                let result = nums[i] + nums[first] + nums[last];
                if (result === 0) {
                    res.push([nums[i], nums[first], nums[last]])
                }
                if (result <= 0 ) {
                    while (first < last && nums[first] === nums[++first]) {} // 如果相等就跳过
                } else {
                    while (first < last && nums[last] === nums[--last]) {}
                }
            } while (first < last);
            while (nums[i] === nums[++i]) {}
        }
    }
    return res
};

// 测试
threeSum([-1,0,1,2,-1,-4]); // [[-1,-1,2],[-1,0,1]]


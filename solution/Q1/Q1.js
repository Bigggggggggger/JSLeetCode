/**
 * 自己的解法
 * 暴力法：二次遍历数组，寻找适合的数字返回
 */
// var twoSum = function(nums, target) {
//     for(var i=0,len=nums.length;i<len;i++){
//         for(var j=i+1;j<len;j++){
//             if(nums[i]+nums[j]===target) return [i,j];
//         }
//     }
// };

/**
 * 改进之后的解法
 * 二次哈希法：
 * 遍历数组，将期望的值与对应的索引储存起来。
 * 再次遍历数组，如果遇到符合期望的值在哈希表之中，切该值不为其本身，则返回对应的索引
 */
// var twoSum = function(nums, target) {
//     let res = {};
//     for (let i = 0; i < nums.length; i++) {
//         res[nums[i]] = i;
//     }
//     for (let i = 0; i < nums.length; i++) {
//         let con = target - nums[i];
//         if (res[con] !== undefined && res[con] !== i)
//             return [i,res[con]];
//     }
// };

/**
 * 再次改进之后的解法
 * 一次哈希法：
 * 遍历生成索引表时，如果遇到了期望值存在于索引表中时，则直接返回，不继续遍历下去了；
 */
var twoSum = function(nums, target) {
    let res = {};
    for (let i=0,len=nums.length;i<len;i++) {
        let con = target - nums[i];
        if (res[con] === undefined) {
            res[nums[i]] = i;
        } else {
            return [res[con],i];
        }
    }
};


// 测试
twoSum([2,7,11,15], 9); // [0,1]

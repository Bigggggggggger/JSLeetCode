// 找到的解法
// var longestCommonPrefix = function (strs) {
//     let ans = strs.length > 0 ? strs[0] : ""
//     for (let i = 1; i < strs.length; i++) {
//         if (!strs[i].startsWith(ans)) {
//             for (let j = 0; j < ans.length; j++) {
//                 if (ans[j] != strs[i][j]) {
//                     ans = ans.slice(0, j)
//                 }
//             }
//         }
//     }
//     return ans
// };

/*
思路：
横向遍历数组，最长公共前缀一定是数组成员两两之间最短的公共前缀
 */

// 自己的解法
var longestCommonPrefix = function (arr) {
    let ans = arr.length > 0 ? arr[0] : '';
    for (let item of arr) {
        if(item.startsWith(ans)) continue;
        let i = 0;
        while (item[i] === ans[i]) i++;
        ans = ans.slice(0,i);
    }
    return ans;
};

// 测试
longestCommonPrefix(["flower","flow","flight"]); // 'fl'
longestCommonPrefix(["dog","racecar","car"]); // ''
longestCommonPrefix(["aa","a"]); // 'a'

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

// 自己的解法

/*
横向扫描法
思路：
横向遍历数组，最长公共前缀一定是数组成员两两之间最短的公共前缀
 */
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

/*
纵向对比法
思路：
每次取数组中每个元素的第i项，如果其中有不相等第情况，则直接跳出循环，返回i即为最大公共前缀的长度
 */
var longestCommonPrefix1 = function (arr) {
    if (arr.length === 0) return '';
    let ans = arr[0],
        len = Math.min.apply(Math, arr.map((e)=>{return e.length})),
        i = 0,
        flag = true;
    while (i<len && flag){
        let para = ans[i], j=1;
        while (j<arr.length && flag) {
            if (arr[j][i] !== para) flag = false;
            j++;
        }
        if (flag) i++;
    }
    return ans.slice(0,i);
};

// 测试
longestCommonPrefix(["flower","flow","flight"]); // 'fl'
longestCommonPrefix(["dog","racecar","car"]); // ''
longestCommonPrefix(["aa","a"]); // 'a'

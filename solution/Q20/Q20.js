/*
* 这道题利用了 栈 的数据结构，通过 栈 后进先出的特性完成了算法
*/
var isValid = function(s) {
    // 如果为空直接返回真
    if(s === '') return true;

    let head = s[0], len = s.length;
    // 如果输入字符串长度为奇数，或者字符串以 '}', ']', ')' 开头，则直接返回假
    if(len % 2 !== 0 || ['}', ']', ')'].indexOf(head) !== -1) return false;

    // 初始化栈，放入 s 第一个字符
    let stack = [head];
    // 初始化哈希表，便于后续查找
    const MAP = {
        '{': '}',
        '[': ']',
        '(': ')',
    };

    for(let i=1;i<len;i++) {
        let top = stack[stack.length-1], current = s[i];
        // 遍历字符串，如果遇到能相匹配的括号，则出栈。否则，将当前字符入栈。最后判断栈的长度，如果为0，则说明完全匹配。
        if(MAP[top] === current){
            stack.pop();
        } else {
            stack.push(current)
        }
    }
    return stack.length === 0
};

// 测试
isValid('{}()[]'); // true
isValid('({})[]'); // true
isValid('{]'); // false

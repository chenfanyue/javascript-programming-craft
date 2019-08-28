// 类数组对象转换为数组
let arr = Array.prototype.slice.call(arrayLikeObject);

// 语句
if (expression) {
  value = x;
}
value = y;
// 表达式
value = expression ? x : y

/* 短路赋值的各种应用 */
// fallback赋值，最想要的放在前面，兜底值放在最后
value = best || better || fallback;
// N个条件任意一个满足即可
fulfilled = condition1 || condition2 || conditionN;
// 只有满足前面的若干条件，才能拿到想要的值
value = condition1 && condition2 && wantedValue;
// 只要有一个条件不满足就失败
failed = condition1 && condition2 && conditionN;

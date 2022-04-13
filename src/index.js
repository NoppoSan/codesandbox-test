/**
 * const, let等の変数宣言
 */
//const sayHello = (name = "ゲスト", num = 1) =>
//  console.log(`${num}: こんにちは！${name}さん!`);
//sayHello();

/**
 *  スプレッド構文 ...
 */
// 配列の展開
/* const arr1 = [1, 2, 3];
//console.log(arr1);
//console.log(...arr1);

const sumFunc = (num1, num2, num3) => console.log(num1 + num2 + num3);
sumFunc(arr1[0], arr1[1], arr1[2]);
sumFunc(...arr1); */

// まとめる
/* const arr2 = [1, 2, 3, 4, 5];
const [num1, num2, ...arr3] = arr2;
console.log(num1);
console.log(num2);
console.log(arr3); */

// 配列のコピー、結合
const arr4 = [10, 20];
const arr5 = [30, 40];

const arr6 = [...arr4];
console.log(arr6);

const arr7 = [...arr4, ...arr5];
console.log(arr7);

const arr8 = arr4;
console.log(arr8);
arr8[0] = 100;
console.log(arr8); // 参照渡しによってarr4の値も変わる

/**
 * * ES6から導入されたアロー関数を使えば、よりシンプルに関数が定義できます
 */

// 定数greetにアロー関数を代入してください
const greet = () => {
  console.log('こんにちは！');
}

// 定数greetを呼び出してください
greet();

const number1 = 103;
const number2 = 72;
const number3 = 189;

// getMax関数を定義してください
const getMax = (a, b, c) => {
  let max = a;

  if (b > max) {
    return max = b;
  } else if (c > max) {
    return max = c;
  } else {
    return max;
  }
}

// 「最大値は○○です」と出力してください
console.log(`最大値は${getMax(number1, number2, number3)}です`);
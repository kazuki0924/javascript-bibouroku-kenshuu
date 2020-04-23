/**
 * * ある他の関数に引数として渡される関数をコールバック関数といいます。
 * 関数は、関数名の後ろに()をつけると呼び出され、()をつけなければ関数そのものを指します。
 * コールバック関数を渡すときは()をつけません。
 * 関数を直接引数の中で定義することもできます。
 * コールバック関数では、普通の関数と同じように引数を渡すことができます。
 * ２つ以上の引数を渡すこともできます。
 * コールバック関数の引数と、実行時に渡す引数の数をそろえるように気をつけましょう。
 */

const printWanko = () => {
  console.log("にんじゃわんこ");
};

const printHitsuji = () => {
  console.log("ひつじ仙人");
};

const call = (callback) => {
  console.log("コールバック関数を呼び出します。");
  callback();
};

// 引数をprintHitsujiに書き換えて出力を確認しましょう
call(printHitsuji);

/* -------------------------------------------------------------------------- */

const printWanko = () => {
  console.log("にんじゃわんこ");
};

// 関数callにcallbackという名前の引数を追加してください
const call = (callback) => {
  console.log("コールバック関数を呼び出します。");
  // 引数に渡したcallbackを呼び出してください
  callback();
};

// 関数printWankoを引数に渡して関数callを実行してください
call(printWanko);

/* -------------------------------------------------------------------------- */

const printWanko = () => {
  console.log("にんじゃわんこ");
};

const call = (callback) => {
  console.log("コールバック関数を呼び出します。");
  callback();
};

call(printWanko);

// 引数で関数を定義して渡してください
call(() => {
  console.log("ひつじ仙人");
});

/* -------------------------------------------------------------------------- */

const call = (callback) => {
  callback("にんじゃわんこ", 14);
};

// 関数callの引数の中で2つの引数を取る関数を追加してください
call((name, age) => {
  console.log(`${name}は${age}歳です。`);
});

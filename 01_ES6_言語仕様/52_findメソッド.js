/**
 * * findメソッドはコールバック関数の処理部分に記述した条件式に合う1つ目の要素を配列の中から取り出すメソッドです。
 * 配列の要素が1つずつ引数に代入されて処理が進みます。
 * コールバック関数の中は { return 条件 } と書くことで、条件に合う要素が戻り値となります
 * findメソッドは条件に合う要素が見つかった時に終了するので、条件に合う最初の1つの要素しか取り出せません。
 * 配列の要素がオブジェクトの場合もfindメソッドを使うことができます。
 * オブジェクトのプロパティを条件として使用する場合、そのプロパティを持っているオブジェクトそのものを取り出します。
 */

const numbers = [1, 3, 5, 7, 9];

// findメソッドを使って配列numbersから3の倍数を見つけ、定数foundNumberに代入してください
const foundNumber = numbers.find(number => { return number % 3 === 0; });

// foundNumberを出力してください
console.log(foundNumber);


const characters = [
  { id: 1, name: "にんじゃわんこ", age: 6 },
  { id: 2, name: "ベイビーわんこ", age: 2 },
  { id: 3, name: "ひつじ仙人", age: 100 },
  { id: 4, name: "とりずきん", age: 21 }
];

// 定数charactersからidが3のオブジェクトを見つけ、定数foundCharacterに代入してください
const foundCharacter = characters.find(character => { return character.id === 3; });

// foundCharacterを出力してください

console.log(foundCharacter);
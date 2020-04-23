/**
 * * 配列の要素には、文字列や数値だけでなく、オブジェクトも使う事が出来ます。
 * 配列の中のオブジェクトのプロパティの値を取り出すには、「配列[インデックス番号].プロパティ名」と書きます。
 */

const characters = [
  { name: "にんじゃわんこ", age: 14 },
  { name: "ひつじ仙人", age: 1000 }
];

// charactersの1つ目の要素をコンソールに出力してください
console.log(characters[0]);

// charactersの2つ目の要素の「name」に対応する値をコンソールに出力してください
console.log(characters[1].name);

/* -------------------------------------------------------------------------- */

const characters = [
  { name: "にんじゃわんこ", age: 14 },
  { name: "ひつじ仙人", age: 100 },
  { name: "ベイビーわんこ", age: 5 },
];

// for文を完成させてください
for (let i = 0; i < characters.length; i++) {
  console.log("--------------------");

  // 定数characterを定義してください
  const character = characters[i];

  // 「名前は〇〇です」を出力してください
  console.log(`名前は${character.name}です`);

  // 「〇〇歳です」を出力してください
  console.log(`${character.age}歳です`);

}

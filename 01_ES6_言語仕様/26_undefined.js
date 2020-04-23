/**
 * 配列の存在しないインデックス番号の要素や、オブジェクトの存在しないプロパティの要素を取得しようとすると、undefinedと出力されます。
 * * undefined は特別な値で、値が定義されていないことを意味します。
 */

// const characters = [
//   { name: "にんじゃわんこ", age: 14 },
//   { name: "ひつじ仙人", age: 100 },
//   { name: "ベイビーわんこ", age: 5 },
//   // 要素を追加してください
//   { name: "とりずきん" }
// ];

// for (let i = 0; i < characters.length; i++) {
//   console.log("--------------------");

//   const character = characters[i];

//   console.log(`名前は${character.name}です`);
//   console.log(`${character.age}歳です`);
// }

const characters = [
  { name: "にんじゃわんこ", age: 14 },
  { name: "ひつじ仙人", age: 100 },
  { name: "ベイビーわんこ", age: 5 },
  { name: "とりずきん" }
];

for (let i = 0; i < characters.length; i++) {
  console.log("--------------------");

  const character = characters[i];

  console.log(`名前は${character.name}です`);

  // if文を追加してください
  if (character.age === undefined) {
    console.log('年齢は秘密です');
  } else {
    console.log(`${character.age}歳です`);
  }

}

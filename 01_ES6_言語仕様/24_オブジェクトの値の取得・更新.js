/**
 * * オブジェクトの値を取り出すには、対応するプロパティ名を用いて、「オブジェクト.プロパティ名」のようにします。
 * 「オブジェクト.プロパティ名 = 新しい値」とする事でオブジェクトの値を更新する事が出来ます。
 */

const character = { name: "にんじゃわんこ", age: 14 };

// characterのnameの値を出力してください
console.log(character.name);

// characterのageの値を「20」に更新してください
character.age = 20;

// characterをコンソールに出力してください
console.log(character);
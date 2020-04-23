/**
 * * オブジェクトは配列と同じく複数のデータをまとめて管理するのに用いられます。
 * 配列は複数の値を並べて管理するのに対して、オブジェクトはそれぞれの値にプロパティと呼ばれる名前をつけて管理します。
 * オブジェクトも定数に代入する事が出来ます。
 */

// 定数characterを定義し、指定されたオブジェクトを代入してください
const character = {
  name: 'にんじゃわんこ',
  age: 14
};

// characterの値を出力してください
console.log(character);

/* -------------------------------------------------------------------------- */

const cafe = {
  name: "Progateカフェ",
  businessHours: {
    // businessHoursの値に指定されたオブジェクトを代入してください
    opening: '10:00(AM)',
    closing: '8:00(PM)'
  },
};

// 「店名:〇〇」を出力してください
console.log(`店名:${cafe.name}`);

// 「営業時間:〇〇から△△」を出力してください
console.log(`営業時間:${cafe.businessHours.opening}から${cafe.businessHours.closing}`);

/* -------------------------------------------------------------------------- */

const cafe = {
  name: "Progateカフェ",
  businessHours: {
    opening: "10:00(AM)",
    closing: "8:00(PM)"
  },
  // menusプロパティに配列を代入してください
  menus: ["コーヒー", "紅茶", "チョコレートケーキ"]
};

console.log(`店名: ${cafe.name}`);
console.log(`営業時間:${cafe.businessHours.opening}から${cafe.businessHours.closing}`);
console.log(`----------------------------`);
console.log("おすすめメニューはこちら");

// for文を用いて配列menusの中身を表示させてください
for (let i = 0; i < cafe.menus.length; i++) {
  console.log(cafe.menus[i]);
};

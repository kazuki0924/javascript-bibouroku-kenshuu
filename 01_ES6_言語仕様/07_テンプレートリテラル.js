/**
 * * 文字列の中で「${定数}」とすることで文字列の中に定数や変数を含めることができます。
 * この時、文字列全体をバッククォーテーション(`)で囲む必要があります
 */

const name = "にんじゃわんこ";
const age = 14;

// 「ぼくの名前は〇〇です」とコンソールに出力してください
console.log(`
  ぼくの名前は${name}です
`);

// 「今は〇〇歳です」と出力してください
console.log(`
  今は${age}歳です
`);
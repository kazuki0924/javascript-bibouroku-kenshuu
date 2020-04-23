/**
 * * 比較演算子には、左と右の値が等しいかを調べる「===」「!==」もあります。
 * この記号は数値だけでなく、文字列同士の比較にも使えます。
 */

const password = "ninjawanko";

// passwordの値が"ninjawanko"の場合、「ログインに成功しました」と出力してください
if (password === 'ninjawanko') {
  console.log('ログインに成功しました');
};

// passwordの値が"ninjawanko"でない場合、「パスワードが間違っています」と出力してください
if (password !== 'ninjawanko') {
  console.log('パスワードが間違っています');
};
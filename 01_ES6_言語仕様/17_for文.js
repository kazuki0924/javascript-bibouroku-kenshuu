/**
 * * for文を使う事でよりシンプルに繰り返し処理を書けるようになります。
 * 
 * 計算式の省略:
 * number += 1 は number++
 * number -= 1 は number--
 */

// for文を用いて、1から100までの数字を出力してください
for (let number = 1; number <= 100; number++) {
  console.log(number);
}

// for文を完成させてください
for (let number = 1; number <= 100; number++) {

  // if文を用いて、numberが3の倍数の時に「3の倍数です」、そうでないときは数字を出力してください
  if (number % 3 === 0) {
    console.log('3の倍数です');
  } else {
    console.log(number);
  }

}

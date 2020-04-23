/**
 * クラスの重要な機能の１つにメソッドがあります。
 * * メソッドとはインスタンスの動作のようなものです。
 * 「名前」や「年齢」などの情報はプロパティで追加したのに対して、メソッドは「挨拶をする」「値を計算する」などの処理のまとまりを表わします。
 * 「メソッド名(){}」とする事でメソッドは定義できます。
 * 「インスタンス.メソッド名()」とする事でそのメソッドを呼び出し、処理を実行する事ができます。
 */

class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // greetメソッドを追加してください
  greet() {
    console.log('こんにちは');
  }

}

const animal = new Animal("レオ", 3);

console.log(`名前: ${animal.name}`);
console.log(`年齢: ${animal.age}`);

// animalに対してgreetメソッドを呼び出してください
animal.greet();

/**
 * メソッドと同じように、コンストラクタもオーバーライドする事ができます。
 * 子クラスにプロパティを追加したい場合などに用います。
 * * ただし、コンストラクタをオーバーライドする際は１行目に「super()」と記述する必要があります
 * 子クラスのコンストラクタ内の「super()」では、その部分で親クラスのコンストラクタを呼び出しています。
 * そのため、親クラスのコンストラクタが引数を受け取る場合には、「super」の後ろの()に引数を渡す必要があります。
 */

class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log("こんにちは");
  }

  info() {
    this.greet();
    console.log(`名前は${this.name}です`);
    console.log(`${this.age}歳です`);
  }
}

class Dog extends Animal {
  // constructorを追加してください
  constructor(name, age, breed) {
    super(name, age);
    this.breed = breed;
  }

  info() {
    this.greet();
    console.log(`名前は${this.name}です`);
    // 「犬種は〇〇です」と出力してください
    console.log(`犬種は${this.breed}です`);

    console.log(`${this.age}歳です`);
    const humanAge = this.getHumanAge();
    console.log(`人間年齢で${humanAge}歳です`);
  }

  getHumanAge() {
    return this.age * 7;
  }
}

// 3つ目の引数に「"チワワ"」を渡してください
const dog = new Dog("レオ", 4, "チワワ");
dog.info();


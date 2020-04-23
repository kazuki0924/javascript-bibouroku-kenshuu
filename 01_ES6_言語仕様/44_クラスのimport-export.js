/**
 * * クラスの定義の後で「export default クラス名」とする子テオで、そのクラスを出力し、他のファイルへ渡すことができます。
 * * 他のファイルで定義されているクラスを使用するには読込をする必要があります。
 * ファイル名の拡張子の.jsは省略することができます。
 */

/* script.js-------------------------------------------------------------------------- */

// Dogクラスをインポートしてください
import Dog from './dog';

const dog = new Dog("レオ", 4, "チワワ");
dog.info();

/* animal.js-------------------------------------------------------------------------- */

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

// Animalクラスをエクスポートしてください
export default Animal;

/* dog.js-------------------------------------------------------------------------- */

// Animalクラスをインポートしてください
import Animal from './animal';

class Dog extends Animal {
  constructor(name, age, breed) {
    super(name, age);
    this.breed = breed;
  }

  info() {
    this.greet();
    console.log(`名前は${this.name}です`);
    console.log(`犬種は${this.breed}です`);
    console.log(`${this.age}歳です`);
    const humanAge = this.getHumanAge();
    console.log(`人間年齢で${humanAge}歳です`);
  }

  getHumanAge() {
    return this.age * 7;
  }
}

// Dogクラスをエクスポートしてください
export default Dog;
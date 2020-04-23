/**
 * * 「継承」はすでにあるクラスを元に、新しくクラスを作成する方法です。
 * 継承を用いてクラスを作成するには「extends」を用います。
 * 継承では元となるクラスを親クラス、新しく作成するクラスを子クラスと呼びます。
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

// Animalクラスを継承してDogクラスを定義してください
class Dog extends Animal {

}


const animal = new Animal("レオ", 3);
animal.info();

/* -------------------------------------------------------------------------- */

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
}

// 定数dogにDogクラスのインスタンスを代入してください
const dog = new Dog('レオ', 4);

// dogに対してinfoメソッドを呼び出してください
dog.info();

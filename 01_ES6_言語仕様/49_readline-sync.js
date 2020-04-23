/**
 * * readline-syncというパッケージを導入すると、コンソールへの値の入力と、その入力された値をプログラムの中で使うことができるようになります。
 * インポートし、readlineSync.question(質問文) のように記述します。
 * 質問文が出力されると一旦処理が止まり、コンソールに値が入力されると、次の処理に進みます。
 */

// readline-syncをインポートしてください
import readlineSync from 'readline-sync';

import Dog from "../class/dog";

const dog1 = new Dog("レオ", 4, "チワワ");

// readlineSync.questionを使って書き換えてください
const name = readlineSync.question("名前を入力してください: ");

// readlineSync.questionIntを使って書き換えてください
const age = readlineSync.questionInt("年齢を入力してください: ");

// readlineSync.questionを使って書き換えてください
const breed = readlineSync.question("犬種を入力してください: ");

const dog2 = new Dog(name, age, breed);

export { dog1, dog2 };
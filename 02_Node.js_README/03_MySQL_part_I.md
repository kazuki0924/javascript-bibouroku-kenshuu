### MySQL

#### mysqlパッケージをインストールします。

```shell
$ npm install mysql
```

#### データベースに接続するための情報を定数connectionに代入します。

list-app/app.js
```JavaScript
const express = require('express');
// MySQLを使うためのコードを貼り付けてください
const mysql = require('mysql');

const app = express();

app.use(express.static('public'));
// 定数connectionを定義して接続情報の書かれたコードを代入してください
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'progate',
  password: 'password',
  database: 'list_app'
});

app.get('/', (req, res) => {
  res.render('top.ejs');
});

app.get('/index', (req, res) => {
  res.render('index.ejs');
});

app.listen(3000);
```

*mysql*
- connection.query('クエリ', クエリ実行後の処理)と書くことで、Node.jsからデータベースに対してクエリを実行することができます。

#### データベースからデータを取得する処理を書いていきます。

list-app/app.js
```JavaScript
const express = require('express');
const mysql = require('mysql');
const app = express();

app.use(express.static('public'));

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'progate',
  password: 'password',
  database: 'list_app'
});

app.get('/', (req, res) => {
  res.render('top.ejs');
});

app.get('/index', (req, res) => {
  // データベースからデータを取得する処理を書いてください
  connection.query('SELECT * FROM items', (error, results) => {
    console.log(results);
    res.render('index.ejs');
});

app.listen(3000);
```

#### データベースから取得したメモをindex.ejsに渡して一覧画面に表示します。

list-app/app.js
```JavaScript
...
app.get('/index', (req, res) => {
  // データベースからデータを取得する処理を書いてください
  connection.query('SELECT * FROM items', (error, results) => {
    console.log(results);
    res.render('index.ejs');
});
...
```

index.ejsで定義している定数itemsを削除

#### メモの作成画面を作ります。

作成画面を表示するビューファイルを用意

/views/new.ejs
```HTML
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>LIST APP</title>
    <link rel="stylesheet" href="/css/style.css">
    <script src="/send_url.js"></script>
  </head>
  <body>
    <header>
      <a href="/" class="header-logo">LIST APP</a>
    </header>
    <div class="container">
      <div class="container-header">
        <h1>買い物リスト作成</h1>
      </div>
      <div class="item-form-wrapper">
        <p class="form-label">買うもの</p>
        <input type="text">
        <input type="submit" value="作成する">
      </div>
      <a href="/index" class="cancel-button"></span>もどる</a>
    </div>
  </body>
</html>
```

作成画面を表示するルーティングを作成

list-app/app.js
```JavaScript
...
app.get('/new', (req, res) => {
  res.render('new.ejs');
});
...
```

一覧画面に作成画面へのリンクを作成

/views/index.ejs
```HTML
...
<a href="/new" class="new-button">+ 新規作成</a>
...
```

#### メモの作成画面のフォームを作ります。

.post()を使ってメモ作成用のルーティングを作ります。

list-app/app.js
```JavaScript
...
app.post('/create', (req, res) => {
  connection.query(
    'SELECT * FROM items',
    (error, results) => {
      res.render('index.ejs', {items: results});
    }
  );
})
...
```

作成画面のフォームを送信できるようにします。

/views/new.ejs
```HTML
...
<div class="item-form-wrapper">
  <p class="form-label">買うもの</p>
  <!-- formタグを追加してください -->
  <form action="/create" method="post">
    <input type="text">
    <input type="submit" value="作成する">
  <!-- formタグの閉じタグを書いてください -->
  </form>
</div>
...
```

#### メモの作成画面のフォームで入力した値を受け取れるようにします。

/views/new.ejs
```HTML
...
<div class="item-form-wrapper">
  <p class="form-label">買うもの</p>
  <form action="/create" method="post">
    <!-- name属性を追加してください -->
    <input name="itemName" type="text">
    <input type="submit" value="作成する">
  </form>
</div>
...
```

フォームの値を受け取る為に必要な定型文を記入します。

list-app/app.js
```JavaScript
...
app.use(express.static('public'));
// フォームから送信された値を受け取れるようにしてください
app.use(express.urlencoded({extended: false}));
...
```

#### メモを追加する処理を作成していきます。

list-app/app.js
```JavaScript
...
app.post('/create', (req, res) => {
  // データベースに追加する処理を書いてください
  connection.query(
    'INSERT INTO items (name) VALUES (?)', [req.body.itemName],
    (error, results) => {
      connection.query(
        'SELECT * FROM items',
        (error, results) => {
          res.render('index.ejs', {items: results});
        }
      );
    }
  );
});
...
```

#### リダイレクトをするように変更を加えます。

list-app/app.js
```JavaScript
...
app.post('/create', (req, res) => {
  connection.query(
    'INSERT INTO items (name) VALUES (?)',
    [req.body.itemName],
    (error, results) => {
      // 一覧画面にリダイレクトしてください
      res.redirect('/index');
    }
  );
});
...
```
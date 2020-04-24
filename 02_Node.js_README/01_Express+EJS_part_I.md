### Express + EJS

#### Express と EJS をインストールします。

```shell
$ npm install express

$ npm install ejs
```

#### Express を使ってサーバーを起動させます。

/list/app.js
```JavaScript
const express = require('express');
const app = express();

// '/top'へのルーティング
app.get('/top', (req, res) => {
  // 指定したビューファイルをブラウザに表示する
  res.render('top.ejs');
});

app.listen(3000)
```

/view/top.ejs
```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>LIST APP</title>
    <script src="/send_url.js"></script>
  </head>
  <body>
    <div class="top-wrapper">
      <div class="top-detail">
        <h2 class="subtitle">買い物リストアプリ</h2>
        <h1 class="title">LIST APP</h1>
        <p class="description">
          LIST APPは、買い物をリストアップするサービスです。
          <br>
          買いたいものをリストに追加してみましょう。
        </p>
        <a class="index-button">一覧を見る</a>
      </div>
      <div class="top-image">
      </div>
    </div>
  </body>
</html>
```

#### app.js を実行します。

`$ node app.js`

#### ブラウザからアクセスが可能になります。


[localhost:3000](localhost:3000)

*ルーティング*

- URLに対応する処理を実行すること
- req(リクエストの略)・res(レスポンスの略)の２つの引数を受け取ります。

*EJS*

- HTMLとJavaScriptのコード両方を記述できるテンプレートエンジン
- ejsファイル自体をビューファイルと呼びます。
- JavaScriptのコードを記述するには、<% %>または<%= %>で囲みます。
- EJSはrenderメソッドから値を受け取ることができます。
- renderメソッドの第2引数に{プロパティ : 値}と書くことで、EJS側に値を渡すことができます。

#### /public にcssと画像を置いて適応させます。

/list/app.js
```JavaScript
const express = require('express');
const app = express();

// publicフォルダ内のファイルを読み込めるようにする処理
app.use(express.static('public'));

...
```

追加

/public/css/style.css



/view/top.ejs
```HTML
...
<!-- CSSファイルの読み込み -->
<link rel="stylesheet" href="/css/style.css">
...
```



```HTML
...
<!-- 画像ファイルの読み込み -->
<img src="/images/top.png">
...
```
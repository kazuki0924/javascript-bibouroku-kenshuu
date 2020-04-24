#### 削除機能を作っていきます。

メモを削除するルーティングを作成します。

list-app/app.js
```JavaScript
...
app.post('/delete', (req, res) => {
  res.redirect('/index');
})
...
```

メモを削除するボタンを用意します。

/views/index.ejs
```HTML
...
<div class="item-menu">
  <!-- formタグを追加してください -->
  <form action="/delete" method="post">
    <input type="submit" value="削除">
  </form>
</div>
...
```
#### ルートパラメータ指定するようにします。

ルーティングURLにルートパラメータを指定します。

list-app/app.js
```JavaScript
...
app.post('/delete/:id', (req, res) => {
  // ルートパラメータで受け取った値を出力してください
  console.log(req.params.id);
  res.redirect('/index');
});
...
```

フォームのaction属性にitemのidプロパティの値を追加します。

/views/index.ejs
```HTML
...
<div class="item-menu">
  <!-- action属性にitemのidプロパティの値を追加してください -->
  <form action="/delete/<%= item.id %>" method="post">
    <input type="submit" value="削除">
  </form>
</div>
...
```

DELETEクエリを実行します。

list-app/app.js
```JavaScript
...
app.post('/delete/:id', (req, res) => {
  // データベースのデータを削除する処理を書いてください
  connection.query(
    'DELETE FROM items WHERE id = ?',
    [req.params.id],
    (error, results) => {
      res.redirect('/index');
    }
  );
});
...
```

#### 編集機能を作っていきます。

編集画面を表示するルーティングを作成します

list-app/app.js
```JavaScript
app.get('/edit/:id', (req, res) => {
  res.render('edit.ejs');
})
```

ビューファイルを用意します。

/views/edit.ejs
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
        <h1>買い物リスト編集</h1>
        <a href="/index" class="cancel-button">キャンセル</a>
      </div>
      <div class="item-form-wrapper">
        <p class="form-label">買うもの</p>
        <form>
          <input type="text">
          <input type="submit" value="更新する">
        </form>
      </div>
    </div>
  </body>
</html>
```

一覧画面に編集画面へのリンクを作成します。

/views/index.ejs
```HTML
...
<form action="/delete/<%= item.id %>" method="post">
  <input type="submit" value="削除">
</form>
<!-- メモのidを含めた編集画面へのリンクを作成してください -->
<a href="/edit/<%= item.id %>">編集</a>
...
```

選択されたメモの内容がフォームに表示されている状態にします。

list-app/app.js
...
```JavaScript
app.get('/edit/:id', (req, res) => {
  // 選択されたメモをデータベースから取得する処理を書いてください
  connection.query(
    'SELECT * FROM items WHERE id =?',
    [req.params.id],
    (error, results) => {
      res.render('edit.ejs', { item: results[0] });
    }
  )
});
...
```

/views/edit.ejs
```HTML
...
<form>
  <!-- value属性を指定してください -->
  <input type="text" value="<%= item.name %>">
  <input type="submit" value="更新する">
</form>
...
```

#### 更新処理を作っていきます。

更新用のルーティングを作成します。

list-app/app.js
...
```JavaScript
app.post('/update/:id', (req, res) => {
  res.redirect('/index');
});
...
```

編集画面からフォームの値を送信できるようにします。

/views/edit.ejs
```HTML
...
<div class="item-form-wrapper">
  <p class="form-label">買うもの</p>
  <!-- フォームの送信先とメソッドを指定してください -->
  <form action="/update/<%= item.id %>" method="post">
    <!-- name属性を指定してください -->
    <input type="text" value="<%= item.name %>" name="itemName">
    <input type="submit" value="更新する">
  </form>
</div>
...
```

選択したメモを更新する処理を作成していきます。

list-app/app.js
...
```JavaScript
app.post('/update/:id', (req, res) => {
  // 選択されたメモを更新する処理を書いてください
  connection.query(
    'UPDATE items SET name = ? WHERE id = ?',
    [req.body.itemName, req.params.id],
    (error, results) => {
     res.redirect('/index');
    }
  );
});
...
```
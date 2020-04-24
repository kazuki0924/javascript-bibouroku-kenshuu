#### index.ejsを作ります。

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
      <a class="header-logo">LIST APP</a>
    </header>
    <div class="container">
      <div class="container-header">
        <h1>買い物リスト</h1>
      </div>
      <div class="index-table-wrapper">
        <div class="table-head">
          <span class="id-column">ID</span>
          <span>買うもの</span>
        </div>
        <ul class="table-body">
          <li>
            <span class="id-column">1</span>
            <span class="name-column">じゃがいも</span>
          </li>
          <li>
            <span class="id-column">2</span>
            <span class="name-column">にんじん</span>
          </li>
          <li>
            <span class="id-column">3</span>
            <span class="name-column">たまねぎ</span>
          </li>
        </ul>
      </div>
    </div>
  </body>
</html>
```

#### EJSを使ってHTML内でJavaScriptを使います。

/views/index.ejs

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
      <a class="header-logo">LIST APP</a>
    </header>
    <div class="container">
      <div class="container-header">
        <h1>買い物リスト</h1>
      </div>
      <div class="index-table-wrapper">
        <div class="table-head">
          <span class="id-column">ID</span>
          <span>買うもの</span>
        </div>
        <!-- EJSを用いてitemを定義してください -->
        <% const item = {id: 4, name: 'とまと'} %>
        
        <ul class="table-body">
          <li>
            <span class="id-column">1</span>
            <span class="name-column">じゃがいも</span>
          </li>
          <li>
            <span class="id-column">2</span>
            <span class="name-column">にんじん</span>
          </li>
          <li>
            <span class="id-column">3</span>
            <span class="name-column">たまねぎ</span>
          </li>
          <li>
            <span class="id-column">
              <!-- itemのidプロパティの値を表示してください -->
              <%= item.id %>
              
            </span>
            <span class="name-column">
              <!-- itemのnameプロパティの値を表示してください -->
              <%= item.name %>
              
            </span>
          </li>
        </ul>
      </div>
    </div>
  </body>
</html>
```
#### リファクタリングしましょう。

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
      <a class="header-logo">LIST APP</a>
    </header>
    <div class="container">
      <div class="container-header">
        <h1>買い物リスト</h1>
      </div>
      <div class="index-table-wrapper">
        <div class="table-head">
          <span class="id-column">ID</span>
          <span>買うもの</span>
        </div>
        <!-- 配列itemsを定義してください -->
        <% const items = [
          {id: 1, name: 'じゃがいも'},
          {id: 2, name: 'にんじん'},
          {id: 3, name: 'たまねぎ'}
        ]; %>
        
        <ul class="table-body">
          <!-- forEachを用いてitemsの要素を出力してください -->
          <% items.forEach(item => { %>
            <li>
              <span class="id-column">
                <!-- itemのidプロパティの値を表示してください -->
                <%= item.id %>
                
              </span>
              <span class="name-column">
                <!-- itemのnameプロパティの値を表示してください -->
                <%= item.name %>
                
              </span>
            </li>
          <% }) %>
        </ul>
      </div>
    </div>
  </body>
</html>
```

#### トップ画面をルートURLで表示できるようにします。

list-app/app.js
```JavaScript
const express = require('express');
const app = express();

app.use(express.static('public'));

// ルートURLで表示されるように変更してください
app.get('/', (req, res) => {
  res.render('top.ejs');
});

app.get('/index', (req, res) => {
  res.render('index.ejs');
});

app.listen(3000);

```

#### これまで作成したページをリンクで繋げます。
/views/top.ejs
```HTML
...
<!-- href属性を追加してください -->
<a class="index-button" href="/index" >一覧を見る</a>
...
```

/views/index.ejs
```HTML
<!-- href属性を追加してください -->
...
<a class="header-logo" href="/" >LIST APP</a>
...
```
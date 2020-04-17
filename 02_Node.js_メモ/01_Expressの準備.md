##### 手順

Express をインストールします

`$ npm install express`

Express を使ってサーバーを起動させます

```JavaScript
// list/app.js
const express = require('express');
const app = express();

app.listen(3000)
```

app.js を実行します

`$ node app.js`

ブラウザからアクセスが可能になります

`localhost:3000`

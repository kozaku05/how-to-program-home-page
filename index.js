const http = require('http');//httpウェブサーバー
const fs = require('fs');//ファイルシステム

const port = 80;//ポート番号

const server = http.createServer((req, res) => {
    console.log(req.url);//ドメイン以降のURLを表示
    console.log(req.method);//通信メソッドを表示
    if(req.method ==="GET") {
        if(req.url.endsWith("/")) req.url += "index.html";//URLが/で終わっていたらindex.htmlを追加
        // tips ../で一つ上の改装のフォルダを指定できる
        fs.readFile(`./公開用フォルダ${req.url}`,(err,data) => {//.を付けると相対パスになる(このファイルがあるディレクトリから見た場所)
            if(err){
                res.writeHead(404, {"Content-type": "text/html"});
                res.end("<h1>404 Not Found</h1>")
            }else {
                res.writeHead(200);
                res.end(data);
            }
        });
     }
});

server.listen(port, ()=>{
    console.log('Server runnning at port:' +port);//サーバー起動時に表示
});
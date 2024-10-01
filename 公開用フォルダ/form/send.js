function send() {
    let options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            data: document.getElementById("data").value
        })
    }
    fetch("http://localhost/api", options)
        .then(response => {
            //レスポンスを処理
        })
        .catch(error => {
            //エラーが起こった時
        });
}

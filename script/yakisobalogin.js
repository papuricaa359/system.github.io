
    function login() {
        const username = document.getElementById('login-username').value;
        const loginButton = document.getElementById('loginButton');
        const resultDiv = document.getElementById('result');

        loginButton.textContent = '送信中...';
        loginButton.disabled = true;

        fetch(`https://script.google.com/macros/s/AKfycbz6D-_1SPg58jl8ILejPZOqV7BkbTK_9vXiRrDV-6S4VWUan_7ff22yQOJlviv51kBE/exec?username=${username}`)
            .then(response => response.json())
            .then(data => {
                if (data.error) {
                    resultDiv.textContent = `エラー: ${data.error}`;
                    loginButton.textContent = '食券を取得する';
                    loginButton.disabled = false;
                } else {
                    if (data.check === "") { // 購入していない場合
                        window.location.href = `yakisobashow.html?username=${encodeURIComponent(username)}`;
                    } else {
                        alert("購入済みです。もう一度お試しください。");
                        loginButton.textContent = '食券を取得する';
                        loginButton.disabled = false;
                    }
                }
            })
            .catch(error => {
                console.error('エラー:', error);
                resultDiv.textContent = 'データの取得に失敗しました。';
                loginButton.textContent = '食券を取得する';
                loginButton.disabled = false;
            });
    }

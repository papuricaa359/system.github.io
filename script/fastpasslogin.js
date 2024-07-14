
        function login() {
        const username = document.getElementById('login-username').value;
        const loginButton = document.getElementById('loginButton');
        const resultDiv = document.getElementById('result');

        loginButton.textContent = '送信中...';
        loginButton.disabled = true;

        fetch(`https://script.google.com/macros/s/AKfycbxBhSae4wW4E9KZJJpEdip7iydW_uzJEFALF62M-fF6ff8f2H0R_UjkfxcW6s25lVOg/exec?username=${username}`)
            .then(response => response.json())
            .then(data => {
                if (data.error) {
                    resultDiv.textContent = `エラー: ${data.error}`;
                    loginButton.textContent = 'ファストパスを取得する';
                    loginButton.disabled = false;
                } else {
                    if (data.check === "") { 
                        window.location.href = `fastpassshow.html?username=${encodeURIComponent(username)}`;
                    } else {
                        alert("入場済みです。もう一度お試しください。");
                        loginButton.textContent = 'ファストパスを取得する';
                        loginButton.disabled = false;
                    }
                }
            })
            .catch(error => {
                console.error('エラー:', error);
                resultDiv.textContent = 'データの取得に失敗しました。';
                loginButton.textContent = 'ファストパスを取得する';
                loginButton.disabled = false;
            });
    }


    document.addEventListener('DOMContentLoaded', function () {
      const urlParams = new URLSearchParams(window.location.search);
      const username = urlParams.get('username');

      if (!username) {
        displayError('ユーザー名が指定されていません。');
        return;
      }

      fetch(`https://script.google.com/macros/s/AKfycbxBhSae4wW4E9KZJJpEdip7iydW_uzJEFALF62M-fF6ff8f2H0R_UjkfxcW6s25lVOg/exec?username=${username}`)
        .then(response => response.json())
        .then(data => {
          if (data.error) {
            displayError(`エラー: ${data.error}`);
          } else {
            displayResult(data);
            document.getElementById('container').style.display = 'block'; // データ取得後に表示
            document.querySelector('.button-link').style.display = 'block'; // データ取得後にボタン表示
          }
        })
        .catch(error => {
          console.error('Error:', error);
          displayError('データの取得に失敗しました。');
        });
    });

    function displayResult(data) {
      const idElement = document.getElementById('id');
      const valueElement = document.getElementById('value');
      const usernameElement = document.getElementById('username');
      const countElement = document.getElementById('count');

      idElement.textContent = data.number;
      valueElement.textContent = data.time;
      usernameElement.textContent = `${data.username}様`;
      countElement.textContent = `${data.people} 名様`;
    }

    function displayError(message) {
      const errorContainer = document.getElementById('error-container');
      const errorDiv = document.createElement('div');
      errorDiv.classList.add('error-message');
      errorDiv.textContent = message;
      errorContainer.appendChild(errorDiv);
    }
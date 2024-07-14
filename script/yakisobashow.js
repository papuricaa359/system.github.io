
    document.addEventListener('DOMContentLoaded', function () {
      const urlParams = new URLSearchParams(window.location.search);
      const username = urlParams.get('username');

      if (!username) {
        displayError('ユーザー名が指定されていません。');
        return;
      }

      fetch(`https://script.google.com/macros/s/AKfycbz6D-_1SPg58jl8ILejPZOqV7BkbTK_9vXiRrDV-6S4VWUan_7ff22yQOJlviv51kBE/exec?username=${username}`)
        .then(response => response.json())
        .then(data => {
          if (data.error) {
            displayError(`エラー: ${data.error}`);
          } else {
            displayResult(data);
          }
        })
        .catch(error => {
          console.error('Error:', error);
          displayError('データの取得に失敗しました。');
        });
    });

    function displayResult(data) {
      const numberElement = document.getElementById('number');
      const usernameElement = document.getElementById('username');
      const timeElement = document.getElementById('time');
      const yakisobaElement = document.getElementById('yakisoba');
      const eggElement = document.getElementById('egg');

      numberElement.textContent = `${data.number}`;
      usernameElement.textContent = `${data.username}様`;
      timeElement.textContent = `${data.time}`;
      yakisobaElement.textContent = `${data.yakisoba} 個`;
      eggElement.textContent = `${data.egg} 個`;

      document.querySelectorAll('.hidden').forEach(element => {
        element.classList.remove('hidden');
      });
    }

    function displayError(message) {
      const resultDiv = document.getElementById('result');
      resultDiv.innerHTML = `<div class="error-message">${message}</div>`;
    }

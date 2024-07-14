
        function usercheck() {
            var username = document.getElementById("username").value;
            if (username === "") {
                alert("ユーザーネームを入力してください。");
                return;
            }
            var overlay = document.getElementById("overlay");
            overlay.style.display = "flex";
            fetch(`https://script.google.com/macros/s/AKfycbwTmOCfOM_i1MMrt2vMjkXwMYG0gqw7zs1o9rbBLnRAbzYwXzgwcS-BrWArHEcBfruaeQ/exec?username=${encodeURIComponent(username)}`)
                .then(response => response.json())
                .then(data => {
                    if (data.flag === "true") {
                        alert("入力したニックネームは既に登録されています。別のニックネームを入力してください。");
                        overlay.style.display = "none";
                    } else {
                        register();
                    }
                })
                .catch(error => {
                    console.error('Error checking username:', error);
                    alert("エラーが発生しました。もう一度お試しください。");
                });
        }

        function register() {
            var username = document.getElementById("username").value;
            var hour = document.getElementById("hour").value;
            var minute = document.getElementById("minute").value;
            var people = document.getElementById("people").value;
            var time = hour + "：" + minute;
            var formData = new FormData();
            formData.append("username", username);
            formData.append("time", time);
            formData.append("people", people);
            var overlay = document.getElementById("overlay");
            overlay.style.display = "flex";
            var xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function () {
                if (xhr.readyState === XMLHttpRequest.DONE) {
                    if (xhr.status === 200) {
                        // 登録成功後の処理
                        document.getElementById("username").value = "";
                        document.getElementById("hour").value = "";
                        document.getElementById("minute").value = "";
                        document.getElementById("people").value = "";
                        window.location.href = 'fastpasssend.html'; 
                    } else {
                        alert('登録に失敗しました。再度お試しください。');
                    }
                    overlay.style.display = "none";
                }
            };
            xhr.open("POST", "https://script.google.com/macros/s/AKfycbwTmOCfOM_i1MMrt2vMjkXwMYG0gqw7zs1o9rbBLnRAbzYwXzgwcS-BrWArHEcBfruaeQ/exec");
            xhr.send(formData);
        }

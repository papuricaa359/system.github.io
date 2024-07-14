
        function register() {
            var checkValue = document.getElementById("check").value;
            var formData = new FormData();
            var overlay = document.getElementById("overlay");
            overlay.style.display = "flex";
            formData.append("check", checkValue);
            var xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function () {
                if (xhr.readyState === XMLHttpRequest.DONE) {
                    if (xhr.status === 200) {
                        document.getElementById("check").value = "";
                        overlay.style.display = "none";
                    } else {
                        alert('登録に失敗しました。再度お試しください。');
                    }
                }
            };
            xhr.open("POST", "https://script.google.com/macros/s/AKfycbyShmPUDqvy7St3zgnGBCkDFAv1c1wIpp0gTOb39KKe3njj58TEphtznsnqycKHi_JvRg/exec");
            xhr.send(formData);
        }

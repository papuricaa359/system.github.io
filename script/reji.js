
        const productview = document.getElementById('proname');
        const proqty = document.getElementById('proqty');
        const totalqtyshow = document.getElementById('allqty');
        const totalamount = document.getElementById('allmoney');
        const discountshow = document.getElementById('dismoney');
        const payallshow = document.getElementById('paymoney');
        const azukarishow = document.getElementById('depmoney');
        const changeshow = document.getElementById('chanmoney');

        let input_value = 0;
        let yakisobaflag = 0;
        let eggflag = 0;
        let quapro = "";
        let pricenow = 0;
        let total = 0;
        let totalqty = 0;
        let discountflag = 0;
        let discount = 0;
        let payall = 0;
        let azukari = 0;
        let azukariflag = 0;
        let change = 0;
        let changeflag = 0;
        let finshflag = 0;
        function yakisoba() {
            yakisobaflag = 1;
            eggflag = 0;
            productview.textContent = "焼きそば";
            quapro = 1;
            input_value = 0;
            valueshow(quapro);

        }

        function egg() {
            eggflag = 1;
            yakisobaflag = 0;
            productview.textContent = "目玉焼き";
            quapro = 1;
            input_value = 0;
            valueshow(quapro);

        }

        function valueshow(value) {
            if (yakisobaflag === 1 || eggflag === 1) {
                proqty.textContent = value;
            }
        }

        function updateInputValue(num) {
            if (input_value === 0) {
                input_value = num;
            } else {
                input_value = input_value * 10 + num;
            }

            if (yakisobaflag === 1 || eggflag == 1) {
                quapro = input_value;
                valueshow(quapro);
            } else if (discountflag === 1) {
                discount = input_value;
                discountshow.textContent = discount;

            } else if (azukariflag === 1) {
                azukari = input_value;
                azukarishow.textContent = azukari;
                changeflag = 1;
            } else {
                input_value = 0;
            }

        }

        document.getElementById('number1').addEventListener('click', () => {
            updateInputValue(1);
        });

        document.getElementById('number2').addEventListener('click', () => {
            updateInputValue(2);
        });

        document.getElementById('number3').addEventListener('click', () => {
            updateInputValue(3);
        });

        document.getElementById('number4').addEventListener('click', () => {
            updateInputValue(4);
        });

        document.getElementById('number5').addEventListener('click', () => {
            updateInputValue(5);
        });

        document.getElementById('number6').addEventListener('click', () => {
            updateInputValue(6);
        });

        document.getElementById('number7').addEventListener('click', () => {
            updateInputValue(7);
        });

        document.getElementById('number8').addEventListener('click', () => {
            updateInputValue(8);
        });

        document.getElementById('number9').addEventListener('click', () => {
            updateInputValue(9);
        });

        document.getElementById('number0').addEventListener('click', () => {
            if (input_value !== 0) {
                input_value *= 10;
            }
            quapro = input_value;
            if (yakisobaflag === 1 || eggflag == 1) {
                valueshow(quapro);
            } else if (discountflag === 1) {
                discount = input_value;
                discountshow.textContent = discount;
            } else if (azukariflag === 1) {
                azukari = input_value;
                azukarishow.textContent = azukari;
                changeflag = 1;
            } else {
                input_value = 0;
            }



        });

        document.getElementById('number00').addEventListener('click', () => {
            if (input_value !== 0) {
                input_value *= 100;
            }
            quapro = input_value;
            if (yakisobaflag === 1 || eggflag == 1) {
                valueshow(quapro);
            } else if (discountflag === 1) {
                discount = input_value;
                discountshow.textContent = discount;
            } else if (azukariflag === 1) {
                azukari = input_value;
                azukarishow.textContent = azukari;
                changeflag = 1;
            } else {
                input_value = 0;
            }

        });

        document.getElementById('cancel').addEventListener('click', () => {
            input_value = 0;
            if (yakisobaflag === 1 || eggflag === 1) {
                quapro = "";
                valueshow(quapro);
            } else if (discountflag === 1) {
                discount = "";
                discountshow.textContent = discount;
            } else if (azukariflag === 1) {
                azukari = "";
                azukarishow.textContent = azukari;

            }

        });

        document.getElementById('cancelTransaction').addEventListener('click', () => {
            reset();
        });

        document.getElementById('discount').addEventListener('click', () => {
            // 値引きの処理
            discountflag = 1;
            input_value = 0;

        });

        document.getElementById('confirm').addEventListener('click', () => {
            if (yakisobaflag === 1 || eggflag === 1) {
                if (yakisobaflag === 1) {
                    pricenow = 400 * quapro;
                }
                if (eggflag === 1) {
                    pricenow = 50 * quapro;

                }
                total = total + pricenow;
                totalqty = totalqty + quapro;
                totalqtyshow.textContent = totalqty;
                totalamount.textContent = total;
                payall = total - discount;
                payallshow.textContent = payall;
                //  リセット
                eggflag = 0;
                yakisobaflag = 0;
                input_value = 0;
                quapro = "";
                valueshow(input_value);
                productview.textContent = "";
                proqty.textContent = "";
            } else if (discountflag === 1) {
                payall = total - discount;
                payallshow.textContent = payall;

                discount = 0;
                discountflag = 0;
                input_value = 0;
            }
        });


        document.getElementById('settlement').addEventListener('click', () => {
            if (discountflag === 1) {
                payall = total - discount;
                payallshow.textContent = payall;
                discount = 0;
                discountflag = 0;
                input_value = 0;
            }
            if (finshflag === 1) {
                register();

            } else {
                azukariflag = 1;
            }
            if (changeflag === 1) {
                change = azukari - payall;
                if (change > 0) {
                    changeshow.textContent = change;
                    finshflag = 1;
                    azukariflag = 0;

                } else {
                    changeshow.textContent = "入力金不足";
                    azukari = 0;
                    input_value = 0;
                    azukarishow.textContent = azukari;
                    changeflag === 0;
                }


            }


        });
        function reset() {
            input_value = 0;
            yakisobaflag = 0;
            eggflag = 0;
            quapro = "";
            pricenow = 0;
            total = 0;
            totalqty = 0;
            discountflag = 0;
            discount = 0;
            payall = 0;
            azukari = 0;
            azukariflag = 0;
            change = 0;
            changeflag = 0;
            finshflag = 0;
            productview.textContent = "";
            proqty.textContent = "";
            totalqtyshow.textContent = 0;
            totalamount.textContent = 0;
            discountshow.textContent = 0;
            payallshow.textContent = 0;
            azukarishow.textContent = 0;
            changeshow.textContent = 0;
        }
        function register() {
            var checkValue = document.getElementById("check").value;
            var formData = new FormData();
            formData.append("check", checkValue);
            var xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function () {
                if (xhr.readyState === XMLHttpRequest.DONE) {
                    if (xhr.status === 200) {
                        document.getElementById("check").value = "";
                        formData = "";
                        reset();

                    } else {
                        alert('登録に失敗しました。再度お試しください。');
                    }
                }
            };
            xhr.open("POST", "https://script.google.com/macros/s/AKfycbxlKZgyXpio5-XVIL9XZdB1J5c84kcKuAn2p0ExTGr2IwbvdMen-gWGoXXh3zc0TkpmKA/exec");
            xhr.send(formData);
        }


    function updateRemainingTime() {
      fetch('https://script.google.com/macros/s/AKfycbzgr4JpmFFwn5lRfwmlUY5b6JcHr04FMuY3iT1KbrPjIiiUXH4d4OvGN7mR8qHmleew/exec?service=latestTime')
        .then(response => response.text())
        .then(time => {
          document.getElementById('remainingTime').innerText = time;
          document.getElementById('waitTimesmart').innerText = time;
        });
    }

    setInterval(updateRemainingTime, 1000); 
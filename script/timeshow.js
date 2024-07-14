
    function updateRemainingTime() {
      fetch('https://script.google.com/macros/s/AKfycbx6fV6m2DavFK46mwVOa6Wm5uDDjD9ViNx7E6q9bS38mgEK7WmgkB52bYetJ0xIwZ7_/exec?service=latestTime')
        .then(response => response.text())
        .then(time => {
          document.getElementById('remainingTime').innerText = time;
        });
    }

    setInterval(updateRemainingTime, 1000); 

    document.getElementById('timeForm').addEventListener('submit', function(e) {
      e.preventDefault();
      var remainingTime = document.getElementById('remainingTime').value;
      
      fetch(`https://script.google.com/macros/s/AKfycbzgr4JpmFFwn5lRfwmlUY5b6JcHr04FMuY3iT1KbrPjIiiUXH4d4OvGN7mR8qHmleew/exec?remainingTime=${remainingTime}`)
        .then(response => response.text())
        .then(data => {
          document.getElementById('remainingTime').value = '';
        });
    });

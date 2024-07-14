
    document.getElementById('timeForm').addEventListener('submit', function(e) {
      e.preventDefault();
      var remainingTime = document.getElementById('remainingTime').value;
      
      fetch(`https://script.google.com/macros/s/AKfycbyv8poRTwrFioc0bCi4sg9CntrRUgSvoNRmJHOnIMtKgrSCQ6Gc5PSThhNWl9Om6Ki6/exec?remainingTime=${remainingTime}`)
        .then(response => response.text())
        .then(data => {
          document.getElementById('remainingTime').value = '';
        });
    });

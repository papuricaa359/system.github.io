function getOrders() {
    const hour = document.getElementById('hour').value.trim();
    const minute = document.getElementById('minute').value.trim();
    const desiredTime = hour + '：' + minute;

    // ローディング表示
    document.getElementById('loading').style.display = 'block';
    document.getElementById('noResults').style.display = 'none';
    document.getElementById('orderTable').style.display = 'none';

    fetch('https://script.google.com/macros/s/AKfycby-3qo6mU3Py-73y5xVG-AhWIAx9JaPOdCxl3ZoogHoEE0-YmKE7jiwWzZJzsPSZkNWtg/exec?desiredTime=' + desiredTime)
        .then(response => response.json())
        .then(data => {
            if (data.error) {
                throw new Error(data.error);
            }
            if (data.orders.length === 0) {
                displayNoResults();
            } else {
                displayOrders(data.orders);
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            displayNoResults();
        })
        .finally(() => {
            // ローディング非表示
            document.getElementById('loading').style.display = 'none';
        });
}

function displayOrders(orders) {
    const tbody = document.getElementById('orderBody');
    tbody.innerHTML = '';

    orders.forEach(order => {
        const row = document.createElement('tr');
        row.innerHTML = `
        <td>${order[0]}</td>
        <td>${order[1]}</td>
        <td>${order[2]}</td>
        <td>${order[3]}</td>
      `;
        tbody.appendChild(row);
    });

    // 結果を表示
    document.getElementById('noResults').style.display = 'none';
    document.getElementById('orderTable').style.display = 'table';
}

function displayNoResults() {
    // 該当なしを表示
    document.getElementById('noResults').style.display = 'block';
    document.getElementById('orderTable').style.display = 'none';
}
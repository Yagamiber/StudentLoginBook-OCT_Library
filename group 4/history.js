document.addEventListener("DOMContentLoaded", function() {
    const historyTable = document.getElementById('historyTable');
    const history = JSON.parse(localStorage.getItem('loginHistory')) || [];

    history.forEach(entry => {
        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${entry.date}</td>
            <td>${entry.time}</td>
            <td>${entry.studentNumber}</td>
            <td>${entry.studentName}</td>
            <td>${entry.purpose}</td>
        `;

        historyTable.appendChild(row);
    });
});

function clearHistory() {
    localStorage.removeItem('loginHistory');
    location.reload();
}
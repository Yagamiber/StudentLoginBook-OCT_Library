document.addEventListener('DOMContentLoaded', () => {
    const students = [
        { name: 'Aaron Macias', section: 'LYRA', studentNumber: '202S-5066' },
        { name: 'Shania Juan', section: 'LYRA', studentNumber: '202S-4878' },
        { name: 'Daniel Orivida', section: 'LYRA', studentNumber: '202S-4719' },
        { name: 'Michael Montejo', section: 'LYRA', studentNumber: '202S-5232' },
        { name: 'Angeline Moya', section: 'LYRA', studentNumber: '202S-4865' },
        { name: 'Phoebe Alcala', section: 'LYRA', studentNumber: '202S-7719' },
        { name: 'Rhanzei Raquiza', section: 'LYRA', studentNumber: '202S-5156' },
        { name: 'Jade Baybay', section: 'LYRA', studentNumber: '202S-4888' },
        { name: 'Johnross Mabalot', section: 'LYRA', studentNumber: '202S-7621' },
        { name: 'Lance Lalaguna', section: 'LYRA', studentNumber: '202S-5150' },
        { name: 'Saimon Motus', section: 'LYRA', studentNumber: '202S-5049' },
        { name: 'John Paul Ramos', section: 'Cassiopeia', studentNumber: '202S-3707' },
        { name: 'Aleck Jade Regoniel', section: 'Cassiopeia', studentNumber: '202S-3822' },
        { name: 'Miel Ayesha Perlas', section: 'Cassiopeia', studentNumber: '202S-4173' },
        { name: 'Jayvee Espinosa', section: 'Spinel', studentNumber: '202S-7751' },
        { name: 'Anna Villaruel', section: 'Spinel', studentNumber: '202S-7814' },
        { name: 'Francine Balmaceda ', section: 'Spinel', studentNumber: '202S-7727' },
        { name: 'Princess  Juangco', section: 'Rigel', studentNumber: '202S-4758' },
        { name: 'Renz Marionne Cuya', section: 'Rigel', studentNumber: '202S-4537' },
        { name: 'Felimar Maravillas', section: 'Rigel', studentNumber: '202S-3927' },
        { name: 'Felimar Maravillas', section: 'Rigel', studentNumber: '202S-3927' },
        { name: 'Ashley Erni', section: 'RUBY', studentNumber: '202S-6038' },
        { name: 'Chantrice Dilla', section: 'RUBY', studentNumber: '202S-6117' },
        { name: 'Deejhay Chia', section: 'RUBY', studentNumber: '202S-7244' },
        { name: 'Daniella Mae Villalobos', section: 'CAPRICORN', studentNumber: '202S-5081' },
        { name: 'Ezekiel Flores', section: 'CAPRICORN', studentNumber: '202S-4995' },
        { name: 'Ashley Nicole Gornes', section: 'CAPRICORN', studentNumber: '202S-5076' },

    ];

    const defaultPassword = "12345678";
    const loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();
        
        const studentNumberInput = document.getElementById('studentNumber').value;
        const passwordInput = document.getElementById('password').value;
        const purposeInput = document.getElementById('purpose').value;

        // Validate student number and find the student
        const student = students.find(s => s.studentNumber === studentNumberInput);

        if (!student) {
            alert('Student not found. Please check your student number.');
            return;
        }

        // Validate password against default password
        if (passwordInput !== defaultPassword) {
            alert('Incorrect password. Please enter the correct default password.');
            return;
        }

        // Get current date and time in Manila timezone
        const now = new Date();
        const options = { timeZone: 'Asia/Manila', hour12: false };
        const date = now.toLocaleDateString('en-PH', options);
        const time = now.toLocaleTimeString('en-PH', options);

        // Log the history in localStorage
        const loginHistory = JSON.parse(localStorage.getItem('loginHistory')) || [];
        const entry = {
            date: date,
            time: time,
            studentNumber: student.studentNumber,
            studentName: student.name,
            section: student.section,
            purpose: purposeInput
        };
        
        loginHistory.push(entry);
        localStorage.setItem('loginHistory', JSON.stringify(loginHistory));

        alert(`Welcome, ${student.name}! You have logged in successfully.`);
        loginForm.reset();
    });
});

function viewHistory() {
    window.location.href = 'history.html';
}

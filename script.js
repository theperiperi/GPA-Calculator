document.addEventListener('DOMContentLoaded', function () {
    const calculateButton = document.querySelector('button[type="submit"]');
    const gpashow = document.getElementById('gpa');

    calculateButton.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent form submission

        const credits = [];
        const grades = [];

        for (let i = 1; i <= 8; i++) {
            const creditInput = document.getElementById(`credits${i}`);
            const gradeInput = document.getElementById(`grade${i}`);

            const creditValue =parseInt(creditInput.value) || 0;
            const gradeValue = parseInt(gradeInput.value) || 0;

            credits.push(creditValue);
            grades.push(gradeValue);
        }

        let totalCredits = 0;
        let totalGpa = 0;

        for (let i = 0; i < credits.length; i++) {
            totalCredits += credits[i];
            totalGpa += credits[i] * grades[i];
        }

        const gpa = totalGpa / totalCredits;
        gpashow.innerText = totalCredits ? gpa.toFixed(2) : '0.00';
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('student-assessment-form');
    const studentAnswer = document.getElementById('student-answer');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const answer = studentAnswer.value.trim();
        if (answer === '') {
            alert("Please type your answer before submitting.");
            return;
        }

        // Redirect to a new page
        window.location.href = "feedback.html";
    });
});
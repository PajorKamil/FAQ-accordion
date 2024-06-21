document.addEventListener('DOMContentLoaded', function() {
    const questions = document.querySelectorAll('.faq-q');

    questions.forEach(question => {
        question.addEventListener('click', function() {
            // Usuwamy klasę 'active' ze wszystkich odpowiedzi
            const allAnswers = document.querySelectorAll('.faq-a');
            allAnswers.forEach(answer => {
                answer.classList.remove('active');
            });

            // Usuwamy klasę 'active' z wszystkich ikon plus i dodajemy do minus
            const allPlusIcons = document.querySelectorAll('.plus');
            const allMinusIcons = document.querySelectorAll('.minus');
            allPlusIcons.forEach(plus => {
                plus.classList.remove('active');
            });
            allMinusIcons.forEach(minus => {
                minus.classList.remove('active');
            });

            // Dodajemy klasę 'active' do odpowiedzi obok klikniętego pytania
            const answer = question.nextElementSibling;
            if (answer && answer.classList.contains('faq-a')) {
                answer.classList.toggle('active');
            }

            // Dodajemy klasę 'active' do odpowiednich ikon
            const plusIcon = question.querySelector('.plus');
            const minusIcon = question.querySelector('.minus');
            if (plusIcon && minusIcon) {
                plusIcon.classList.toggle('active');
                minusIcon.classList.toggle('active');
            }
        });
    });
});

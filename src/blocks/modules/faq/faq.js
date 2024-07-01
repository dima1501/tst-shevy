document.addEventListener('DOMContentLoaded', () => {
    const toggles = document.querySelectorAll('.js-question-toggle');

    toggles.forEach(toggle => {
        toggle.addEventListener('click', () => {
            const question = toggle.closest('.js-question');
            if (question) {
                document.querySelectorAll('.js-question._expanded').forEach(expandedQuestion => {
                    if (expandedQuestion !== question) {
                        expandedQuestion.classList.remove('_expanded');
                    }
                });

                question.classList.toggle('_expanded');
            }
        });
    });
});
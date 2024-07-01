window.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.js-form');
    if (!form) return;

    // Инициализация маски
    const inputNumber = form.querySelector('.js-number');
    const im = new Inputmask("+7(999)999-99-99", { clearIncomplete: true });
    const submitBtn = form.querySelector('.js-submit');

    im.mask(inputNumber);

    submitBtn.addEventListener('click', (event) => {

        if (!form.checkValidity()) {
            event.preventDefault();
        }

        form.reportValidity();
        form.classList.add('validated')
    });
});

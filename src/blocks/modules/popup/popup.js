document.addEventListener('DOMContentLoaded', () => {
    const openButtons = document.querySelectorAll('.js-popup-open');
    const closeButtons = document.querySelectorAll('.js-popup-close');

    openButtons.forEach(button => {
        button.addEventListener('click', () => {
            const target = document.querySelector(button.getAttribute('data-target'));
            if (target) {
                target.classList.add('popup--visible');
            }
        });
    });

    const closePopup = (popup) => {
        if (popup) {
            popup.classList.remove('popup--visible');
        }
    };

    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const popup = button.closest('.popup');
            closePopup(popup);
        });
    });
});
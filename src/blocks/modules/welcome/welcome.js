document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.js-counter');
    const speed = 400;

    counters.forEach(counter => {
        const animate = () => {
            const value = +counter.getAttribute('data-value');
            const data = +counter.innerText;

            const time = value / speed;
            if (data < value) {
                counter.innerText = Math.ceil(data + time);
                setTimeout(animate, 1);
            } else {
                counter.innerText = value;
            }
        }

        animate();
    });
});
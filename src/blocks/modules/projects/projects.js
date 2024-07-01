import Glide from '@glidejs/glide'

document.addEventListener('DOMContentLoaded', () => {
    let glide;

    function initGlide() {
        if (window.innerWidth >= 1280) {
            glide = new Glide('.glide', {
                type: 'carousel',
                startAt: 0,
                perView: 3,
                gap: 24,
                breakpoints: {
                    1279: {
                        destroy: true
                    }
                }
            }).mount();
        }
    }

    function checkWidth() {
        if (window.innerWidth >= 1280) {
            if (!glide) {
                initGlide();
            }
        } else {
            if (glide) {
                glide.destroy();
                glide = null;
            }
        }
    }

    window.addEventListener('resize', checkWidth);

    checkWidth();
});
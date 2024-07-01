document.addEventListener('DOMContentLoaded', () => {
    const headerMenu = document.querySelector('.js-header-menu')
    const headerOpener = document.querySelector('.js-header-opener')
    const headerCloser = document.querySelector('.js-header-closer')

    headerOpener.addEventListener('click', () => {
        headerMenu.classList.add('_opened')
    })

    headerCloser.addEventListener('click', () => {
        headerMenu.classList.remove('_opened')
    })

    document.addEventListener('click', (event) => {
        if (!headerMenu.contains(event.target) && !headerOpener.contains(event.target)) {
            headerMenu.classList.remove('_opened')
        }
    })
});